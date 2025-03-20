import axios from "axios";

const BASE_URL = "https://api.orange.com";
const API_KEY = "WPORqoApYNJgujeHfpUm9M0ECesGEb3Z"; 
const CLIENT_SECRET = "LnnDs2QmxeNB2z1C5UfVv2DnqG2EytprMun09F4srA78"; 

// Fonction pour obtenir le token d'authentification
export const getAccessToken = async () => {
    try {
        const response = await axios.post(
            `${BASE_URL}/oauth/v3/token`,
            new URLSearchParams({ grant_type: "client_credentials" }),
            {
                headers: {
                    Authorization: `Basic ${btoa(`${API_KEY}:${CLIENT_SECRET}`)}`, // Correction ici
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response.data.access_token;
    } catch (err) {
        console.error("Erreur lors de la récupération du token :");
        throw new Error("Impossible de récupérer le token d'authentification.");}
};

// Fonction pour initier un paiement
export const initiatePayment = async (amount: number, phoneNumber: string) => {
    try {
        const token = await getAccessToken();
        const response = await axios.post(
            `${BASE_URL}/orange-money-webpay/initiate-payment`,
            {
                amount,
                currency: "OMUV", 
                order_id: `ORDER_${Date.now()}`,
                return_url: "https://tonapp.com/paiement-reussi",
                cancel_url: "https://tonapp.com/paiement-annule",
                notif_url: "https://tonapp.com/webhook-orange-money",
                lang: "fr",
                payer_phone_number: phoneNumber, 
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'initiation du paiement :");
        throw new Error("Impossible d'initier le paiement.");
    }
};

// Fonction pour vérifier le statut d'un paiement
export const checkPaymentStatus = async (orderId: string) => {
    try {
        const token = await getAccessToken();
        const response = await axios.get(
            `${BASE_URL}/orange-money-webpay/check-payment/${orderId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la vérification du paiement :");
        throw new Error("Impossible de vérifier le statut du paiement.");
    }
};
