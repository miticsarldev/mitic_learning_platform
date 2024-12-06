import * as React from "react";

interface JoinButtonProps {
  onClick: () => void;
  color?: string;  // Paramètre optionnel pour la couleur
}

export function JoinButton({ onClick, color = "bg-pink-500" }: JoinButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`self-center px-12 py-3 mt-5 max-w-full text-xl font-bold text-white whitespace-nowrap rounded-[80px] w-[180px] ${color}`}
      aria-label="Rejoindre le cours"
    >
      Rejoindre
    </button>
  );
}
