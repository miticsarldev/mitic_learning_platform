"use client";
import { useState } from "react";
import Link from "next/link";
import ClickOutside from "./ClickOutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBook, faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { logoutUser } from "@/utils/auth";

const DropdownUser = () => {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, logout } = useAuthStore();

    const username = user ? `${user.firstname} ${user.lastname ? user.lastname : ""}` : "Utilisateur inconnu";
    const role = user?.role || "Rôle inconnu";

    const handleLogout = async () => {
        await logoutUser();
        logout();
        router.push("/login");
    };

    return (
        <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
                {/* Avatar utilisateur */}
                <span className="relative h-10 w-10 flex items-center justify-center bg-gray-300 rounded-full text-white text-xl">
                    <FontAwesomeIcon icon={faUser} />
                </span>

                {/* Nom & rôle */}
                <div className="hidden lg:block text-left">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{username}</p>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>

                {/* Icône flèche */}
                <FontAwesomeIcon icon={faArrowDown} className="text-gray-600 dark:text-gray-300" />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all">
                    <ul className="py-2">
                        <li>
                            <Link
                                href="/profil"
                                className="flex items-center gap-3 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <FontAwesomeIcon icon={faUser} />
                                Mon profil
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/historique_cours/676d76515fd4b1acc48214c1"
                                className="flex items-center gap-3 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <FontAwesomeIcon icon={faBook} />
                                Mes cours
                            </Link>
                        </li>
                    </ul>

                    {/* Bouton Déconnexion */}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition"
                    >
                        <FontAwesomeIcon icon={faDoorOpen} />
                        Se déconnecter
                    </button>
                </div>
            )}
        </ClickOutside>
    );
};

export default DropdownUser;
