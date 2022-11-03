import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="user"
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}

      {/* Buttons */}

      {/* Caption */}

      {/* Comments */}

      {/* Input box */}
    </div>
  );
};

export default Post;
