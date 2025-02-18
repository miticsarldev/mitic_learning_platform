// components/UserInitializer.tsx
'use client';

import useInitializeUser from "@/app/hooks/useInitializeUser";


const UserInitializer = ({ children }: { children: React.ReactNode }) => {
    // Initialisation des données de l'utilisateur avec le hook
    useInitializeUser();

    return <>{children}</>;
};

export default UserInitializer;
