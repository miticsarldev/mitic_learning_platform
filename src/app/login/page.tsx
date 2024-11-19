"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChromeIcon as Google, Facebook, Instagram } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <Card className="p-8 lg:p-12">
        <CardContent className="mx-auto max-w-[450px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Connexion</h1>
            <p className="text-muted-foreground">
              Content de te revoir! Veuillez entrer vos coordonnées.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Entrez votre email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Mot de passe oublié
              </Link>
            </div>
            <Button className="w-full" type="submit">
              Connexion
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continuer avec
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="outline" type="button" className="w-full">
              <Google className="mr-2 h-4 w-4" />
              Connexion avec Google
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Connexion avec Facebook
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Instagram className="mr-2 h-4 w-4" />
              Connexion avec Instagram
            </Button>
          </div>
          <div className="text-center text-sm">
            vous n&apos;avez pas de compte?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Inscrivez-vous
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="hidden lg:block">
        <div className="relative h-full">
          <Image
            src="/images/login_image.png"
            alt="Login background"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
          <div className="absolute bottom-12 left-12 space-y-2 text-white">
            <h2 className="text-4xl font-bold">Lorem Ipsum is simply</h2>
            <p className="text-xl">Lorem Ipsum is simply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
