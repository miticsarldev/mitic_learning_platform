import React from "react";

interface CommentProps {
  user: string;
  time: string;
  text: string;
  replies: { user: string; time: string; text: string }[];
}

const Comment: React.FC<CommentProps> = ({ user, time, text, replies }) => (
  <div className="border-b pb-4 mb-4">
    <div className="flex items-center">
      <span className="font-bold">{user}</span>
      <span className="ml-2 text-gray-500 text-sm">{time}</span>
    </div>
    <p className="mt-2">{text}</p>
    {replies.map((reply, index) => (
      <div key={index} className="ml-6 mt-2">
        <div className="flex items-center">
          <span className="font-bold">{reply.user}</span>
          <span className="ml-2 text-gray-500 text-sm">{reply.time}</span>
        </div>
        <p className="mt-1">{reply.text}</p>
      </div>
    ))}
  </div>
);

export default Comment;
