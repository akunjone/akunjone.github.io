import React from "react";
import { useNavigate } from "react-router-dom";

function MenuNavbar({ language, onLanguageChange }) {
  const navigate = useNavigate();

  const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleLanguageChange("id")}>Bahasa Indonesia</li>
        <li onClick={() => handleLanguageChange("en")}>English</li>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
      </ul>
    </nav>
  );
}

export default MenuNavbar;