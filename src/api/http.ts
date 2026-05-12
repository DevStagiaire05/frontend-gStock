import axios from 'axios';

    const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

    export const http = axios.create({
        baseURL,
        timeout : 10000,
        headers : {
            'Content-Type': 'application/json',
            },
    });

    http.interceptors.response.use(
        (response) => response,
        (error) => {
            const message = error.response?.data?.message || error.message || 'Erreur inconnue';

            return Promise.reject(new Error(Array.isArray(message) ? message.join(', '): message));
        }
    );








