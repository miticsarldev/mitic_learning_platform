"use client";
import React, { useState } from "react";
import { initiatePayment, checkPaymentStatus } from "../services/orangeMoneyService";

const Payment: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handlePayment = async () => {
    setLoading(true);
    setError("");

    if (!amount || amount <= 0) {
      setError("Veuillez entrer un montant valide.");
      setLoading(false);
      return;
    }

    if (!phoneNumber.match(/^(\+223|00223|0)[0-9]{8}$/)) {
      setError("Veuillez entrer un numéro Orange Money valide.");
      setLoading(false);
      return;
    }

    try {
      const response = await initiatePayment(amount, phoneNumber);
      setPaymentUrl(response.payment_url);
      setOrderId(response.order_id);
    } catch (err) {
      console.error("Erreur lors du paiement :", err);
      setError("Une erreur est survenue lors du paiement.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckStatus = async () => {
    if (!orderId) {
      setError("Aucune transaction en cours !");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await checkPaymentStatus(orderId);
      setStatus(response.status); // success, pending, failed, etc.
    } catch (err) {
      console.error("Erreur lors de la vérification du statut :", err);
      setError("Impossible de vérifier le statut du paiement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Paiement Orange Money</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-700">Montant (XOF):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Montant"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Numéro de téléphone :</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+2250123456789"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Traitement..." : "Payer"}
      </button>

      {paymentUrl && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md text-center">
          <p>Payez en cliquant sur le lien ci-dessous :</p>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline"
          >
            Effectuer le paiement
          </a>
        </div>
      )}

      {orderId && (
        <div className="mt-6">
          <button
            onClick={handleCheckStatus}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            Vérifier le statut du paiement
          </button>
          {status && (
            <p className="mt-3 text-center font-bold text-gray-700">
              Statut : <span className="text-orange-500">{status}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;
