import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 👉 Smooth scroll to Contact section
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#fdfcff]/55 backdrop-blur-xl
        border-b border-[rgba(124,58,237,0.16)]
        shadow-[0_4px_14px_rgba(124,58,237,0.10)]
      "
    >
      <div
        className="
          max-w-[1400px] mx-auto
          flex items-center
          px-0
          py-[12px]
        "
      >
        {/* LEFT: Logo → HOME */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Aparaitech Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-semibold text-[#2d1b69] text-lg">
            Aparaitech
          </span>
        </Link>

        {/* MAIN MENU */}
        <nav className="hidden md:flex items-center gap-8 ml-16 text-[#2d1b69] font-medium">
          <a href="#gen-ai" className="hover:text-[#7c3aed] transition">
            Generative AI
          </a>
          <a href="#cloud" className="hover:text-[#7c3aed] transition">
            Cloud
          </a>
          <a href="#solutions" className="hover:text-[#7c3aed] transition">
            Solutions
          </a>
        </nav>

        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center gap-8 ml-auto text-[#2d1b69] font-medium">
          <a href="https://aparaitech.org/" className="hover:text-[#7c3aed] transition">
            Explore Programs
          </a>

          {/* ABOUT PAGE */}
          <Link to="/about" className="hover:text-[#7c3aed] transition">
            About
          </Link>

          {/* CONTACT SCROLL */}
          <button
            onClick={scrollToContact}
            className="
              bg-[#a78bfa] text-white
              px-5 py-2 rounded-full
              hover:bg-[#8b5cf6]
              hover:shadow-[0_10px_28px_rgba(124,58,237,0.30)]
              transition
            "
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="
            md:hidden ml-auto
            flex items-center justify-center
            w-10 h-10 rounded-lg
            hover:bg-[#f1ecff] transition
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-[#2d1b69]"></span>
            <span className="block w-6 h-[2px] bg-[#2d1b69]"></span>
            <span className="block w-6 h-[2px] bg-[#2d1b69]"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            md:hidden bg-[#fdfcff]/80 backdrop-blur-lg
            border-t border-[rgba(124,58,237,0.16)]
            px-6 py-6 flex flex-col gap-4
            text-[#2d1b69]
          "
        >
          <a href="#gen-ai" onClick={() => setMenuOpen(false)}>
            Generative AI
          </a>
          <a href="#cloud" onClick={() => setMenuOpen(false)}>
            Cloud
          </a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>
            Solutions
          </a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>
            Insights
          </a>

          {/* ABOUT */}
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          {/* CONTACT (SCROLL) */}
          <button
            onClick={() => {
              setMenuOpen(false);
              scrollToContact();
            }}
            className="bg-[#a78bfa] text-white py-2 rounded-md"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
