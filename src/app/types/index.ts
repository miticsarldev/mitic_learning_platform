export type Mode = "add" | "modify" | "delete";
export type Role = "student" | "teacher" | "admin"


export type User = {
    _id?: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    role: string;
    dateOfBirth?: string;
    phone: string;
    address?: string;
    bio: string;
    studyLevel?: string;
    createdAt?: string;
    updatedAt?: string;
};


// interface User {
//     id?: string;
//     firstname: string;
//     lastname: string;
//     username: string;
//     email: string;
//     phone: string;
//     address: string;
//     dateOfBirth: string;
//     bio: string;
//     role: string;
//     status?: string;
//     isVerified?: boolean;
//     createdAt?: string;
//     updatedAt?: string;
//     __v?: number;
// }
export interface ICourse {
    _id: string;
    title: string;
    description?: string;
    path_image?: string;
    path_video?: string;
    price: number; //  price > 0 ? cours payant : cours gratuit
    isCertified?: boolean;
    duration: string; //nombre d'heure
    status?: boolean;
    created_by: {
        firstname: string;
        lastname: string;
    };
    studyLevel_id?: {
        _id: string;
        name: string;
    };
    job_id?: {
        _id: string;
        name: string;
    };
    category_id?: {
        _id: string;
        name: string;
    };
    createdAt: string;
}


export interface DetailLesson {
    title: string;
    description: string;
    sections: string[];
}


export type LessonDisplayProps = {
    lessons: Lesson[] | [];
    lessonId: string;
};

export interface Enrollment {
    course_id: { title: string; path_image: string };
    status: string;
    start_date: string;
}

export interface HistoriqueCourse {
    category: string;
    title: string;
    status: string;
    startDate: string;
    image: string;
    progress: number;
}

export type Testimonial = {
    name: string;
    email: string;
    description: string;
    avatar: string;
};
export type Course = {
    title: string;
    description: string;
    rating: number;
    reviewsCount: number;
    created_by?: {
        firstname: string;
        lastname: string;
    };
    price: number;
    path_image: string;
};

export type CourseHeader = {
    course: {
        title: string;
        description: string;
        rating: number;
        reviewsCount: number;
        created_by: {
            firstname: string;
            lastname: string;
        };
        price: number;
        path_image: string;
    };
};


// Définir le type pour l'utilisateur (créateur du cours)
  
  // Définir le type pour le niveau d'étude
  export type StudyLevel = {
    _id: string;
    name: string;
  };
  
  // Définir le type pour la catégorie du cours
  export type Category = {
    _id: string;
    name: string;
  };
  
  // Définir le type pour les sections d'une leçon
  export type Section = {
    _id: string;
    title: string;
    description: string;
    lesson_id: string;
    path_image: string;
    path_video: string;
    type: string;
    order: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  // Définir le type pour une leçon
  export type Lesson = {
    _id: string;
    title: string;
    description: string;
    duration: string;
    order: string;
    course_id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    sections: Section[];
  };
  
  // Définir le type pour un cours
  export type CourseDetails = {
    _id: string;
    title: string;
    description: string;
    path_image: string;
    path_video: string;
    price: number;
    isCertified: boolean;
    duration: string;
    status: boolean;
    created_by: User;
    studyLevel_id: StudyLevel;
    job_id: { _id: string; name: string }; // On pourrait ajouter un type plus détaillé ici si nécessaire
    category_id: Category;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  // Définir le type pour la réponse de l'API
  export type CourseDetailsResponse = {
    course: CourseDetails;
    lessons: Lesson[];
  };
  



