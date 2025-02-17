import axios, { AxiosError } from "axios";

const API_URL = "http://localhost:4444/api";

interface User {
    _id: string;
    email: string;
    username?: string;
    role?: string;
    lastLogin?: string;
}

export const login = async (email: string, password: string): Promise<User> => {
    try {
        const response = await axios.post<User>(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data || { message: "Erreur inconnue du serveur." };
        }
        throw new Error("Erreur inconnue du serveur.");
    }
};

export const getUserById = async (userId: string): Promise<User> => {
    try {
        const response = await fetch(`${API_URL}/users/id/${userId}`);

        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        return await response.json() as User;
    } catch (error: unknown) {
        console.error("Erreur lors de la récupération de l'utilisateur:", error);
        throw error instanceof Error ? error : new Error("Erreur inconnue.");
    }
};
