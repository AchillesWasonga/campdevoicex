import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;