import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import logo from "./jateng.png";
import "./styles.css";

function Email(emailUser) {
  console.log("Email diterima: ", emailUser);
}

function Footer({ language }) {
  const [emailUser, setEmailUser] = useState("");
  const [showFooter, setShowFooter] = useState(false);
  const [translations, setTranslations] = useState({
    question: "Have a question?",
    enterEmail: "Enter your email and we will be ready to send a message!",
    placeholder: "Enter your email",
    submit: "Submit",
    group: "Group 5",
    developed: "©2024 - Developed for Final Project Needs"
  });

  useEffect(() => {
    if (language === "id") {
      setTranslations({
        question: "Ada pertanyaan?",
        enterEmail: "Masukkan email Anda dan kami akan siap mengirim pesan!",
        placeholder: "Masukkan email Anda",
        submit: "Kirim",
        group: "Kelompok 5",
        developed: "©2024 - Dikembangkan untuk Proyek Akhir"
      });
    } else {
      setTranslations({
        question: "Have a question?",
        enterEmail: "Enter your email and we will be ready to send a message!",
        placeholder: "Enter your email",
        submit: "Submit",
        group: "Group 5",
        developed: "©2024 - Developed for Final Project Needs"
      });
    }
  }, [language]);

  const handleEmailChange = (event) => {
    setEmailUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Email(emailUser);
    setEmailUser("");
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollY > documentHeight - windowHeight - 200) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  return (
    <div className={`footer mt-5 p-4 ${showFooter ? 'footer-show' : ''}`}>
      <Row>
        <Col xs={6} md={6} align="left">
          <h5><b>{translations.question}</b></h5>
          <p>{translations.enterEmail}</p>
          <Form onSubmit={handleSubmit}>
            <div className="form-group d-flex">
              <input
                onChange={handleEmailChange}
                value={emailUser}
                type="email"
                className="form-control me-2"
                id="exampleFormControlInput1"
                placeholder={translations.placeholder}
              />
              <Button variant="secondary" type="submit" className="mt-3">
                {translations.submit}
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={6} md={6} align="right">
          <div className="logo">
            <img src={logo} width="150px" alt="Central Java" />
          </div>
          <h4>{translations.group}</h4>
          <div>{translations.developed}</div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
