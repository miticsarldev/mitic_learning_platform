"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChromeIcon as Google, Facebook, Instagram } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted", {
      name,
      login,
      password,
      confirmPassword,
      phone,
      acceptTerms,
    });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <Card className="p-8 lg:p-12">
        <CardContent className="mx-auto max-w-[450px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Inscription</h1>
            <p className="text-muted-foreground">
              Entrez vos informations et créer un compte
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login">Login</Label>
              <Input
                id="login"
                placeholder="Entrez un login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="Créer un mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmer mot de passe</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Saisissez à nouveau le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Numéro de téléphone</Label>
              <div className="flex gap-2">
                <Input className="w-[100px]" value="+223" readOnly />
                <Input
                  id="phone"
                  type="tel"
                  className="flex-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked: boolean) =>
                  setAcceptTerms(checked as boolean)
                }
                required
              />
              <label htmlFor="terms" className="text-sm">
                accepter les termes et conditions et la{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  politique de confidentialité
                </Link>
              </label>
            </div>
            <Button className="w-full" type="submit">
              Inscription
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
              Inscription avec Google
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Inscription avec Facebook
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Instagram className="mr-2 h-4 w-4" />
              Inscription avec Instagram
            </Button>
          </div>
          <div className="text-center text-sm">
            Vous avez un compte?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Connectez-vous
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="hidden lg:block">
        <div className="relative h-full">
          <Image
            src="/images/registration_image.png"
            alt="Register background"
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
