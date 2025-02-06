import { useState } from "react";
import axios from "axios";

interface InfoLineProps {
    Icon?: React.ComponentType<any>;
    text?: string;
    title?: string;
    emptyCard?: string;
    userId: string;  // ID de l'utilisateur à modifier
}

const InfoLine: React.FC<InfoLineProps> = ({
    Icon,
    text,
    title,
    emptyCard,
    userId,
}) => {
    const [editableText, setEditableText] = useState<string>(text || "");
    const [editableTitle, setEditableTitle] = useState<string>(title || "");
    const [isEditing, setIsEditing] = useState<boolean>(false);

    // Fonction de gestion de la mise à jour
    const handleUpdate = async () => {
        try {
            const updatedData = {
                text: editableText,
                title: editableTitle,
            };

            const response = await axios.put(`/api/users/${userId}`, updatedData);
            console.log("Utilisateur mis à jour avec succès :", response.data);
            setIsEditing(false);  // Arrêter l'édition après la mise à jour
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    // Si seule emptyCard est fournie, on affiche un message centré
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
                    // Formulaire d'édition
                    <div className="flex-1 mr-2">
                        <input
                            type="text"
                            className="text-lg text-gray-800 p-2 border border-gray-300 rounded"
                            value={editableTitle}
                            onChange={(e) => setEditableTitle(e.target.value)}
                        />
                    </div>
                ) : (
                    title && (
                        <div className="flex-1 mr-2">
                            <h3 className="text-lg text-gray-800">{title}</h3>
                        </div>
                    )
                )}

                {isEditing ? (
                    <div className="flex-1 flex items-center gap-2">
                        <textarea
                            className="text-gray-500 italic p-2 border border-gray-300 rounded"
                            value={editableText}
                            onChange={(e) => setEditableText(e.target.value)}
                        />
                    </div>
                ) : (
                    text && (
                        <div className="flex-1 flex items-center gap-2">
                            {Icon && <Icon className="h-5 w-5 text-gray-500" />}
                            <p className="text-gray-500 italic">{text}</p>
                        </div>
                    )
                )}

                <div className="flex items-center">
                    {isEditing ? (
                        <button
                            onClick={handleUpdate}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Valider
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-green-500 text-white p-2 rounded"
                        >
                            Modifier
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfoLine;
