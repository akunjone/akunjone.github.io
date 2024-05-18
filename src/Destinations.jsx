import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Maps from "./Maps";

function Dest({ language }) {
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (search.trim() !== "") {
      const translatedSearch = await translateText(search, "id", "en");
      finalDestination(translatedSearch);
      setSearch("");
    }
  };

  const translateText = async (text, from, to) => {
    const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "019f54214fmsh4b971311a4828a7p1a0b8bjsnb135204c5fe2",
        "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
      },
      body: new URLSearchParams({
        from: from,
        to: to,
        text: text,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.translated_text;
    } catch (error) {
      console.error("Tdk bisa translate:", error); //keliatan di console(klo error)
      return text;
    }
  };

  const finalDestination = (search) => {
    const key = `https://geocode.maps.co/search?q=${search}&api_key=663f00988f6e1038250481biza12dce`;
    fetch(key)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setLat(data[0].lat);
          setLong(data[0].lon);
        } else {
          console.error("Data tidak ditemukan.");
        }
      })
      .catch((error) => console.error("Error fetching geocode data, pesan:", error));
  };

  return (
    <div className="mt-3">
      <div className="dest-background" style={{ padding: "30px" }}>
        <div>
          <h2>
            <b>{language === "id" ? "Top Destinasi Wisata Jawa Tengah" : "Top Travel Destinations in Central Java"}</b>
          </h2>
        </div>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/d/u/0/embed?mid=1-e-jL6ahNrDKJwb-qxQfUZ8fWkPIHI0"
          width="70%"
          height="700"
          className="rounded-3"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <h3>{language === "id" ? "Ingin Cari dari Nama?" : "Want to Search by Name?"}</h3>
      <Form onSubmit={handleSearch} id="searchDest">
        <Form.Control
          onChange={handleChange}
          value={search}
          type="text"
          className="search container-fluid mb-3"
          placeholder={language === "id" ? "Cari disini" : "Search here"}
        />
        <Button variant="light" type="submit">
          {language === "id" ? "Cari" : "Search"}
        </Button>
      </Form>
      {lat !== null && long !== null && <Maps lat={lat} lon={long} />}
    </div>
  );
}

export default Dest;
