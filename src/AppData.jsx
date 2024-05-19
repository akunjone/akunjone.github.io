import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./appdata.css";

function AppData({ language, onLanguageChange }) {
  const images = [
    "https://lh3.googleusercontent.com/d/1TioY4oNEMmlp6kgfhnJvmhOzdmLFxExF",
    "https://lh3.googleusercontent.com/d/1ko4B2r-CRtrl55UkH_1sZhOvB3lcfaGx",
    "https://lh3.googleusercontent.com/d/1UwE60bVqkT_rc1iAJFd71zKVjemeDeTp",
    "https://lh3.googleusercontent.com/d/1arBVk0E-MI3TMjCW1eWnlxqaV6B3u6T4",
    "https://lh3.googleusercontent.com/d/17jetVH_9fx8L9y8IJO64sY9TrO1Okr3h",
  ];

  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFunFactVisible, setIsFunFactVisible] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const funFactRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [images.length, isPaused]);

  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  };

  const handleNextImage = () => {
    setBackgroundImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handlePreviousImage = () => {
    setBackgroundImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  useEffect(() => {
    const funFactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFunFactVisible(true);
            funFactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (funFactRef.current) {
      funFactObserver.observe(funFactRef.current);
    }

    const navigationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNavigationVisible(true);
            navigationObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (navigationRef.current) {
      navigationObserver.observe(navigationRef.current);
    }

    return () => {
      if (funFactRef.current) {
        funFactObserver.unobserve(funFactRef.current);
      }
      if (navigationRef.current) {
        navigationObserver.unobserve(navigationRef.current);
      }
    };
  }, []);

  return (
    <div className="AppData container-fluid" style={{ width: "90%" }}>
      <div
        className="jelajah rounded-2 mt-5 p-5 d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: `url(${images[backgroundImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          transition: "300ms",
        }}
      >
        <button className="arrow left" onClick={handlePreviousImage}>
        </button>
        <div className="text-container">
          <h1 style={{ marginBottom: "25px" }}>
            <b>
              {language === "id"
                ? "Jelajahi Kekayaan Jawa Tengah"
                : "Explore the Richness of Central Java"}
            </b>
          </h1>
          <h5>
            {language === "id"
              ? "Dengan pemandangan yang memukau, kekayaan sejarah yang luar biasa, dan keanekaragaman budaya yang kaya, Jawa Tengah menawarkan pengalaman indah tak terlupakan bagi para turis yang mencari petualangan sejati. Nikmatilah dan telusurilah bersama kami."
              : "With stunning views, extraordinary historical wealth, and rich cultural diversity, Central Java offers unforgettable beautiful experiences for tourists looking for a true adventure. Enjoy and explore with us."}
          </h5>
          <div className="bullets">
            {images.map((image, index) => (
              <button
                key={index}
                className={`bullet ${
                  index === backgroundImageIndex ? "active" : ""
                }`}
                onClick={() => {
                  setBackgroundImageIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 2000);
                }}
              />
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={handleNextImage}>
        </button>
      </div>
      <div
        ref={funFactRef}
        className={`fun-fact mt-3 rounded-5 ${isFunFactVisible ? "visible" : "hidden"}`}
        style={{
          backgroundColor: "white",
          padding: "35px",
          opacity: isFunFactVisible ? 1 : 0,
          transform: `translateY(${isFunFactVisible ? 0 : 20}px)`,
          transition: "opacity 0.5s ease-out, transform 0.6s ease-out",
        }}
      >
        <h5 className="mt-3">
          <b>{language === "id" ? "Apakah kamu tahu?" : "Did you know?"}</b>
        </h5>
        <p>
          {language === "id"
            ? "Jawa Tengah saat ini telah menjadi destinasi wisata yang dikunjungi turis asing sehingga dapat menambah devisa negara dan membantu memasarkan budaya Indonesia. Diperkirakan tahun 2024, akan ada:"
            : "Central Java has now become a tourist destination visited by foreign tourists, thus increasing the country's foreign exchange and helping to market Indonesian culture. It is estimated that in 2024, there will be:"}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>{language === "id" ? "14 Juta" : "14 million"}</b>
            </h5>
            {language === "id" ? "Total Pengunjung" : "Total Visitor"}
          </div>
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>90%</b>
            </h5>
            {language === "id"
              ? "Capaian Devisa Negara dari Target"
              : "Foreign Exchange Achievement from Target"}
          </div>
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>1024+</b>
            </h5>
            {language === "id" ? "Daya Tarik Wisata" : "Tourist Attraction"}
          </div>
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>{language === "id" ? "21 Juta" : "21 million"}</b>
            </h5>
            {language === "id"
              ? "Pengunjung + Mudik"
              : "Visitors + Homecoming"}
          </div>
        </div>
      </div>
      <div
        ref={navigationRef}
        className={`buttons-container rounded-5 ${
          isNavigationVisible ? "visible" : "hidden"
        }`}
        style={{
          backgroundColor: "white",
          padding: "35px",
          marginTop: "20px",
          opacity: isNavigationVisible ? 1 : 0,
          transform: `translateY(${isNavigationVisible ? 0 : 20}px)`,
          transition: "opacity 0.5s ease-out, transform 0.6s ease-out",
        }}
      >
        <h2>{language === "id" ? "Navigasi" : "Navigation"}</h2>
        <div className="button-row">
          <button
            className="nav-button"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/d/15h0mo4mr9cC-5Oeb4VjlGXdMYVr6VUXu)`,
            }}
            onClick={() => handleRoute("/history")}
          >
            <span className="nav-button-text">
              {language === "id" ? "Kembali ke Masa Lampau" : "Back to the Past"}
            </span>
          </button>
          <button
            className="nav-button"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/d/1W-72bxFJhiD2Kwxsh9jpZBO076nSAgMG)`,
            }}
            onClick={() => handleRoute("/destinations")}
          >
            <span className="nav-button-text">
              {language === "id"
                ? "Jelajahi Jawa Tengah"
                : "Explore Central Java"}
            </span>
          </button>
          <button
            className="nav-button"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/d/1ko4B2r-CRtrl55UkH_1sZhOvB3lcfaGx)`,
            }}
            onClick={() => handleRoute("/folklores")}
          >
            <span className="nav-button-text">
              {language === "id" ? "Kisah-Kisah Rakyat" : "Folklore"}
            </span>
          </button>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default AppData;
