import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaStar, FaUser, FaTag, FaCalendarAlt } from "react-icons/fa"; // Import des icônes
import ConfirmationModal from "@/components/ConfirmationModal";
import axios from "axios";

type CourseProps = {
  course: any; // Cours avec des propriétés flexibles
};

const Header: React.FC<CourseProps> = ({ course }) => {
  // État pour gérer l'affichage de la popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la popup
  const openModal = () => setIsModalOpen(true);

  // Fonction pour fermer la popup
  const closeModal = () => setIsModalOpen(false);

  // Fonction pour valider l'achat (à personnaliser selon vos besoins)
  const confirmPurchase = () => {
    handlePayment(); // Appel de la fonction de paiement
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post("http://localhost:4444/api/orange-money/pay", {
        amount: course.course?.price,
        phone: "22382863206",  // Remplace par le numéro du client
        orderId: `ORDER-${Date.now()}`
      });

      if (response.data && response.data.payment_url) {
        window.location.href = response.data.payment_url; // Redirection vers Orange Money
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
          <h1 className="text-4xl font-bold leading-snug">{course.course?.title || "Titre du Cours"}</h1>
          <p className="text-lg leading-relaxed">{course.course?.description || "Description non disponible"}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-400" />
              <span className="text-lg font-semibold">{course.course?.rating || "N/A"}</span>
              <span className="text-sm">({course.course?.reviewsCount || "0"} Avis)</span>
            </div>
            <span className="text-sm">
              • Publié par <strong>{course.course?.created_by ? `${course.course?.created_by.firstname} ${course.course?.created_by.lastname}` : "Non Défini"}</strong>
            </span>
          </div>
          {/* Bouton Acheter Maintenant */}
          <Button
            variant="default"
            className="bg-[#25026B] hover:bg-[#25026B]/90 text-white px-8 py-3 rounded-lg"
            onClick={openModal} // Ouvrir la popup lorsque le bouton est cliqué
          >
            {`Acheter Maintenant - ${course.course?.price || "0"} FCFA`}
          </Button>
        </div>

        {/* Conteneur Image avec Overlay */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
          <div className="w-2/3 lg:w-3/4">
            <img
              src={course.course?.path_image || "https://capsurvous.com/wp-content/uploads/2022/02/Cours-avec-illustrations-Accueil.jpg"}
              alt="Voir demo"
              className="rounded-lg shadow-lg w-full h-auto"
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
      {isModalOpen && (
        <ConfirmationModal
          course={course.course}
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
