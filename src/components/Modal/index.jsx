import { doc, updateDoc } from "firebase/firestore";
import { IoMdClose } from "react-icons/io";
import { db } from "../../firebase";
import { useState } from "react";
import upload from "../../utils/upload";
import { toast } from "react-toastify";

const Modal = ({ tweet, close }) => {
  const [isPicDeleting, setIsPicDeleting] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const text = e.target[0].value;
    const file = e.target[1]?.files && e.target[1].files[0];

    // güncellenicek olan dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    try {
      // modalı kapat
      close();

      // eğer yeni dosya seçildiyse
      if (file) {
        // dosyayıyı storage'a yükle
        const url = await upload(file);

        // eğer dosya seçildiyse hem yazı hem fotoğrafı güncelle
        return await updateDoc(tweetRef, {
          textContent: text,
          imageContent: url,
          isEdited: true,
        });
      }

      // eğer resim kaldırılıcaksa resim ve yazıyı güncelle
      if (isPicDeleting) {
        return await updateDoc(tweetRef, {
          textContent: text,
          imageContent: null,
          isEdited: true,
        });
      }

      // eğer dosya seçilmediyse sadece yazıyı güncelle
      return await updateDoc(tweetRef, {
        textContent: text,
        isEdited: true,
      });
    } catch (err) {
      console.log(err);
      toast.error("HATA!: " + err.code);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-zinc-700 z-[9999] grid place-items-center bg-opacity-70">
      <div className="bg-black rounded-md py-10 px-8 w-3/4 max-w-[600px] min-h-[60vh] max-h-[80vh] flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Edit Tweet</h1>

          <button onClick={close}>
            <IoMdClose className="text-3xl transition hover:text-gray-500" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 mt-10 justify-between"
        >
          <div className="flex flex-col">
            <label>Change Content</label>
            <input
              defaultValue={tweet.textContent}
              className="mt-4 border rounded-md py-1 px-2 text-black"
              name="title"
              type="text"
            />

            {!isPicDeleting && tweet.imageContent ? (
              <button
                onClick={() => setIsPicDeleting(true)}
                className="mt-10 bg-orange-500 rounded-md p-2 hover:bg-orange-600"
              >
                Remove photo
              </button>
            ) : (
              <>
                <label className="mt-10 mb-4"> Add / Change Photo</label>
                <input name="file" type="file" />
              </>
            )}
          </div>

          <div className="flex justify-end gap-5">
            <button
              onClick={close}
              className="bg-gray-500 py-2 px-4 rounded-full hover:bg-gray-600"
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 min-w-[80px] flex justify-center items-center"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
