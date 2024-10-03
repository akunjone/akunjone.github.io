import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import AppData from "./AppData";
import Destinations from "./Destinations";
import History from "./History";
import Folk from "./Folklores";
import Aboutus from "./Aboutus";
import Footer from "./footer";
import AutoScrollToTop from "./AutoScrollToTop";

function App() {
  const [language, setLanguage] = useState("id");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <BrowserRouter>
      <AutoScrollToTop>
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
              path="/destinasi"
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
              path="/ceritarakyat"
              element={<Folk language={language} onLanguageChange={handleLanguageChange} />}
            />
            <Route
              path="/aboutus"
              element={<Aboutus language={language} onLanguageChange={handleLanguageChange} />}
            />
            <Route
              path="/tentangkami"
              element={<Aboutus language={language} onLanguageChange={handleLanguageChange} />}
            />
          </Routes>
        </div>
        <footer className="footer">
          <Footer language={language} onLanguageChange={handleLanguageChange} />
        </footer>
      </AutoScrollToTop>
    </BrowserRouter>
  );
}

export default App;
