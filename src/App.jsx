import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import AppData from "./AppData";
import Destinations from "./Destinations";
import History from "./History";
import Folk from "./Folklores";
import Aboutus from "./Aboutus";
import Footer from "./footer";
import AutoScrollToTop from "./AutoScrollToTop"; // Pastikan untuk mengimpor AutoScrollToTop

function App() {
  const [language, setLanguage] = useState("id");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <BrowserRouter>
      <AutoScrollToTop> {/* Masukkan AutoScrollToTop di dalam BrowserRouter */}
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
              path="/cerita-rakyat"
              element={<Folk language={language} onLanguageChange={handleLanguageChange} />}
            />
            <Route
              path="/aboutus"
              element={<Aboutus language={language} onLanguageChange={handleLanguageChange} />}
            />
            <Route
              path="/tentang-kami"
              element={<Aboutus language={language} onLanguageChange={handleLanguageChange} />}
            />
          </Routes>
        </div>
        <footer className="footer">
          <Footer language={language} onLanguageChange={handleLanguageChange} />
        </footer>
      </AutoScrollToTop> {/* Tutup AutoScrollToTop di dalam BrowserRouter */}
    </BrowserRouter>
  );
}

export default App;
