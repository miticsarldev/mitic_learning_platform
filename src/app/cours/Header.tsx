import React from "react";

interface HeaderProps {
  courseName: string;
  duration: string;
  level: string;
  instructor: string;
}

const Header: React.FC<HeaderProps> = ({ courseName, duration, level, instructor }) => (
  <header className="bg-[#490AC6] text-white py-8 px-4">
    <div className="max-w-7xl mx-auto">
      <nav className="text-sm text-gray-300 mb-4">
        Accueil &gt; Cours &gt; {courseName}
      </nav>
      <h1 className="text-3xl font-bold">{courseName}</h1>
      <div className="flex items-center space-x-4 mt-2">
        <span>⏱️ {duration}</span>
        <span>📈 {level}</span>
        <span>👨‍🏫 {instructor}</span>
      </div>
    </div>
  </header>
);

export default Header;
