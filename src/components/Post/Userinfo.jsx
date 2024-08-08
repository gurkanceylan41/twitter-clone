import moment from "moment";
import { MdEdit } from "react-icons/md";

const Userinfo = ({ tweet }) => {
  // Kullanıcı isminden yola çıkarak bir nickname oluşturduk
  const username =
    "@" +
    tweet.user.name.toLocaleLowerCase().replace(/ /g, "_") +
    Math.round(Math.random() * 99);

  // Tarih verisine eriş
  let date = tweet.createdAt?.toDate();

  // Moment kütüphanesiyle şuanki tarihten uzaklıgını hesapla
  date = moment(date).fromNow();

  return (
    <div className="flex gap-3 items-center  whitespace-nowrap ">
      <p>{tweet.user.name}</p>
      <p className="text-gray-400 text-sm">{username}</p>
      <p className="text-gray-400 text-sm">{date}</p>
      {tweet.isEdited && (
        <p className="text-gray-400 text-xs  ">
          <MdEdit className="md:hidden " />
          <span className="max-md:hidden">*edited</span>
        </p>
      )}
    </div>
  );
};

export default Userinfo;
