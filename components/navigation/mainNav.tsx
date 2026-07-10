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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.includes("#")) {
      const [path, fragment] = href.split("#");
      const currentPath = pathname.split("#")[0];

      if (path === currentPath || path === "") {
        e.preventDefault();
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 0);
      }
    }
    setTimeout(() => setIsOpen(false), 300);
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
              onClick={handleNavClick}
              className="text-white font-medium"
            >
              <Trans>Home</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#about`}
              onClick={handleNavClick}
              className="text-white font-medium"
            >
              <Trans>Über mich</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#competences`}
              onClick={handleNavClick}
              className="text-white font-medium"
            >
              <Trans>Kompetenzen</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#projects`}
              onClick={handleNavClick}
              className="text-white font-medium"
            >
              <Trans>Projekte</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#contact`}
              onClick={handleNavClick}
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
              onClick={handleNavClick}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Home</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#about`}
              onClick={handleNavClick}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Über mich</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#competences`}
              onClick={handleNavClick}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Kompetenzen</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#projects`}
              onClick={handleNavClick}
              className="block py-3 text-white font-medium border-b border-white/20"
            >
              <Trans>Projekte</Trans>
            </Link>
          </li>
          <li>
            <Link
              href={`${currentLocalePrefix}#contact`}
              onClick={handleNavClick}
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
