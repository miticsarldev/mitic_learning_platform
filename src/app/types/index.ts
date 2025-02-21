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
    bio : string;
    studyLevel?: string;
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
    lessons: Lesson[];
    lessonId: string;
};
