"use client";

import { create } from "zustand";

interface AuthState {
    user: any | null;
    accessToken: string | null;
    login: (user: any, token: string) => void;
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
