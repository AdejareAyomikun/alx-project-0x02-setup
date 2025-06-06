import React from "react";
import { PostProps } from "@/interfaces"; // Adjust path if necessary

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg p-6 border border-gray-200 rounded-lg transition-shadow duration-200">
      <h2 className="mb-2 font-bold text-gray-800 text-xl">{title}</h2>
      <p className="mb-4 text-gray-600 text-sm">
        Post ID: {id} | User ID: {userId}
      </p>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

export default PostCard;