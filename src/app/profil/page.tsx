"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import { Edit, Save, X, ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/ui/footer/FooterSection";
import { useAuthStore } from "@/store/authStore";

const ProfileCard = () => {
    const { user, logout } = useAuthStore();
    const [isEditing, setIsEditing] = useState(false);
    const [userCon, setUser] = useState({
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
    const [backupUser, setBackupUser] = useState(user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Récupération des données utilisateur
    useEffect(() => {
        if (!user) return;
        axios.get(`http://localhost:4444/api/users/id/${user.id}`)
            .then((res) => {
                setUser(res.data);
                setBackupUser(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur de chargement des données.");
                setLoading(false);
            });
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setUser(backupUser);
        setIsEditing(false);
    };

    const handleSave = () => {
        axios.put(`http://localhost:4444/api/users/${user.id}`, user)
            .then(() => {
                setBackupUser(user);
                setIsEditing(false);
            })
            .catch(() => {
                setError("Erreur lors de la mise à jour.");
            });
    };

    const getInitials = (firstname?: string, lastname?: string) => {
        if (!firstname && !lastname) return "?"; // Si aucun nom, afficher "?"
        return `${firstname?.charAt(0) || ""}${lastname?.charAt(0) || ""}`.toUpperCase();
    };


    if (loading) return <p className="text-center">Chargement...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    const sentEmail = async () => {
        setError("");

        try {
            const link = `${window.location.origin}/reset-password?id=${user.id}`;
            const id = user.id
            const response = await axios.post("http://localhost:4444/api/send-reset-email", { id, link });

            if (response.status === 200) {
                alert("Email de modification envoyer a votre adresse avec succès !");
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "Une erreur s'est produite.");
        }
    };


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
                <h2 className="text-xl font-semibold mt-2">{userCon.firstname} {userCon.lastname}</h2>
                <p className="text-gray-500">{userCon.role}</p>
                <p className="text-gray-400">{userCon.address}</p>
            </motion.div>

            {/* Section Profile Information */}
            <div className="w-full bg-gray-100 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Informations du profil</h3>
                    <div className="flex space-x-2">
                        <button onClick={() => {
                            if (isEditing) setBackupUser(user);
                            setIsEditing(!isEditing);
                        }} className="text-[#490AC6]">
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
                    {Object.entries(userCon).map(([key, value]) => (
                        key !== "password" && key !== "role" && key !== "status" && key !== "isVerified" && key !== "_id" && key !== "createdAt" && key !== "updatedAt" && key !== "__v" && (
                            <div key={key} className="flex justify-between">
                                <span className="font-medium capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                </span>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                                        className={`border p-1 rounded-md ${isEditing ? "border-blue-500" : "border-gray-300"
                                            }`}
                                        disabled={key === "email" || key === "username"}
                                    />
                                ) : (
                                    <span>{value}</span>
                                )}
                            </div>
                        )
                    ))}
                </motion.div>
            </div>
            <button type="submit" className="w-full bg-[#490ac6c5] text-white p-2 rounded" onClick={sentEmail}>
                renitialiser le mot de passe
            </button>

            {/* Section Bio */}
            <div className="w-full bg-gray-100 p-4 rounded-xl">
                <h3 className="text-lg font-medium mb-4">Biographie</h3>
                <p className="text-gray-600">{user.bio || "Aucune bio ajoutée"}</p>
            </div>
        </div>
        <FooterSection />
    </div>
);
};

export default ProfileCard;
