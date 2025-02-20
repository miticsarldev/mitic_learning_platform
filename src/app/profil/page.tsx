"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Edit, Save, X } from "lucide-react";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/ui/footer/FooterSection";
import { useAuthStore } from "@/store/authStore";
import { User } from "../types";

// Définition des types pour la structure des données utilisateur

const ProfileCard = () => {
    const { user } = useAuthStore();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [userCon, setUserCon] = useState<User>({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        bio: "",
        role: ""
    });
    const [backupUser, setBackupUser] = useState<User>({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        bio: "",
        role: "",
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const apiBaseUrl = "http://localhost:4444/api";

    // Récupération des données utilisateur
    useEffect(() => {
        if (!user?.id) return;
        axios
            .get(`${apiBaseUrl}/users/id/${user.id}`)
            .then((res) => {
                setUserCon(res.data);
                setBackupUser(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur de chargement des données: " + (err.response?.data?.message || err.message));
                setLoading(false);
            });
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCon((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCancel = () => {
        setUserCon(backupUser);
        setIsEditing(false);
    };

    const handleSave = async () => {
        try {
            await axios.put(`${apiBaseUrl}/users/${user?.id}`, userCon);
            setBackupUser(userCon);
            setIsEditing(false);
        } catch (err) {
            setError("Erreur lors de la mise à jour: " + err);
        }
    };

    const sentEmail = async () => {
        if (!user?.id) {
            setError("Utilisateur non authentifié.");
            return;
        }

        setError("");
        const link = `${window.location.origin}/reset-password?id=${user?.id}`;
        try {
            const response = await axios.post(`${apiBaseUrl}/send-reset-email`, { id: user?.id, link });
            if (response.status === 200) {
                alert("Email de modification envoyé à votre adresse avec succès !");
            }
        } catch (err) {
            setError("Une erreur s'est produite: " + err);
        }
    };

    const getInitials = (firstname?: string, lastname?: string) => {
        if (!firstname && !lastname) return "?";
        return `${firstname?.charAt(0) || ""}${lastname?.charAt(0) || ""}`.toUpperCase();
    };

    const renderInputField = (key: string, value: string | undefined) => {
        const formattedKey = key.replace(/([A-Z])/g, " $1").toLowerCase();

        return isEditing ? (
            <input
                type="text"
                name={key}
                value={value || ""}
                onChange={handleChange}
                placeholder={`Enter ${formattedKey}`}
                className={`border p-1 rounded-md ${isEditing ? "border-blue-500" : "border-gray-300"}`}
                disabled={key === "email" || key === "username"}
            />
        ) : (
            <span>{value}</span>
        );
    };

    if (loading) return <p className="text-center">Chargement...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl w-full max-w-2xl mx-auto space-y-6 m-5">
                {/* Avatar avec Initiales */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-[#490ac6c5] text-white text-2xl font-bold border-4 border-[#490AC6]">
                        {getInitials(userCon.firstname, userCon.lastname)}
                    </div>
                    <h2 className="text-xl font-semibold mt-2">
                        {userCon.firstname} {userCon.lastname}
                    </h2>
                    <p className="text-gray-500">{userCon.role}</p>
                    <p className="text-gray-400">{userCon.address}</p>
                </motion.div>

                {/* Section Profile Information */}
                <div className="w-full bg-gray-100 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Informations du profil</h3>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => {
                                    if (isEditing) setBackupUser(userCon);
                                    setIsEditing(!isEditing);
                                }}
                                className="text-[#490AC6]"
                            >
                                {isEditing ? <Save onClick={handleSave} /> : <Edit />}
                            </button>
                            {isEditing && (
                                <button onClick={handleCancel} className="text-red-500">
                                    <X />
                                </button>
                            )}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-3"
                    >
                        {Object.entries(userCon)
                            .filter(([key]) => !["password", "role", "status", "isVerified", "_id", "createdAt", "updatedAt", "__v"].includes(key))
                            .map(([key, value]) => renderInputField(key, value as string))}
                    </motion.div>
                </div>
                <button type="submit" className="w-full bg-[#490ac6c5] text-white p-2 rounded" onClick={sentEmail}>
                    Réinitialiser le mot de passe
                </button>

                {/* Section Bio */}
                <div className="w-full bg-gray-100 p-4 rounded-xl">
                    <h3 className="text-lg font-medium mb-4">Biographie</h3>
                    <p className="text-gray-600">{userCon.bio || "Aucune bio ajoutée"}</p>
                </div>
            </div>
            <FooterSection />
        </div>
    );
};

export default ProfileCard;