"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const operators = [
    { name: "Orange Money", icon: "https://yop.l-frii.com/wp-content/uploads/2023/03/Orange-Money-recrute-pour-ce-poste-03-Mars-2023.png", color: "bg-orange-500" },
];

const PaymentPage = () => {
    const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        phoneNumber: "",
        amount: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Paiement de ${formData.amount} via ${selectedOperator}`);
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Paiement Mobile Money</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm mb-1">Numéro de téléphone</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Entrez votre numéro"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm mb-1">Montant</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Entrez le montant"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm mb-2">Sélectionnez un opérateur</label>
                    <div className="flex gap-4">
                        {operators.map((operator) => (
                            <motion.div
                                key={operator.name}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer w-20 h-20 shadow-md ${selectedOperator === operator.name
                                    ? "ring-2 [#1C1E53]"
                                    : ""
                                    } white`}
                                onClick={() => setSelectedOperator(operator.name)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={operator.icon}
                                    alt={operator.name}
                                    className="w-18 h-18 object-cover rounded-lg"
                                    fill
                                />
                                
                            </motion.div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#1C1E53] text-white py-2 rounded-lg font-semibold shadow-md hover:[#1C1E53] focus:ring-2 focus:[#1C1E53] focus:outline-none"
                    // disabled={!selectedOperator || !formData.phoneNumber || !formData.amount}
                >
                    Valider le paiement
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
