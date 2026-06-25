"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const themes = [
  "theme-default",
  "theme-old",
  "theme-green",
  "theme-RoseNavy",
  "theme-viollet",
];

const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const [themeIndex, setThemeIndex] = useState(0);

  const handleThemeChange = () => {
    const next = (themeIndex + 1) % themes.length;
    setThemeIndex(next);
    document.documentElement.classList.remove(...themes);
    if (next != 0) {
      document.documentElement.classList.add(themes[next]);
    }
  };

  const labels = {
    home: "Home",
    about: isEN ? "About me" : "Über mich",
    competences: isEN ? "Skills" : "Kompetenzen",
    projects: isEN ? "Projects" : "Projekte",
    contact: isEN ? "Contact" : "Kontakt",
  };

  return (
    <nav id="Navigation" className="w-full bg-card-border">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleThemeChange}
            title={`Theme: ${themes[themeIndex]}`}
          >
            <img
              src="/farbpalette.png"
              alt="farbpalette"
              className="flag-icon cursor-pointer"
            />
          </button>
          <a href="/" title="Deutsch" style={{ opacity: isEN ? 0.4 : 1 }}>
            <img src="/flagge.png" alt="Deutsch" className="flag-icon" />
          </a>
          <a href="/en" title="English" style={{ opacity: isEN ? 1 : 0.4 }}>
            <img
              src="/vereinigtes-konigreich.png"
              alt="Englisch"
              className="flag-icon"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-8 list-none m-0">
          <li>
            <a href="#Navigation" className="text-white font-medium">
              {labels.home}
            </a>
          </li>
          <li>
            <a href="#about" className="text-white font-medium">
              {labels.about}
            </a>
          </li>
          <li>
            <a href="#competences" className="text-white font-medium">
              {labels.competences}
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white font-medium">
              {labels.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white font-medium">
              {labels.contact}
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
          className="xl:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
        >
          <span
            style={{
              transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
              transition: "all 0.3s",
            }}
            className="block h-[2px] w-6 bg-white rounded"
          />
          <span
            style={{ opacity: isOpen ? 0 : 1, transition: "all 0.3s" }}
            className="block h-[2px] w-6 bg-white rounded"
          />
          <span
            style={{
              transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              transition: "all 0.3s",
            }}
            className="block h-[2px] w-6 bg-white rounded"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        style={{
          maxHeight: isOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <ul className="flex flex-col list-none px-6 pb-3">
          <li>
            <a
              href="#Navigation"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              {labels.home}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              {labels.about}
            </a>
          </li>
          <li>
            <a
              href="#competences"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              {labels.competences}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              {labels.projects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium"
            >
              {labels.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
