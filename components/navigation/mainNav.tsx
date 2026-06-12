"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#Navigation" },
  { label: "Über mich", href: "#about" },
  { label: "Kompetenzen", href: "#competences" },
  { label: "Projekte", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="Navigation"
      style={{ backgroundColor: "rgb(135, 135, 135)" }}
      className="w-full"
    >
      {/* Hauptzeile */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Flaggen links */}
        <div className="flex items-center gap-3">
          <a href="/">
            <img
              src="/flagge.png"
              alt="Deutsch"
              className="flag-icon hover:opacity-75 transition-opacity"
            />
          </a>
          <a href="/en">
            <img
              src="/vereinigtes-konigreich.png"
              alt="Englisch"
              className="flag-icon hover:opacity-75 transition-opacity"
            />
          </a>
        </div>

        {/* Links rechts – nur Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white font-medium hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger – nur Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Navigation umschalten"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
        >
          <span
            className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menü – klappt nach unten auf, schiebt Seite */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col list-none px-6 pb-3">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-white font-medium hover:text-white/70 transition-colors ${
                  i < NAV_LINKS.length - 1 ? "border-b border-white/20" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
