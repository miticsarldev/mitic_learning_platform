import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

type Lesson = {
  id: string;
  title: string;
};

type SidebarProps = {
  lessons: Lesson[];
  currentLessonIndex: number;
};

const Sidebar: React.FC<SidebarProps> = ({ lessons, currentLessonIndex }) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const lessonListRef = useRef<HTMLUListElement | null>(null);

  // Met à jour la leçon en cours si l'index change
  useEffect(() => {
    const lesson = lessons[currentLessonIndex];
    setCurrentLesson(lesson || null); // Réinitialise si l'index est invalide
  }, [currentLessonIndex, lessons]);

  // Fonction de défilement avec un intervalle spécifique
  const handleScroll = (direction: "up" | "down") => {
    const container = lessonListRef.current;
    if (container) {
      const scrollAmount = direction === "up" ? -100 : 100;
      container.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="shadow-md p-4 rounded-lg relative h-max flex flex-col ">
      {/* En-tête avec le titre et les flèches */}
      <div className="flex items-center justify-between mb-4  p-4 bg-[#1C1E53]">
        <button
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={() => handleScroll("up")}
        >
          <FaArrowLeft />
        </button>
        <h3 className="text-lg font-semibold text-white text-center flex-grow">
          {currentLesson ? currentLesson.title : "Nom Leçon en cours"}
        </h3>
        <button
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={() => handleScroll("down")}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Liste scrollable */}
      <ul
        ref={lessonListRef}
        id="lessonList"
        className="space-y-2 overflow-y-auto no-scrollbar flex-grow"
      >
        {lessons.map((lesson, index) => (
          <li
            className={`flex items-center ${
              index === currentLessonIndex ? "font-bold text-primary" : ""
            }`}
            key={lesson.id}
          >
            <span className="bg-[#1C1E53] w-6 h-6 rounded-full flex items-center justify-center text-white mr-2">
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
