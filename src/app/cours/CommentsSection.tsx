import React, { useState } from "react";
import Comment from "./Comment";

interface CommentData {
    user: string;
    time: string;
    text: string;
    replies: { user: string; time: string; text: string }[];
}

const CommentsSection: React.FC<{ comments: CommentData[] }> = ({ comments }) => {
    const [visibleComments, setVisibleComments] = useState(2);

    const handleLoadMore = () => {
        setVisibleComments((prev) => prev + 2);
    };

    return (
        <div>
            {comments.slice(0, visibleComments).map((comment, index) => (
                <Comment key={index} {...comment} />
            ))}
            {visibleComments < comments.length && (
                <button onClick={handleLoadMore} className="text-blue-500 mt-4">
                    Charger plus de commentaires
                </button>
            )}
        </div>
    );
};

export default CommentsSection;
