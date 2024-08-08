import { BiSolidDoorOpen } from "react-icons/bi";
import { navSections } from "../../constants/constants";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";
const Nav = ({ user }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <nav className="flex flex-col justify-between items-end px-7 py-4">
      <div>
        <Link to={"/feed"}>
          <img src="x-logo.webp" className="w-14 " />
        </Link>

        {navSections.map((i, key) => (
          <div
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-[#505050b7] max-md:justify-center"
            key={key}
          >
            {i.icon}
            <span className="whitespace-nowrap max-md:hidden">{i.title}</span>
          </div>
        ))}
        <button className="bg-[#188CD8]  py-3 px-20 min-w-[15px] min-h-[40px] rounded-full transition hover:bg-[#1874C2] max-md:p-2">
          Post
        </button>

        <div className="mt-10">
          {!user ? (
            <div className="w-12 h-12 bg-gray-400 rounded-full animate-bounce"></div>
          ) : (
            <div className="flex  items-center gap-2">
              <img src={user.photoURL} className="rounded-full max-w-[45px]" />

              <div className="email max-md:hidden flex flex-col">
                <span className="font-bold capitalize flex justify-between">
                  {user.displayName}
                  <div className="relative">
                    <button
                      onClick={() => setIsPopupOpen(true)}
                      className="tracking-widest"
                    >
                      ...
                    </button>
                    <Popup
                      isOpen={isPopupOpen}
                      onClose={() => setIsPopupOpen(false)}
                    />
                  </div>
                </span>

                <span className="text-[#71767A]">{user.email}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
