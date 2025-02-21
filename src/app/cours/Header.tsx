import React from "react";

interface HeaderProps {
  courseName: string;
  duration: string;
  level: string;
  instructor: string;
}

const Header: React.FC<HeaderProps> = ({ courseName, duration, level, instructor }) => (
  <header className="bg-[#1C1E53] text-white py-8 px-4" role="banner">
    <div className="max-w-7xl mx-auto">
      <nav className="text-sm text-gray-300 mb-4" aria-label="breadcrumb">
        Accueil &gt; Cours &gt; {courseName}
      </nav>
      <h1 className="text-3xl font-bold">{courseName}</h1>
      <div className="flex items-center space-x-4 mt-2">
        {duration && <span>⏱️ {duration}</span>}
        {level && <span>📈 {level}</span>}
        {instructor && <span>👨‍🏫 {instructor}</span>}
      </div>
    </div>
  </header>
);

export default Header;