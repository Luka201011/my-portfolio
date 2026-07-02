"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Trans } from "@lingui/macro";

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

  // Erkennen, ob wir gerade auf Englisch (/en) sind, sonst greift Deutsch (/de)
  const isEN = pathname.startsWith("/en");
  const currentLocalePrefix = isEN ? "/en" : "/de";

  const [themeIndex, setThemeIndex] = useState(0);

  const handleThemeChange = () => {
    const next = (themeIndex + 1) % themes.length;
    setThemeIndex(next);
    document.documentElement.classList.remove(...themes);
    if (next != 0) {
      document.documentElement.classList.add(themes[next]);
    }
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

          {/* Sprachwechsler Deutsch */}
          <Link href="/de" title="Deutsch" style={{ opacity: isEN ? 0.4 : 1 }}>
            <img src="/flagge.png" alt="Deutsch" className="flag-icon" />
          </Link>

          {/* Sprachwechsler Englisch */}
          <Link href="/en" title="English" style={{ opacity: isEN ? 1 : 0.4 }}>
            <img
              src="/vereinigtes-konigreich.png"
              alt="Englisch"
              className="flag-icon"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-8 list-none m-0">
          <li>
            <Link
              href={`${currentLocalePrefix}#Navigation`}
              className="text-white font-medium"
            >
              <Trans>Home</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#about`}
              className="text-white font-medium"
            >
              <Trans>Über mich</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#competences`}
              className="text-white font-medium"
            >
              <Trans>Kompetenzen</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#projects`}
              className="text-white font-medium"
            >
              <Trans>Projekte</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#contact`}
              className="text-white font-medium"
            >
              <Trans>Kontakt</Trans>
            </Link>
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
            <Link
              href={`${currentLocalePrefix}#Navigation`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Home</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#about`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Über mich</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#competences`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Kompetenzen</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#projects`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Projekte</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#contact`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white font-medium"
            >
              <Trans>Kontakt</Trans>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
