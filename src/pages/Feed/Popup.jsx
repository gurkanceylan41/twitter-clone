import React from "react";
import { Link } from "react-router-dom";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  ml-[-900px] mt-[500px] ">
      <div className="bg-black border border-zinc-600 py-2 px-10 rounded-xl flex flex-col space-y-3 max-w-[][10px]">
        <button onClick={onClose} className="self-end text-white">
          x
        </button>
        <div className="flex flex-col  ">
          <button className="mb-2    ">Add an existing account</button>
          <Link to={"/"} className="text-white ">
            Log out @gurkan.ceylan41
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
