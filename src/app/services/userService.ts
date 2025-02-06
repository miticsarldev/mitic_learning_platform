import axios from "axios";

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`http://localhost:4444/api/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        // Assurez-vous de renvoyer une erreur explicite si l'API échoue
        throw error.response?.data || { message: "Erreur inconnue du serveur." };
    }
};

export const getUserById = async (userId: string): Promise<any> => {
    try {
      const response = await fetch(`http://localhost:4444/api/users/id/${userId}`);
  
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error: any) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      throw error;
    }
  };