import React from "react";

interface Reply {
  user: string;
  time: string;
  text: string;
}

interface CommentProps {
  user: string;
  time: string;
  text: string;
  replies: Reply[];
}

const Comment: React.FC<CommentProps> = ({ user, time, text, replies }) => {
  if (!user || !time || !text) {
    return <p className="text-red-500">Le commentaire est incomplet.</p>;
  }

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center">
        <span className="font-bold">{user}</span>
        <span className="ml-2 text-gray-500 text-sm">{time}</span>
      </div>
      <p className="mt-2">{text}</p>
      {replies && replies.length > 0 ? (
        replies.map((reply) => (
          <div key={reply.user + reply.time} className="ml-6 mt-2">
            <div className="flex items-center">
              <span className="font-bold">{reply.user}</span>
              <span className="ml-2 text-gray-500 text-sm">{reply.time}</span>
            </div>
            <p className="mt-1">{reply.text}</p>
          </div>
        ))
      ) : (
        <p className="ml-6 text-gray-500">Pas de reponse disponible.</p>
      )}
    </div>
  );
};

export default Comment;
