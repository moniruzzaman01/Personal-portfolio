import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import bg from "../src/assets/bg.jpg";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center 0%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
