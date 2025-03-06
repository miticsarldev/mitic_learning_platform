
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
import {  fetchCourseDetails } from "@/app/services/courseService";
import { getEnrollementsCountByCourseId } from "@/app/services/enrollementService";
import FooterSection from "@/components/ui/footer/FooterSection";
import {  CourseDetailsResponse, Lesson } from "@/app/types";


interface CoursDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CoursDetailsPage({ params }: CoursDetailsPageProps) {
  const { id } = params;
  const [courseDetails, setCourseDetails] = useState<CourseDetailsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [enrollementsCount, setEnrollementsCount] = useState<number | null>(null);
  const [formatedLesson, setFormatedLesson] = useState<{ title: string; description: string; sections: string[] }[]>([]);



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
      console.log('le cours' + data);
    } catch{
      setError('Erreur lors du chargement des détails du cours');

    } finally {
      setLoading(false);
    }
  }, [id]);


  const formatLessons = (data: CourseDetailsResponse) => {
    return data.lessons.map((lesson: Lesson) => ({
      title: lesson.title,
      description: lesson.description,
      sections: lesson.sections.map((section) => section.title),
    }));
  };
  


  useEffect(() => {
    getDetails();
    fetchEnrollementsCount();
  }, [getDetails, fetchEnrollementsCount]);


  useEffect(() => {
    if (courseDetails && courseDetails.lessons) {
      setFormatedLesson(formatLessons(courseDetails));
    }
  }, [courseDetails]);
  

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!courseDetails) return <p>Aucun détail de cours trouvé.</p>;

  const statsData = [
    { id: 1, value: `${courseDetails.course.duration || "N/A"} `, label: "Heures de cours" },
    { id: 2, value: `${courseDetails.lessons.length || 0}`, label: "Leçons" },
    { id: 3, value: `${enrollementsCount !== null ? enrollementsCount : 0}`, label: "Étudiants inscrits" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Header course={courseDetails} />
      <Stats data={statsData} />
      <SecondaryNavBar />
      <Details lessons={formatedLesson} />
      <Content lessons={courseDetails.lessons} />
      <Instructor instructor={courseDetails.course.created_by} />
      <StudentFeedback />
      <FAQs />
      <FooterSection />
    </div>
  );
}