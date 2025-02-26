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

export interface DetailLesson {
    title: string;
    description: string;
    sections: string[];
}


export type LessonDisplayProps = {
    lessons: Lesson[] |  [];
    lessonId: string;
    _id: string;
    title: string;
    description: string;
};


export type Testimonial = {
    name: string;
    email: string;
    description: string;
    avatar: string;
};

