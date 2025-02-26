"use client";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { refreshToken } from "@/utils/auth";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { login, logout } = useAuthStore();

  useEffect(() => {
    const restoreSession = async () => {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("accessToken");

      if (storedUser && storedToken) {
        login(JSON.parse(storedUser), storedToken);
      } else {
        try {
          const { user, accessToken } = await refreshToken();
          login(user, accessToken);
        } catch {
          logout();
        }
      }
    };

    restoreSession();
  }, [login, logout]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
