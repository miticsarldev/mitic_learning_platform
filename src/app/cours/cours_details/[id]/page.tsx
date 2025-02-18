"use client";
import Navbar from "@/components/navbar";
import Header from "../header";
import SecondaryNavBar from "../secondaryNavBar";
import Stats from "../stat";
import Details from "../details";
import Content from "../content";
import Instructor from "../instructor";
import StudentFeedback from "../studentFeedBack";
import FAQs from "../faq";
import { useEffect, useState, useCallback } from "react";
import { fetchCourseDetails } from "@/app/services/courseService";
import { getEnrollementsCountByCourseId } from "@/app/services/enrollementService";
import FooterSection from "@/components/ui/footer/FooterSection";

interface CoursDetailsPageProps {
  params: {
    id: string;
  };
}

interface Lesson {
  _id: string; // ✅ Correction ici
  title: string;
  duration: string;
}

interface InstructorInfo {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

interface Course {
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

export default function CoursDetailsPage({ params }: CoursDetailsPageProps) {
  const { id } = params;
  const [courseDetails, setCourseDetails] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [enrollementsCount, setEnrollementsCount] = useState<number>(0);

  const fetchEnrollementsCount = useCallback(async () => {
    try {
      const count = await getEnrollementsCountByCourseId(id);
      setEnrollementsCount(count);
    } catch {
      setError("Erreur lors du chargement des inscriptions.");
    }
  }, [id]);

  const getDetails = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCourseDetails(id);
      setCourseDetails(data);
    } catch (error) {
      setError("Erreur lors du chargement des détails du cours.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDetails();
    fetchEnrollementsCount();
  }, [getDetails, fetchEnrollementsCount]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!courseDetails) return <p>Aucun détail de cours trouvé.</p>;

  const statsData = [
    { value: courseDetails.course.duration || "N/A", label: "Heures de cours" },
    { value: courseDetails.lessons.length, label: "Leçons" },
    { value: enrollementsCount, label: "Étudiants inscrits" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Header course={courseDetails} />
      <Stats data={statsData} />
      <SecondaryNavBar />
      <Details />
      <Content lessons={courseDetails.lessons} />
      <Instructor instructor={courseDetails.course.created_by} />
      <StudentFeedback />
      <FAQs />
      <FooterSection />
    </div>
  );
}
