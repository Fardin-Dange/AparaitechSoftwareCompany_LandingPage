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
import Cloud from "./components/cloud";
import Solutions from "./components/Solutions";
import Careers from "./components/Careers";
import Generative_AI from "./components/Generative_AI";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Routes>
        {/* HOME */}
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

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/gen-ai" element={<Generative_AI />} />
      </Routes>

      {/* Footer stays EXACTLY as it is */}
      <Footer />
    </div>
  );
}

export default App;
