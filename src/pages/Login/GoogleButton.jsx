import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Oturum açıldı");
        navigate("/feed");
      })
      .catch((err) => toast.err("HATA! :" + err.code));
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap"
    >
      <img src="g-logo.png" className="h-[20px]" />
      Log in with Google
    </button>
  );
};

export default GoogleButton;
