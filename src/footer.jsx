import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import logo from "./jateng.png";
import "./styles.css";

function Email(emailUser){
    console.log("Email diterima: ", emailUser);
}

function Footer(){
    const [emailUser, setEmailUser] = React.useState("");
    const handleEmailChange = (event) =>{
        setEmailUser(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Email(emailUser);
        setEmailUser("");
    }

    return(
        <div className="footer mt-5 p-4">
            <Row>
                <Col xs={6} md={6} align="left">
                    <h5><b>Ada pertanyaan?</b></h5>
                    <p>Masukkan Email dan kami akan siap mengirim pesan!</p>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group d-flex">
                            <input onChange={handleEmailChange} value={emailUser} type="email" className="form-control me-2" id="exampleFormControlInput1" placeholder="Masukkan email Anda"/>
                            <Button variant="secondary" type="submit" className="mt-3">Submit</Button>
                        </div>
                    </Form>
                </Col>
                <Col xs={6} md={6} align="right">
                    <div className="logo"><img src={logo} width="150px" alt="Central Java"/></div> 
                    <h4>Kelompok 5</h4>
                    <div>&copy;2024 - Developed for Final Project Needs</div>
                </Col>
            </Row>
        </div>
    );
}
export default Footer;