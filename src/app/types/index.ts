export type Mode = "add" | "modify" | "delete";
export type Role = "administrateur" | "enseignant" | "etudiant" | "parent";

export type User = {
    _id?: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    role: Role;
    dateOfBirth?: string;
    phone: string;
    address?: string;
    studyLevel?: string;
    status: boolean; 
    createdAt?: string;
    updatedAt?: string;
};

export interface ICourse {
    _id: string;
    title: string;
    description?: string;
    path_image?: string;
    path_video?: string;
    price: number;
    isCertified?: boolean;
    duration: string;
    status?: boolean;
    created_by: {
        firstname: string;
        lastname: string;
    };
    studyLevel_id?: {
        name: string;
    };
    job_id?: {
        name: string;
    };
    category_id?: {
        _id: string;
        name: string;
    };
    createdAt: string;
}

export type Section = {
    _id: string;
    title: string;
    description: string;
    path_image: string | null;
    path_video: string | null;
    order: string;
};

export type Lesson = {
    _id: string;
    title: string;
    description: string;
    duration: string;
    order: string;
    course_id: string;
    sections: Section[];
};

export type LessonDisplayProps = {
    lessons: Lesson[] |  [];
    lessonId: string;
};

// interface Lesson {
//     _id: string; // ✅ Correction ici
//     title: string;
//     duration: string;
//   }
  
  export type  InstructorInfo = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
  }

 export type  Course = {
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  price : number;
  path_image: string;
  course: {
    duration: string;
    created_by: InstructorInfo;
  };
  lessons: Lesson[];
}