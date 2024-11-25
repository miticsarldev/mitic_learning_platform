"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OTPInput } from "@/components/ui/OTPInput";

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input if not empty
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp.join(""));
    // Vous pouvez envoyer le code OTP au backend ici
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <Card className="p-8 lg:p-12 flex items-center">
        <CardContent className="mx-auto max-w-[450px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#25026B]">Vérification OTP</h1>
            <p className="text-muted-foreground">
              Entrez le code OTP envoyé à votre numéro de téléphone
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center gap-4">
              {otp.map((value, index) => (
                <OTPInput
                  key={index}
                  value={value}
                  onChange={(val) => handleChange(index, val)}
                  autoFocus={index === 0}
                  id={`otp-${index}`}
                />
              ))}
            </div>
            <Button className="w-full" type="submit">
              Vérifier
            </Button>
          </form>
          <div className="text-center text-sm">
            Vous n'avez pas reçu de code ?{" "}
            <button
              onClick={() => console.log("Renvoyer OTP")}
              className="hover:underline text-[#25026B] font-bold"
            >
              Renvoyer le code
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Image d'arrière-plan */}
      <div className="hidden lg:block">
        <div className="relative h-full">
          <Image
            src="/images/otp_image.jpg"
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
