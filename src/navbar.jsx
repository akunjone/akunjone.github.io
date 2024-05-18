import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./jateng.png";
import { FaHome, FaCameraRetro, FaBookOpen, FaBookReader, FaPeopleArrows } from "react-icons/fa";
import "./styles.css";

function MenuNavbar({ onLanguageChange }) {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

  const translateText = async (text, from, to) => {
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '019f54214fmsh4b971311a4828a7p1a0b8bjsnb135204c5fe2',
        'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
      },
      body: new URLSearchParams({
        from: from,
        to: to,
        text: text
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.translated_text;
    } catch (error) {
      console.error(error);
    }
  };

  const handleLanguageChange = async (selectedLanguage) => {
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);

    const textToTranslate = "Welcome to Central Java!";
    const translatedText = await translateText(textToTranslate, language, selectedLanguage);
    console.log("Translated Text:", translatedText);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleRoute = (path) => {
    const paths = {
      en: {
        "/": "/",
        "/destinations": "/destinations",
        "/history": "/history",
        "/folklores": "/folklores",
        "/aboutus": "/aboutus"
      },
      id: {
        "/": "/",
        "/destinations": "/destinasi",
        "/history": "/sejarah",
        "/folklores": "/cerita-rakyat",
        "/aboutus": "/tentang-kami"
      }
    };
    navigate(paths[language][path]);
  };

  return (
    <Navbar
      style={{ backgroundColor: "white" }}
      expand="lg"
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          <img
            src={logo}
            width="100px"
            className="d-inline-block align-top"
            alt="Central Java"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item style={{ marginRight: "3px", cursor: "pointer" }} onClick={() => handleLanguageChange("en")}>
              <img src="https://lh3.googleusercontent.com/d/1x3NKU4rdQguAVmxoFhmGOu9_6VD2ldtM" alt="English" width="30" />
          </Nav.Item>
          <Nav.Item style={{ marginRight: "3px", cursor: "pointer" }} onClick={() => handleLanguageChange("id")}>
              <img src="https://lh3.googleusercontent.com/d/1X6N-8IrpcjRpJ9wF6FIZlumNkWJJpjQc" alt="Indonesia" width="30" />
          </Nav.Item>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => handleRoute("/")} style={{ color: "black" }}>
              <FaHome /> {language === "id" ? "Beranda" : "Home"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/destinations")} style={{ color: "black" }}>
              <FaCameraRetro /> {language === "id" ? "Destinasi" : "Destinations"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/history")} style={{ color: "black" }}>
              <FaBookOpen /> {language === "id" ? "Sejarah" : "History"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/folklores")} style={{ color: "black" }}>
              <FaBookReader /> {language === "id" ? "Cerita Rakyat" : "Folklores"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/aboutus")} style={{ color: "black" }}>
              <FaPeopleArrows /> {language === "id" ? "Tentang Kami" : "About Us"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
