import axios from "axios";

const API_URL = "http://localhost:4444/api"; // Remplace par l'URL de ton backend

export const getEnrollementsCountByCourseId = async (courseId: string): Promise<number> => {
  try {
    const response = await axios.get<{ enrollementsCount: number }>(
      `${API_URL}/courses/${courseId}/enrollements/count`
    );
    return response.data.enrollementsCount;
  } catch (error) {
    console.error("Erreur lors de la récupération des inscriptions :", error);
    throw new Error("Impossible de récupérer le nombre d'inscriptions.");
  }
};
