import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import ConfirmationModal from "@/components/ConfirmationModal";
import axios from "axios";
import Image from "next/image";
import { Course, ICourse } from "@/app/types";

// Définition du type Course


// Type des props avec un cours optionnel
type CourseProps = {
  course?: Course;
};

const Header: React.FC<CourseProps> = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmPurchase = () => {
    handlePayment();
  };

  const handlePayment = async () => {
    if (!course) return;
    try {
      const response = await axios.post("http://localhost:4444/api/orange-money/pay", {
        amount: course.price,
        phone: "22382863206",
        orderId: `ORDER-${Date.now()}`,
      });

      if (response.data && response.data.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        alert("Erreur lors du paiement");
      }
    } catch (error) {
      console.error("Erreur de paiement :", error);
      alert("Échec du paiement");
    }
  };

  return (
    <header className="bg-[#490AC6] text-white p-8 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Conteneur Texte */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-snug">{course?.title || "Titre du Cours"}</h1>
          <p className="text-lg leading-relaxed">{course?.description || "Description non disponible"}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-400" />
              <span className="text-lg font-semibold">{course?.rating || "N/A"}</span>
              <span className="text-sm">({course?.reviewsCount || "0"} Avis)</span>
            </div>
            <span className="text-sm">
              • Publié par <strong>{course?.created_by ? `${course.created_by.firstname} ${course.created_by.lastname}` : "Non Défini"}</strong>
            </span>
          </div>
          {/* Bouton Acheter Maintenant */}
          <Button
            variant="default"
            className="bg-[#25026B] hover:bg-[#25026B]/90 text-white px-8 py-3 rounded-lg"
            onClick={openModal}
          >
            {`Acheter Maintenant - ${course?.price || "0"} FCFA`}
          </Button>
        </div>

        {/* Conteneur Image avec Overlay */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
          <div className="w-2/3 lg:w-3/4">
            <Image
              src={course?.path_image || "https://capsurvous.com/wp-content/uploads/2022/02/Cours-avec-illustrations-Accueil.jpg"}
              alt="Voir demo"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/70 text-[#25026B] font-bold py-3 px-5 rounded-lg shadow-md hover:bg-white">
                Voir demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup de confirmation d'achat */}
      {isModalOpen && course && (
        <ConfirmationModal
          course={course}
          onClose={closeModal}
          onConfirm={confirmPurchase}
        />
      )}

      {/* Espacement supplémentaire en bas */}
      <div className="mt-12"></div>
    </header>
  );
};

export default Header;
