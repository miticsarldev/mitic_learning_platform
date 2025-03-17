import axios from "axios";

const BASE_URL = "https://api.orange.com"; //  l'URL de l'API Orange Money
const API_KEY = "WPORqoApYNJgujeHfpUm9M0ECesGEb3Z"; // À récupérer dans ton compte Orange Money
const MERCHANT_KEY = "101018"; // À récupérer

// Fonction pour obtenir le token d'authentification
export const getAccessToken = async () => {
    try {
        const response = await axios.post(
            `${BASE_URL}/oauth/v3/token`,
            new URLSearchParams({
                grant_type: "client_credentials",
            }),
            {
                headers: {
                    Authorization: `Basic ${btoa(`${API_KEY}:${MERCHANT_KEY}`)}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Erreur lors de la récupération du token :", error);
        throw error;
    }
};

// Fonction pour initier un paiement
export const initiatePayment = async (amount: number) => {
    try {
        const token = await getAccessToken();
        const response = await axios.post(
            `${BASE_URL}/orange-money-webpay/initiate-payment`,
            {
                amount,
                currency: "OMUV",
                order_id: `ORDER_${Date.now()}`, // ID de commande unique
                return_url: "https://tonapp.com/paiement-reussi", // URL de retour en cas de succès
                cancel_url: "https://tonapp.com/paiement-annule", // URL en cas d'annulation
                notif_url: "https://tonapp.com/webhook-orange-money", // URL pour les notifications de paiement
                lang: "fr",
                payer_phone_number: "+22382863206", 
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; // Retourne les infos du paiement (URL, ID de transaction, etc.)
    } catch (error) {
        console.error("Erreur lors de l'initiation du paiement :", error);
        throw error;
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
        return response.data; // Retourne le statut du paiement
    } catch (error) {
        console.error("Erreur lors de la vérification du paiement :", error);
        throw error;
    }
};
