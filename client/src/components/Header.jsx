import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroHeader, setIsHeroHeader] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // 🔥 Scroll detection ONLY on home page
  useEffect(() => {
    if (!isHome) {
      setIsHeroHeader(false);
      return;
    }

    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) {
        setIsHeroHeader(false);
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight - 100;
      setIsHeroHeader(window.scrollY < heroBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isHeroHeader
            ? "bg-transparent"
            : "bg-[#fdfcff]/95 backdrop-blur-2xl border-b border-[rgba(124,58,237,0.12)] shadow-[0_4px_14px_rgba(124,58,237,0.10)]"
        }
      `}
    >
      <div className="max-w-[1400px] mx-auto flex items-center px-6 py-[14px]">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aparaitech Logo" className="h-8 w-auto" />
          <span
            className={`font-semibold text-lg ${
              isHeroHeader ? "text-white" : "text-[#2d1b69]"
            }`}
          >
            Aparaitech
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className={`hidden md:flex items-center gap-8 ml-16 font-medium ${
            isHeroHeader ? "text-white" : "text-[#2d1b69]"
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

        {/* DESKTOP RIGHT MENU */}
        <div
          className={`hidden md:flex items-center gap-8 ml-auto font-medium ${
            isHeroHeader ? "text-white" : "text-[#2d1b69]"
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
              isHeroHeader
                ? "border border-white/40 text-white hover:bg-white/10"
                : "bg-[#a78bfa]/90 text-white hover:bg-[#8b5cf6]"
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
            <span className={`block w-6 h-[2px] ${isHeroHeader ? "bg-white" : "bg-[#2d1b69]"}`} />
            <span className={`block w-6 h-[2px] ${isHeroHeader ? "bg-white" : "bg-[#2d1b69]"}`} />
            <span className={`block w-6 h-[2px] ${isHeroHeader ? "bg-white" : "bg-[#2d1b69]"}`} />
          </div>
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 py-6 space-y-4 text-white">
          <Link to="/gen-ai" onClick={() => setMenuOpen(false)} className="block">
            Generative AI
          </Link>
          <Link to="/cloud" onClick={() => setMenuOpen(false)} className="block">
            Cloud
          </Link>
          <Link to="/solutions" onClick={() => setMenuOpen(false)} className="block">
            Solutions
          </Link>
          <a
            href="https://lms-full-stack-mcq7.vercel.app/"
            className="block"
          >
            Explore Programs
          </a>
          <Link to="/careers" onClick={() => setMenuOpen(false)} className="block">
            Careers
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
            About
          </Link>
          <button
            onClick={scrollToContact}
            className="w-full mt-4 py-2 rounded-lg bg-[#8b5cf6] text-white"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
