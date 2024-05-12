import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import AppData from "./AppData";
import Destinations from "./Destinations";
import History from "./History";
import Folk from "./Folklores";
import Aboutus from "./Aboutus";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AppData />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/folklores" element={<Folk />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
      <footer className="footer"><Footer/></footer>
    </BrowserRouter>
  );
}

export default App;