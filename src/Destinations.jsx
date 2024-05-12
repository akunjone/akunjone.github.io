import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Maps from "./Maps";

function Dest() {
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const handleChange = (event) =>{
    setSearch(event.target.value);
  }

  const handleSearch = (event)=>{
    event.preventDefault();
    if(search.trim()!==''){
      finalDestination(search);
      setSearch("");
    }
  };

  function finalDestination(search){
    const key = `https://geocode.maps.co/search?q=${search}&api_key=663f00988f6e1038250481biza12dce`
    fetch(key)
      .then((response)=>response.json())
      .then((data)=>{
        setLat(data[0].lat);
        setLong(data[0].lon);
      });
  }

  return (
    <div className="mt-3">
      <div className="dest-background" style={{ padding: "30px" }}>
        <div>
          <h2><b>Top Wisata Destinasi Jawa Tengah</b></h2>
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
      <h3>Ingin Cari dari Nama?</h3>
      <Form onSubmit={handleSearch} id="searchDest">
        <Form.Control onChange={handleChange} value={search} type="text" className="search container-fluid mb-3" placeholder="Cari disini" />
        <Button variant="light" type="submit">
          Search
        </Button>
      </Form>
      {lat !== null && long !== null && (
        <Maps lat={lat} lon={long}/>
      )}
    </div>
  );
}
export default Dest;
