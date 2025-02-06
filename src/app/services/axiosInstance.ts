import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4444/api', // Remplacez par l'URL de votre API
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur pour ajouter le token d'accès dans les requêtes
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
