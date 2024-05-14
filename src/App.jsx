import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AppData from "./AppData";
import Destinations from "./Destinations";
import History from "./History";
import Folk from "./Folklores";
import Aboutus from "./Aboutus";
import Footer from "./Footer";

function App() {
  const [language, setLanguage] = useState("id");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar onLanguageChange={handleLanguageChange} language={language} />
        <Routes>
          <Route
            path="/"
            element={<AppData language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/destinations"
            element={<Destinations language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/Destinasi"
            element={<Destinations language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/history"
            element={<History language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/sejarah"
            element={<History language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/folklores"
            element={<Folk language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/Cerita Rakyat"
            element={<Folk language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/aboutus"
            element={<Aboutus language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/Tentang Kami"
            element={<Aboutus language={language} onLanguageChange={handleLanguageChange} />}
          />
        </Routes>
      </div>
      <footer className="footer">
        <Footer language={language} onLanguageChange={handleLanguageChange} />
      </footer>
    </BrowserRouter>
  );
}

export default App;
