import React, { useState } from "react";
import Userinfo from "./Userinfo";
import DropDown from "./DropDown";
import Content from "./Content";

import Buttons from "./Buttons";

const Post = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="post flex gap-3 py-6 px-3 border-b border-zinc-600 ">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
        alt={tweet.user.name}
      />

      <div className="w-full">
        <div className="flex justify-between">
          <Userinfo tweet={tweet} />
          <DropDown tweet={tweet} setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        <Content tweet={tweet} />

        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
