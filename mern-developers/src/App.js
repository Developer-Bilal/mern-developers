import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Signin from "./components/Signin";
import Contact from "./components/Contact";
import About from "./components/About";
import Admin from "./components/Admin";
import NotFound from "./components/NotFound";

import axios from "axios";
import { useEffect, useState } from "react";

// "proxy": "http://localhost:5000/api/v1",

export default function App() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const id = JSON.parse(localStorage.getItem("user"))._id;
      const token = JSON.parse(localStorage.getItem("user")).token;
      axios
        .get(`/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setIsUser(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar isUser={isUser} setIsUser={setIsUser} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/register"
          element={<Register isUser={isUser} setIsUser={setIsUser} />}
        />
        <Route
          exact
          path="/signin"
          element={<Signin isUser={isUser} setIsUser={setIsUser} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        {isUser ? <Route exact path="/admin" element={<Admin />} /> : <></>}
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
