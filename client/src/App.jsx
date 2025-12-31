import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <Partners />
              <ContactSection />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
