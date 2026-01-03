import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroSection = document.getElementById("home");

          if (heroSection) {
            const heroBottom =
              heroSection.offsetTop + heroSection.offsetHeight - 80;

            setIsHero(window.scrollY < heroBottom);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isHero
            ? "bg-transparent"
            : "bg-[#fdfcff]/35 backdrop-blur-2xl border-b border-[rgba(124,58,237,0.10)] shadow-[0_2px_10px_rgba(124,58,237,0.08)]"
        }
      `}
    >
      <div className="max-w-[1400px] mx-auto flex items-center px-6 py-[14px]">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aparaitech Logo" className="h-8 w-auto" />
          <span
            className={`font-semibold text-lg ${
              isHero ? "text-[#d1d5db]" : "text-[#2d1b69]"
            }`}
          >
            Aparaitech
          </span>
        </Link>

        {/* MAIN MENU */}
        <nav
          className={`hidden md:flex items-center gap-8 ml-16 font-medium ${
            isHero ? "text-[#d1d5db]" : "text-[#2d1b69]"
          }`}
        >
          <Link to="/gen-ai" className="hover:text-[#7c3aed] transition">
            Generative AI
          </Link>
          <Link to="/cloud" className="hover:text-[#7c3aed] transition">
            Cloud
          </Link>
          <Link to="/solutions" className="hover:text-[#7c3aed] transition">
            Solutions
          </Link>
        </nav>

        {/* RIGHT MENU */}
        <div
          className={`hidden md:flex items-center gap-8 ml-auto font-medium ${
            isHero ? "text-[#d1d5db]" : "text-[#2d1b69]"
          }`}
        >
          <a
            href="https://lms-full-stack-mcq7.vercel.app/"
            className="hover:text-[#7c3aed] transition"
          >
            Explore Programs
          </a>

          <Link to="/careers" className="hover:text-[#7c3aed] transition">
            Careers
          </Link>

          <Link to="/about" className="hover:text-[#7c3aed] transition">
            About
          </Link>

          <button
            onClick={scrollToContact}
            className={`px-5 py-2 rounded-full transition ${
              isHero
                ? "border border-white/40 text-white hover:bg-white/10"
                : "bg-[#a78bfa]/90 text-white hover:bg-[#8b5cf6] hover:shadow-[0_8px_22px_rgba(124,58,237,0.28)]"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-[2px] ${
                isHero ? "bg-white" : "bg-[#2d1b69]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] ${
                isHero ? "bg-white" : "bg-[#2d1b69]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] ${
                isHero ? "bg-white" : "bg-[#2d1b69]"
              }`}
            />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
