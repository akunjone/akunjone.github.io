import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./appdata.css";

function AppData() {
  const images = [
    "https://lh3.googleusercontent.com/d/1arBVk0E-MI3TMjCW1eWnlxqaV6B3u6T4",
    "https://lh3.googleusercontent.com/d/1TioY4oNEMmlp6kgfhnJvmhOzdmLFxExF",
    "https://lh3.googleusercontent.com/d/1ko4B2r-CRtrl55UkH_1sZhOvB3lcfaGx",
  ];

  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  });

  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  };

  const handleNextImage = () => {
    setBackgroundImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setBackgroundImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 1);
  };

  return (
    <div className="AppData container-fluid" style={{ width: "90%" }}>
      <div
        className="jelajah rounded-5 mt-5 p-5 d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: `url(${images[backgroundImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          transition: "300ms",
        }}
      >
        <button
          className="arrow-button left-arrow position-absolute"
          style={{
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
          }}
          onClick={handlePreviousImage}
        >
          &lt;
        </button>
        <button
          className="arrow-button right-arrow position-absolute"
          style={{
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
          }}
          onClick={handleNextImage}
        >
          &gt;
        </button>
        <div>
          <h1
            className="heading-animation"
            style={{
              marginBottom: "25px",
              animation: "slideInOut 4s linear infinite",
            }}
          >
            <b>Jelajahi Kekayaan Jawa Tengah</b>
          </h1>
          <h5>
            Dengan pemandangan yang memukau, kekayaan sejarah yang luar biasa,
            dan keanekaragaman budaya yang kaya, Jawa Tengah menawarkan
            pengalaman indah tak terlupakan bagi para turis yang mencari
            petualangan sejati. Nikmati dan telusurilah bersama kami.
          </h5>
        </div>
      </div>
      <div className="fun-fact mt-3 rounded-5">
        <h5 className="mt-3">
          <b>Apakah kamu tahu?</b>
        </h5>
        <p>
          Jawa Tengah saat ini telah menjadi destinasi wisata yang dikunjungi
          turis asing sehingga dapat menambah devisa negara dan membantu
          memasarkan budaya Indonesia. Diperkirakan tahun 2024, akan ada:
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
              <b>14 Juta</b>
            </h5>
            Total Pengunjung{" "}
          </div>
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>90%</b>
            </h5>
            Capaian Devisa Negara dari Target
          </div>
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>1024+</b>
            </h5>
            Daya Tarik Wisata
          </div>
          <div className="ff rounded-2 m-1 p-3" style={{ flexBasis: "45%" }}>
            <h5>
              <b>21 Juta+</b>
            </h5>
            Pengunjung + Mudik
          </div>
        </div>
      </div>
      <div
        className="buttons-container rounded-5"
        style={{ backgroundColor: "white", padding: "35px", marginTop: "20px" }}
      >
        <h2>Navigasi</h2>
        <div className="button-row">
          <button
            className="nav-button"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/d/15h0mo4mr9cC-5Oeb4VjlGXdMYVr6VUXu)`,
            }}
            onClick={() => handleRoute("/history")}
          >
            <span className="nav-button-text">Kembali ke Masa Lampau</span>
          </button>
          <button
            className="nav-button"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/d/1W-72bxFJhiD2Kwxsh9jpZBO076nSAgMG)`,
            }}
            onClick={() => handleRoute("/destinations")}
          >
            <span className="nav-button-text">Jelajahi Jawa Tengah</span>
          </button>
          <button
            className="nav-button"
            style={{
              backgroundImage: `url(https://lh3.googleusercontent.com/d/1ko4B2r-CRtrl55UkH_1sZhOvB3lcfaGx)`,
            }}
            onClick={() => handleRoute("/folklores")}
          >
            <span className="nav-button-text">Kisah-Kisah Rakyat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppData;
