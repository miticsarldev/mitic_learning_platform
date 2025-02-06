"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";
import DropdownUser from "./DropdownUser";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  console.log(user);
  

  return (
    <header className="sticky max-w-screen-full px-20 mx-auto top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <BookOpen className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">MiticEdu</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div className="relative group">
              <Link
                href="/"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Accueil
              </Link>
              <div className="absolute left-1/2 translate-x-[-50%] hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/acceuil_primaire"
                >
                  Primaire
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/acceuil_college"
                >
                  College
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/classes/highschool"
                >
                  Lycée
                </Link>
              </div>
            </div>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/liste_cours"
            >
              Explorez nos Cours
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/entreprise"
            >
              Entreprise
            </Link>
          </nav>
        </div>
        <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 py-2 mr-2 px-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un cours..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          {
            user ?
              (<DropdownUser />)
              : (
                <nav className="flex items-center">
                  <Button asChild variant="ghost" className="mr-2">
                    <Link href="/login">Se Connecter</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">S&apos;inscrire</Link>
                  </Button>
                </nav>)
          }
        </div>
      </div>
    </header>
  );
}
