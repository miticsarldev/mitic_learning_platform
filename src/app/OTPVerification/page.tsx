"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Déclaration d'un type pour l'objet erreur afin de ne pas utiliser 'any'
interface AxiosError {
  response?: {
    data: {
      message: string;
    };
  };
}

const VerifyOTP = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); 
  const [otp, setOtp] = useState<string>(""); 
  const [error, setError] = useState<string>(""); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("Email introuvable !");
      return;
    }

    try {
      await axios.post("http://localhost:4444/api/verify-otp", { email, otp });
      router.push("/acceuil_college");
    } catch (err) {
      const error = err as AxiosError; // Type assertion pour l'erreur
      setError(error.response?.data?.message || "Code OTP invalide");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Vérification OTP</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="otp"
            placeholder="Entrez le code OTP"
            className="input-field border border-gray-300 p-2 w-full rounded"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#25026B] text-white w-full py-2 mt-4 rounded"
          >
            Vérifier
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
