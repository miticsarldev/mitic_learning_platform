// Définir un type pour les credentials
interface Credentials {
    email: string;
    password: string;
}

export const loginUser = async (credentials: Credentials) => {
    const res = await fetch("http://localhost:4444/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!res.ok) {
        throw new Error("Identifiants incorrects");
    }

    return res.json();
};

export const refreshToken = async () => {
    const res = await fetch("http://localhost:4444/api/refresh", {
        method: "POST",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Refresh Token invalide");
    }

    return res.json();
};

export const logoutUser = async () => {
    await fetch("http://localhost:4444/api/logout", {
        method: "POST",
        credentials: "include",
    });
};
