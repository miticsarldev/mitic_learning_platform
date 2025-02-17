"use client";

import { create } from "zustand";

// Définir une interface pour `user` si tu sais à quoi il ressemble
interface User {
    id: string;
    firstname: string;
    lastname ?: string;
    role: string;
    email: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,

    login: (user, token) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", token);
        set({ user, accessToken: token });
    },

    logout: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        set({ user: null, accessToken: null });
    }
}));
