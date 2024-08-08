import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/index";

const Buttons = ({ tweet }) => {
  // Oturumu acık olan kullanıcı bu tweet'i likeladı mı ?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  // Like butonuna tıklanınca :
  // tiklayan kullanıcının idsini like'layanlar dizisine ekle
  const toggleLike = async () => {
    const tweetRef = doc(db, "tweets", tweet.id);

    // referansı alınan tweet'i güncelle
    await updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="text-[#71767A] flex justify-between items-center  ">
      <span className="p-3 rounded-full cursor-pointer transition hover:bg-[#05140D] hover:text-[#1C9BEF] text-[#71767A]">
        <BiMessageRounded className="text-2xl" />
      </span>

      <span className="p-3 rounded-full cursor-pointer transition hover:bg-[#05140D] hover:text-[#00BA7C]">
        <BiRepost className="text-2xl" />
      </span>

      <span
        onClick={toggleLike}
        className="p-3 rounded-full cursor-pointer transition hover:bg-[#05140D] hover:text-[#F9197F] flex items-center gap-2"
      >
        {isLiked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-xl" />
        )}
        {tweet.likes.length}
      </span>

      <button className="p-3 text-s rounded-full cursor-pointer transition hover:bg-[#05140D] hover:text-[#1C9BEF] ">
        ı|ı|
      </button>

      <span className="flex items-center gap-3 justify-center mt-2">
        <span className="p-1 rounded-full cursor-pointer transition hover:bg-[#05140D] hover:text-[#1C9BEF] ">
          <FaRegBookmark className="text-l" />
        </span>
        <span className="p-1 rounded-full cursor-pointer transition hover:bg-[#05140D] hover:text-[#1C9BEF]">
          <RiShare2Line className="text-xl" />
        </span>
      </span>
    </div>
  );
};

export default Buttons;
