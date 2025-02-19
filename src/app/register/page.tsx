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
import axios from "axios";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/auth";
import { useAuthStore } from "@/store/authStore";


export default function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role] = useState("student");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4444/api/register", {
        firstname,
        email,
        username,
        password,
        phone,
        role
      });

      if (response) {
        const credential = {
          email: email,
          password: password
        }
        const { user, accessToken } = await loginUser(credential);
        login(user, accessToken);
      }
      router.push(`/OTPVerification?email=${email}`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Impossible de s'inscrire.");
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <Card className="p-8 lg:p-12">
        <CardContent className="mx-auto max-w-[450px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#25026B]">Inscription</h1>
            <p className="text-muted-foreground">
              Entrez vos informations et créer un compte
            </p>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                placeholder="Entrez votre nom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login">E-Mail</Label>
              <Input
                id="login"
                placeholder="Entrez un login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                type="username"
                placeholder="Créer un nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <Link href="/login" className="text-primary hover:underline text-[#25026B] font-bold">
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
