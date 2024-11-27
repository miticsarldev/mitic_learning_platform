'use client'; // Mark this file as a Client Component

import React, { useEffect, useState } from "react";
import { FaHome, FaTrophy } from "react-icons/fa";
import Aside from ".//aside";
const ProgressBar = ({ onprogress }: { onprogress: number | null }) => {
  const totalSteps = 10;

  // Vérifier si `onprogress` est défini avant de calculer `filledSteps`
  const filledSteps = onprogress !== null ? Math.round((onprogress / 100) * totalSteps) : 0;

  return (
    <div className="relative bg-gray-200 h-4 w-full rounded-full">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`absolute top-0 left-${(index / totalSteps) * 100}% h-4 rounded-full ${index < filledSteps ? 'bg-[#25026B]' : 'bg-gray-300'}`}
          style={{
            width: `${100 / totalSteps}%`,
            left: `${(index / totalSteps) * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
// The rest of your component code remains unchanged
const CourseDetails = () => {
  const [visibleComments, setVisibleComments] = useState(2);

  const comments = [
    {
      user: "Courtney Henry",
      time: "20h",
      text: "Ultricies ultricies interdum dolor sodales. Vitae feugiat vitae vitae quis id consectetur.",
      replies: [
        {
          user: "Ronald Richards",
          time: "15h",
          text: "Lorem fringilla pretium magna purus orci faucibus morbi."
        }
      ]
    },
    {
      user: "James Smith",
      time: "18h",
      text: "Aenean convallis tempor diam, at tincidunt leo gravida vitae. Nulla facilisi.",
      replies: [
        {
          user: "Jessica Brown",
          time: "12h",
          text: "Aliquam erat volutpat. Suspendisse potenti. Vivamus et nunc et nulla tempor volutpat."
        }
      ]
    },
    {
      user: "Samantha Lee",
      time: "16h",
      text: "Sed vestibulum orci a quam consequat, ac interdum augue consectetur. Proin et efficitur ligula.",
      replies: []
    },
    {
      user: "Michael Johnson",
      time: "14h",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed id enim.",
      replies: [
        {
          user: "Sarah Davis",
          time: "10h",
          text: "Curabitur ac sem vitae nunc sollicitudin ullamcorper. Aliquam at venenatis leo."
        }
      ]
    },
    {
      user: "Emily Davis",
      time: "12h",
      text: "Mauris at dolor ac nisi sollicitudin tincidunt ac in augue. Donec in odio felis.",
      replies: []
    }
  ];  

  const handleLoadMore = () => {
    setVisibleComments(prevVisible => prevVisible + 2);
  };
  
  const [onprogress, setOnProgress] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnProgress((prev) => (prev !== null && prev < 100 ? prev + 10 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#490AC6] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-300 mb-4">
            Accueil &gt; Cours &gt; Nom du cours &gt; Nom de la leçon
          </nav>
          <h1 className="text-3xl font-bold">Nom du cours</h1>
          <div className="flex items-center space-x-4 mt-2">
            <span>⏱️ 20h</span>
            <span>📈 Intermédiaire</span>
            <span>👨‍🏫 Nom professeur</span>
          </div>
        </div>
      </header>

      {/* Progression */}
      <section className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          {/* Icône maison */}
          <FaHome className="text-[#25026B] text-xl mr-4" />
          {/* Barre de progression */}
          <div className="relative bg-gray-200 h-4 flex-grow rounded-full">
      <ProgressBar onprogress={onprogress} />
            {/* Flèche triangulaire */}
            <div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
              style={{
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "8px solid purple",
              }}
            ></div>
          </div>
          {/* Icône trophée */}
          <FaTrophy className="text-yellow-500 text-xl ml-4" />
        </div>
      </section>
      {/* Main Content */}
<main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-8 px-4">
  {/* Vidéo seule sur une ligne */}
  <div className="md:col-span-4">
    <div className="relative">
      <img
        src="https://via.placeholder.com/800x400"
        alt="Vidéo principale"
        className="rounded-lg shadow-md w-full max-w-3xl mx-auto"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="bg-[#25026B] text-white w-16 h-16 rounded-full flex justify-center items-center">
          ▶
        </button>
      </div>
    </div>
  </div>

  {/* Texte de la leçon et sidebar */}
  <div className="md:col-span-3">

  {/* Titre de la leçon */}
  <h2 className="text-2xl font-bold mt-6">
    Titre de la leçon en cours
  </h2>

  {/* Description */}
  <p className="text-gray-600 mt-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales metus sed ex faucibus.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ea obcaecati. Vel explicabo fuga, nam suscipit, aspernatur id ipsa ad dolores qui, magni consequuntur repudiandae placeat libero ex eum voluptatem!
  </p>

  {/* Alerts */}
  <div className="mt-4 space-y-4">
    <div className="flex items-start bg-purple-100 p-4 rounded-lg">
      <span className="text-purple-500 text-lg">ℹ️</span>
      <p className="ml-4 text-gray-700">
        Aliquam erat volutpat. Pellentesque accumsan nisi vel ultrices cursus.
      </p>
    </div>
    <div className="flex items-start bg-orange-100 p-4 rounded-lg">
      <span className="text-orange-500 text-lg">ℹ️</span>
      <p className="ml-4 text-gray-700">
        Vestibulum vehicula risus nec arcu vehicula, at tincidunt lorem vestibulum.
      </p>
    </div>
  </div>
  {/* Image */}
  <div className="relative mb-6 mt-5">
    <img
      src="https://via.placeholder.com/800x400"
      alt="Illustration"
      className="rounded-lg shadow-md w-full mx-auto"
    />
  </div>
   {/* Titre de la leçon */}
   <h2 className="text-2xl font-bold mt-6">
    Titre 1
  </h2>
  {/* Liste des éléments */}
  <ul className="list-disc pl-6 mt-4 text-gray-700">
    <li>Point clé 1 : Lorem ipsum dolor sit amet</li>
    <li>Point clé 2 : Consectetur adipiscing elit</li>
    <li>Point clé 3 : Proin sodales metus sed ex faucibus</li>
  </ul>
  {/* Titre de la leçon */}
  <h2 className="text-2xl font-bold mt-6">
    Titre 2
  </h2>
  {/* Liste des éléments */}
  <ul className="list-disc pl-6 mt-4 text-gray-700">
    <li>Point clé 1 : Lorem ipsum dolor sit amet</li>
    <li>Point clé 2 : Consectetur adipiscing elit</li>
    <li>Point clé 3 : Proin sodales metus sed ex faucibus</li>
  </ul>
  <div className="flex items-start bg-red-400 p-4 rounded-lg">
      <span className="text-orange-500 text-lg">ℹ️</span>
      <p className="ml-4 text-gray-700">
        Vestibulum vehicula risus nec arcu vehicula, at tincidunt lorem vestibulum.
      </p>
    </div>
</div>


  {/* Sidebar */}
  <Aside />
</main>


      {/* Footer Section */}
      <section className="bg-white shadow-md py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <button className="bg-[#1C1E53] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-800">
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
                  <strong className="text-[#1C1E53]">{comment.user}</strong> • {comment.time}
                </p>
                <p className="text-gray-800">{comment.text}</p>
                <button className="mt-2 text-sm text-[#1C1E53]">répondre</button>

                {/* Réponses imbriquées */}
                {comment.replies.map((reply, index) => (
                  <div key={index} className="mt-4 pl-8 border-l-2 border-gray-200">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <img
                          src="https://via.placeholder.com/36"
                          alt="User avatar"
                          className="w-9 h-9 rounded-full"
                        />
                      </div>
                      <div className="flex-1 bg-white p-3 rounded-lg shadow">
                        <p className="text-sm text-gray-600 mb-1">
                          <strong className="text-[#1C1E53]">{reply.user}</strong> • {reply.time}
                        </p>
                        <p className="text-gray-800">{reply.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
  );
};

export default CourseDetails;
