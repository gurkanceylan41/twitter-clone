import React from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ResetButton = ({ email }) => {
  // Şifre sıfırlama epostası gönder
  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Başarıyla gönderildi Email'nizi kontrol ediniz");
      })
      .catch((err) => toast.error("Hata oluştu"));
  };

  return (
    <button onClick={handleReset} className="text-red-500">
      Şifrenizi mi unuttunuz ?
    </button>
  );
};

export default ResetButton;
