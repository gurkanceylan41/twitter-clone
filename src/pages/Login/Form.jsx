import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ResetButton from "./ResetButton";

const Form = () => {
  const [isSignUp, setIsSıngUp] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesabınız oluşturuldu");
          navigate("/feed");
        })
        .catch((err) => toast.error("Hata! : " + err.code));
    } else {
      signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesaba giriş yapıldı");
          navigate("/feed");
        })
        .catch((err) => {
          toast.error("Hata! : " + err.code);
          if (err.code === "auth/invalid-credential") {
            setIsError(true);
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
          className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
        />
        <label className="mt-5">Password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="text"
          required
          className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
        />

        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300">
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
      </form>

      <p className="mt-5">
        <span className="text-gray-500">
          {isSignUp
            ? "Do you already have an account?"
            : "Don't have an account?"}
        </span>
        <span
          onClick={() => setIsSıngUp(!isSignUp)}
          className="text-blue-500 cursor-pointer ms-2"
        >
          {isSignUp ? "Log In" : " Sign Up"}
        </span>
      </p>

      {isError && <ResetButton email={email} />}
    </>
  );
};

export default Form;
