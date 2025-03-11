"use client";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ResetForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) {
      setError("ID utilisateur non fourni.");
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Réinitialisation de l'erreur avant chaque soumission

    // Vérification si les mots de passe correspondent
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vérification de la présence de l'ID avant de soumettre
    if (!id) {
      setError("ID utilisateur manquant.");
      return;
    }

    try {
      // Requête POST pour réinitialiser le mot de passe
      const response = await axios.post(
        "http://localhost:4444/api/reset-password",
        {
          id,
          newPassword,
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => router.push("/"), 2000);
      }
    } catch (err) {
      // Gestion de l'erreur Axios
      setError("Une erreur s'est produite." + err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Modifier le mot de passe</h2>
      {success ? (
        <p className="text-green-600">Mot de passe mis à jour avec succès !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Modifier le mot de passe
          </button>
        </form>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

const ResetFormPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetForm />
    </Suspense>
  );
};
export default ResetFormPage;
