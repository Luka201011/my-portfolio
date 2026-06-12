"use client";

import { useState } from "react";

const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar-container flex flex-wrap justify-between px-6 relative"
      id="Navigation"
    >
      <div className="flex items-center gap-4">
        <a href="/">
          <img
            src="/flagge.png"
            alt="Deutsch"
            className="flag-icon hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="/en">
          <img
            src="/vereinigtes-konigreich.png"
            alt="Englisch"
            className="flag-icon hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer z-50"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Navigation umschalten"
      >
        {/* Schicke, cleane Linien für den Burger via Tailwind */}
        <span
          className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      <div
        className={`w-full md:w-auto md:flex items-center mt-4 md:mt-0 ${isOpen ? "block" : "hidden md:block"}`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none text-white font-medium">
          <li>
            <a
              className="hover:text-blue-200 transition-colors block py-2 md:py-0"
              href="#Navigation"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200 transition-colors block py-2 md:py-0"
              href="#about"
            >
              Über mich
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200 transition-colors block py-2 md:py-0"
              href="#competences"
            >
              Kompetenzen
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200 transition-colors block py-2 md:py-0"
              href="#projects"
            >
              Projekte
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200 transition-colors block py-2 md:py-0"
              href="#contact"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
