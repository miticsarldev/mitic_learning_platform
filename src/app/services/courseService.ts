import axios from "axios";
import { CourseDetails, CourseDetailsResponse } from "../types";

const API_URL = "http://localhost:4444/api/course";

export interface Course {
    _id: string;
    title: string;
    description?: string;
    path_image?: string;
    path_video?: string;
    price?: number;
    isCertified?: boolean;
    duration?: string;
    status?: boolean;
    created_by: string;
    studyLevel_id?: string;
    job_id?: string;
    category_id?: string;
}

// Définition du type pour les détails du cours



export const fetchCourses = async (): Promise<CourseDetails[]> => {
    try {
        const response = await axios.get<CourseDetails[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des cours :", error);
        throw new Error("Impossible de récupérer les cours.");
    }
};

/**
 * Service pour récupérer les détails d'un cours
 * @param courseId - L'ID du cours à récupérer
 * @returns Les détails du cours, y compris ses leçons et sections
 */
export const fetchCourseDetails = async (courseId: string): Promise<CourseDetailsResponse> => {
    try {
        // Construire l'URL de l'API avec le courseId
        const url = `${API_URL}/getCourseAllInfo/${courseId}`;

        // Faire une requête GET vers le backend
        const response = await axios.get<CourseDetailsResponse>(url);

        // Retourner les données de la réponse
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Erreur lors de la récupération des détails du cours :', error.response.data);
            throw new Error(error.response.data.message || 'Erreur lors de la récupération des données');
        }
        throw new Error('Une erreur inconnue est survenue');
    }
};
