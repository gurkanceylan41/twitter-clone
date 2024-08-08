import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const Label = [
  {
    component: GoFileMedia,
    id: "image",
    extraClasses: "p-2 cursor-pointer rounded-full hover:bg-gray-800",
  },
  { component: MdOutlineGifBox },
  { component: BiPoll },
  { component: BsEmojiSmile },
  { component: RiCalendarScheduleLine },
  { component: CiLocationOn },
];

export default Label;
