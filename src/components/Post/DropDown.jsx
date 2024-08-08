import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { deleteDoc, doc } from "firebase/firestore"; // Firestore'un standart sürümünden import et
import { db } from "../../firebase/index"; // Firestore referansınızı doğru import edin
import { useState } from "react";
import Modal from "../Modal/index";

const DropDown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);

  // silme
  const handleDelete = () => {
    // silinecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // dökmanı kaldır
    deleteDoc(tweetRef);
  };

  return (
    <>
      <label className="popup">
        <input type="checkbox" />
        <div className="burger" tabIndex="0">
          <BsThreeDots className="text-[#71767A] text-lg   hover:text-[#1C9BEF]  " />
        </div>
        <nav className="popup-window">
          <legend>Actions</legend>
          <ul>
            <li>
              <button onClick={() => setIsOpen(true)}>
                <MdEdit className="text-lg" />
                <span>Edit</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleDelete}>
                <MdDeleteForever className="text-lg" />

                <span>Delete</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
      {isOpen && <Modal tweet={tweet} close={() => setIsOpen(false)} />}
    </>
  );
};

export default DropDown;
