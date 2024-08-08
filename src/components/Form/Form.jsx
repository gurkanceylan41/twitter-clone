import { GiWorld } from "react-icons/gi";
import { useState } from "react";
import Label from "../../constants/Label";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/index";
import Loader from "../Loader/index";

import { toast } from "react-toastify";
import upload from "../../utils/upload";

const Form = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1) inputlardaki veriye eriş
    const text = e.target[0].value;
    const image = e.target[2].files[0];
    console.log(text);

    // 2) yazı ve resim içeriği yoksa fonk durdur
    if (!text && !image) {
      return toast.warning("Lütfen içerik giriniz", {
        position: "bottom-right",
      });
    }

    try {
      setIsLoading(true);
      //  3) resmi storage'a kaydet
      const url = await upload(image);
      console.log(url);

      // 4) yeni tweet belgesini kolleksiyona kaydet
      // 4.1) kolleksiyon referansı al
      const tweetsCol = collection(db, "tweets");

      // 4.2) belgeyi kaydet
      await addDoc(tweetsCol, {
        textContent: text,
        imageContent: url,
        likes: [],
        createdAt: serverTimestamp(),
        isEdited: false,
        user: {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
          photo: auth.currentUser.photoURL,
        },
      });

      // 5) formu sıfırla
      e.target.reset();
    } catch (err) {
      console.log(err);
      toast.error("Bir hata oluştu");
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-b border-zinc-600 p-4"
    >
      <img src={user?.photoURL} className="rounded-full h-[35px] md:h-[45px]" />

      <div className="header-input w-full">
        <input
          className="w-full mt-1 bg-transparent text outline-none md:text-lg"
          placeholder="What is happening?!"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {isOpen && (
          <div className="border-b border-zinc-600 p-4 mb-3 flex items-center gap-1 text-[#1C9BEF] font-bold">
            <GiWorld />
            <p>Everyone can reply</p>
          </div>
        )}
        <div className="lab flex justify-between items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex gap-5 text-[#1C9BEF] text-xl"
          >
            {Label.map((Label, index) => (
              <label
                key={index}
                className={`text-lg justify-between ${
                  Label.extraClasses || ""
                }`}
                htmlFor={Label.id || ""}
              >
                <Label.component />
                {Label.id && (
                  <input className="hidden" type="file" id={Label.id} />
                )}
              </label>
            ))}
          </button>
          <button
            disabled={!text.trim()}
            type="submit"
            className={`px-3 py-2 min-w-[85px] min-h-[40px] rounded-full transition flex justify-center items-center ${
              !text.trim()
                ? "bg-[#188CD8] opacity-50 "
                : "bg-[#188CD8] hover:bg-[#1874C2]"
            }`}
          >
            {isLoading ? <Loader /> : "Post"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
