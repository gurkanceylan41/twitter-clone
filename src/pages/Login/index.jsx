import React from "react";
import GoogleButton from "./GoogleButton";
import Form from "./Form";

const Login = () => {
  return (
    <div className="h-screen bg-[#242424] text-white grid place-items-center">
      <div className="bg-black py-16 px-32 rounded-lg flex flex-col gap-10">
        <div className="flex justify-center">
          <img src="x-logo.webp" className="h-[60px]" />
        </div>

        <h1 className="text-lg font-bold text-center">Log in to Twitter</h1>

        <GoogleButton />

        <Form />

        <form action=""></form>
      </div>
    </div>
  );
};

export default Login;
