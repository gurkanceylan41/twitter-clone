import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiDotsThreeCircle } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { TbSlash } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";

export const navSections = [
  {
    title: "HOME",
    icon: <IoHomeOutline />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    icon: <AiOutlineBell />,
  },

  {
    title: "Messages",
    icon: <AiOutlineMail />,
  },
  {
    title: "Grok",
    icon: <TbSlash className="border  text-white rounded " />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Communities",
    icon: <HiUsers />,
  },
  {
    title: "Premium ",
    icon: <img className="h-6  " src="x-logo.webp" alt="" />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More",
    icon: <PiDotsThreeCircle />,
  },
];
