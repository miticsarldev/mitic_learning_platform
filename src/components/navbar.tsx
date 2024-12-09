"use client";

import Link from "next/link";
import { BookOpen, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky max-w-screen-full px-20 mx-auto top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <BookOpen className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              MiticEduPlatform
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/"
            >
              Acceuil
            </Link>
            <div className="relative group">
              <button className="transition-colors hover:text-foreground/80 text-foreground">
                Cours
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/courses/math"
                >
                  Mathématiques
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/courses/science"
                >
                  Sciences
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/courses/history"
                >
                  Histoire
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="transition-colors hover:text-foreground/80 text-foreground">
                Classe
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/classes/primary"
                >
                  Primaire
                </Link>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 text-foreground"
                  href="/classes/secondary"
                >
                  Secondaire
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
              href="/entreprise"
            >
            Entreprise
          </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/cours/cours_details"
            >
              Les Details de Cours
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/cours"
            >
              Les Details de Cours pendant la formation
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/tutors"
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
          <nav className="flex items-center">
            <Button asChild variant="ghost" className="mr-2">
              <Link href="/login">Se Connecter</Link>
            </Button>
            <Button asChild>
              <Link href="/register">S&apos;inscrire</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
