import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Signin from "./components/Signin";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
