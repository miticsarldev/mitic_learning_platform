import { useState } from "react";
import axios from "axios";

interface InfoLineProps {
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text?: string;
    title?: string;
    emptyCard?: string;
    userId: string;
}

const InfoLine: React.FC<InfoLineProps> = ({ Icon, text, title, emptyCard, userId }) => {
    const [editableData, setEditableData] = useState({ text: text || "", title: title || "" });
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:4444/api/users/${userId}`, editableData);
            console.log("Utilisateur mis à jour avec succès :", response.data);
            setIsEditing(false);
        } catch (error: any) {
            console.error("Erreur lors de la mise à jour :", error.response?.data || error.message);
        }
    };

    if (emptyCard && !title && !text && !Icon) {
        return (
            <div>
                <div className="border-b border-gray-300 mt-4"></div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="text-gray-500 text-lg mb-4 text-center">{emptyCard}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="border-b border-gray-300 mt-4"></div>
            <div className="flex justify-between items-center mt-4">
                {isEditing ? (
                    <input
                        type="text"
                        className="flex-1 text-lg text-gray-800 p-2 border border-gray-300 rounded"
                        value={editableData.title}
                        onChange={(e) => setEditableData({ ...editableData, title: e.target.value })}
                    />
                ) : (
                    title && <h3 className="flex-1 text-lg text-gray-800">{title}</h3>
                )}

                {isEditing ? (
                    <textarea
                        className="flex-1 text-gray-500 italic p-2 border border-gray-300 rounded"
                        value={editableData.text}
                        onChange={(e) => setEditableData({ ...editableData, text: e.target.value })}
                    />
                ) : (
                    text && (
                        <div className="flex-1 flex items-center gap-2">
                            {Icon && <Icon className="h-5 w-5 text-gray-500" />}
                            <p className="text-gray-500 italic">{text}</p>
                        </div>
                    )
                )}

                <button
                    onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
                    className={`p-2 rounded ${isEditing ? "bg-blue-500" : "bg-green-500"} text-white`}
                >
                    {isEditing ? "Valider" : "Modifier"}
                </button>
            </div>
        </div>
    );
};

export default InfoLine;
