"use client";
import { useState } from "react";

export default function CompetencesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (cardId: string) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };

  return (
    <section id="competences" className="marginT-4">
      <div>
        <h2 className="center-Text title">Kompetenzen</h2>
      </div>
      <div className="center marginT-4 paddingL-3 paddingR-3 flex-col">
        {/* HTML Karte */}
        <div
          className={`card-body-competences ${activeCard === "html" ? "flipped" : ""}`}
          onClick={() => handleFlip("html")}
        >
          <div className="front-card-competences">
            <p className="text-competences">HTML</p>
            <img
              src="/klicken.png"
              alt="Hinweis das es anklickbar ist"
              className="klicken-icon"
            />
          </div>
          <div className="back-card-competences">
            <p className="text-competences">Fortgeschritten</p>
          </div>
        </div>

        {/* CSS Karte */}
        <div
          className={`card-body-competences marginT-3 ${activeCard === "css" ? "flipped" : ""}`}
          onClick={() => handleFlip("css")}
        >
          <div className="front-card-competences">
            <p className="text-competences">CSS</p>
          </div>
          <div className="back-card-competences">
            <p className="text-competences">Fortgeschritten</p>
          </div>
        </div>

        {/* JavaScript Karte */}
        <div
          className={`card-body-competences marginT-3 ${activeCard === "javascript" ? "flipped" : ""}`}
          onClick={() => handleFlip("javascript")}
        >
          <div className="front-card-competences">
            <p className="text-competences">JavaScript</p>
          </div>
          <div className="back-card-competences">
            <p className="text-competences">Grundkenntnisse</p>
          </div>
        </div>

        {/* Angular Karte */}
        <div
          className={`card-body-competences marginT-3 ${activeCard === "angular" ? "flipped" : ""}`}
          onClick={() => handleFlip("angular")}
        >
          <div className="front-card-competences">
            <p className="text-competences">Angular</p>
          </div>
          <div className="back-card-competences">
            <p className="text-competences">Grundkenntnisse</p>
          </div>
        </div>

        {/* TypeScript Karte */}
        <div
          className={`card-body-competences marginT-3 ${activeCard === "typescript" ? "flipped" : ""}`}
          onClick={() => handleFlip("typescript")}
        >
          <div className="front-card-competences">
            <p className="text-competences">TypeScript</p>
          </div>
          <div className="back-card-competences">
            <p className="text-competences">Grundkenntnisse</p>
          </div>
        </div>

        {/* SDX Karte */}
        <div
          className={`card-body-competences marginT-3 ${activeCard === "sdx" ? "flipped" : ""}`}
          onClick={() => handleFlip("sdx")}
        >
          <div className="front-card-competences">
            <p className="text-competences">SDX</p>
          </div>
          <div className="back-card-competences">
            <p className="text-competences">Grundkenntnisse</p>
          </div>
        </div>

        {/* Mehr anzeigen Button */}
        <div className="btn marginT-3">
          <p>Mehr anzeigen</p>
        </div>
      </div>
    </section>
  );
}
