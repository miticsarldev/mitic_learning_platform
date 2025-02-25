"use client"
import React, { useEffect, useState } from "react";
import Aside from "../aside";
import Navbar from "@/components/navbar";
import Header from "../Header";
import ProgressBar from "../ProgressBar";
import { fetchCourseDetails } from "@/app/services/courseService";
import LessonDisplay from "../LessonDisplay";
import FooterSection from "@/components/ui/footer/FooterSection";

interface CoursDetailsPageProps {
  params: {
    id: string; // ID récupéré depuis l'URL
  };
}

const CourseDetails = ({ params }: CoursDetailsPageProps) => {
  const [visibleComments, setVisibleComments] = useState(2);
  const [progress, setProgress] = useState(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0); // L'index de la leçon sélectionnée

  const comments = [
    {
      user: "Courtney Henry",
      time: "20h",
      text: "Ultricies ultricies interdum dolor sodales. Vitae feugiat vitae vitae quis id consectetur.",
      replies: [
        {
          user: "Ronald Richards",
          time: "15h",
          text: "Lorem fringilla pretium magna purus orci faucibus morbi.",
        },
      ],
    },
    // Plus de commentaires ici...
  ];

  const handleLoadMore = () => {
    setVisibleComments((prevVisible) => prevVisible + 2);
  };

  const { id } = params;
  const [courseDetails, setCourseDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  const getDetails = async () => {
    try {
      setLoading(true);
      const data = await fetchCourseDetails(id);
      setCourseDetails(data);
      setSelectedLessonIndex(0); // Par défaut, on commence à la première leçon
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const handleNextLesson = () => {
    if (selectedLessonIndex < courseDetails.lessons.length - 1) {
      setSelectedLessonIndex(selectedLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (selectedLessonIndex > 0) {
      setSelectedLessonIndex(selectedLessonIndex - 1);
    }
  };

  //gerer la progression 
  useEffect(() => {
    if (courseDetails && courseDetails.lessons.length > 0) {
      const progressPercentage = (selectedLessonIndex / (courseDetails.lessons.length - 1)) * 100;
      setProgress(progressPercentage);
      console.log("Progress Updated:", progressPercentage); // Vérifie si la valeur change
    }
  }, [selectedLessonIndex, courseDetails]);



  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <Header
          courseName={courseDetails.course.title}
          duration={courseDetails.course.duration}
          level={courseDetails.course.studyLevel_id?.name}
          instructor={`${courseDetails.course.created_by.firstname} ${courseDetails.course.created_by.lastname}`}
        />
        {/* Main Content */}
        <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-8 px-4">
          {/* Vidéo seule sur une ligne */}
          <div className="md:col-span-4">
            <ProgressBar progress={progress} /> {/* Ajout de la barre de progression */}
            {
              courseDetails?.path_video && (
                <div className="relative mt-7">
                  <video controls className="rounded-lg shadow-md w-full max-w-3xl mx-auto">
                    <source src={courseDetails?.path_video} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              )
            }

          </div>

          {/* Texte de la leçon et sidebar côte à côte */}
          <div className="md:col-span-3">
            <div className="p-6">
              <LessonDisplay
                lessons={courseDetails.lessons}
                lessonId={courseDetails.lessons[selectedLessonIndex]._id}
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <Aside lessons={courseDetails.lessons} currentLessonIndex={selectedLessonIndex} />
          </div>
        </main>


        {/* Footer Section */}
        <section className="bg-white shadow-md py-6 px-4">
          <div className="max-w-7xl mx-auto text-center">
            {selectedLessonIndex > 0 && (
              <button
                onClick={handlePreviousLesson}
                className="bg-[#1C1E53] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-800 mr-4"
              >
                Retour
              </button>
            )}
            <button
              onClick={handleNextLesson}
              className="bg-[#1C1E53] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-800"
            >
              J&apos;ai terminé ce chapitre, passer au suivant
            </button>
          </div>
        </section>

        {/* Comment Section */}
        <section className="max-w-4xl mx-auto py-8 px-4">
          <h3 className="text-2xl font-semibold mb-6">{comments.length} Commentaires</h3>
          {/* Zone d'ajout de commentaire */}
          <div className="flex items-start mb-8">
            <div className="mr-4">
              {/* Avatar utilisateur */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14c3.31 0 6 2.69 6 6v1H6v-1c0-3.31 2.69-6 6-6zM12 12a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start">
                <textarea
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  placeholder="Ajouter un commentaire..."
                  rows={3}
                ></textarea>
                <button className="ml-4 bg-[#1C1E53] text-white py-2 px-4 rounded-lg self-start">
                  Publier
                </button>
              </div>
            </div>
          </div>
          {/* Liste des commentaires */}
          <div className="space-y-6">
            {comments.slice(0, visibleComments).map((comment, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="User avatar"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong className="text-[#1C1E53]">{comment.user}</strong> •{" "}
                    {comment.time}
                  </p>
                  <p className="text-gray-800">{comment.text}</p>
                  <button className="mt-2 text-sm text-[#1C1E53]">répondre</button>
                </div>
              </div>
            ))}
          </div>
          {/* Bouton Charger plus */}
          {visibleComments < comments.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                className="bg-[#1C1E53] text-white py-2 px-4 rounded-lg"
              >
                Charger plus
              </button>
            </div>
          )}
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default CourseDetails;
