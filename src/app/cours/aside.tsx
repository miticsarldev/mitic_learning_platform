import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

type Lesson = {
  id: string;
  title: string;
};

type SidebarProps = {
  lessons: Lesson[]; // Remplace `any[]` par `Lesson[]`
  currentLessonIndex: number; // Index de la leçon en cours
};

const Sidebar: React.FC<SidebarProps> = ({ lessons, currentLessonIndex }) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  // Met à jour la leçon en cours si l'index change
  useEffect(() => {
    if (lessons[currentLessonIndex]) {
      setCurrentLesson(lessons[currentLessonIndex]);
      console.log(currentLessonIndex);
    } else {
      setCurrentLesson(null); // Réinitialise si l'index est invalide
    }
  }, [currentLessonIndex, lessons]);

  return (
    <div className="shadow-md p-4 rounded-lg relative h-max flex flex-col">
      {/* En-tête avec le titre et les flèches */}
      <div className="flex items-center justify-between mb-4 bg-[#25026B] p-4">
        <button
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={() => {
            const container = document.getElementById("lessonList");
            if (container) container.scrollBy({ top: -100, behavior: "smooth" });
          }}
        >
          <FaArrowLeft />
        </button>
        <h3 className="text-lg font-semibold text-white text-center flex-grow">
          {currentLesson ? currentLesson.title : "Nom Leçon en cours"}
        </h3>
        <button
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={() => {
            const container = document.getElementById("lessonList");
            if (container) container.scrollBy({ top: 100, behavior: "smooth" });
          }}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Liste scrollable */}
      <ul id="lessonList" className="space-y-2 overflow-y-auto no-scrollbar flex-grow">
        {lessons.map((lesson, index) => (
          <li
            className={`flex items-center ${
              index === currentLessonIndex ? "font-bold text-[#25026B]" : ""
            }`}
            key={lesson.id}
          >
            <span className="bg-[#25026B] w-6 h-6 rounded-full flex items-center justify-center text-white mr-2">
              <FaCheck className="text-xs" />
            </span>
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
