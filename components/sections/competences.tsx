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
    <section id="competences" className="mt-10">
      <div>
        <h2 className="text-center text-4xl font-bold">Kompetenzen</h2>
      </div>
      <div className="flex justify-center items-center mt-10 pl-7 pr-7 flex-col">
        {/* HTML Karte */}
        <div
          className={`card-body-competences ${activeCard === "html" ? "flipped" : ""}`}
          onClick={() => handleFlip("html")}
        >
          <div className="front-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              HTML
            </p>
            <img
              src="/klicken.png"
              alt="Hinweis das es anklickbar ist"
              className="klicken-icon"
            />
          </div>
          <div className="back-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Fortgeschritten
            </p>
          </div>
        </div>

        {/* CSS Karte */}
        <div
          className={`card-body-competences mt-8 ${activeCard === "css" ? "flipped" : ""}`}
          onClick={() => handleFlip("css")}
        >
          <div className="front-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              CSS
            </p>
          </div>
          <div className="back-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Fortgeschritten
            </p>
          </div>
        </div>

        {/* JavaScript Karte */}
        <div
          className={`card-body-competences mt-8 ${activeCard === "javascript" ? "flipped" : ""}`}
          onClick={() => handleFlip("javascript")}
        >
          <div className="front-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              JavaScript
            </p>
          </div>
          <div className="back-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Grundkenntnisse
            </p>
          </div>
        </div>

        {/* Angular Karte */}
        <div
          className={`card-body-competences mt-8 ${activeCard === "angular" ? "flipped" : ""}`}
          onClick={() => handleFlip("angular")}
        >
          <div className="front-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Angular
            </p>
          </div>
          <div className="back-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Grundkenntnisse
            </p>
          </div>
        </div>

        {/* TypeScript Karte */}
        <div
          className={`card-body-competences mt-8 ${activeCard === "typescript" ? "flipped" : ""}`}
          onClick={() => handleFlip("typescript")}
        >
          <div className="front-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              TypeScript
            </p>
          </div>
          <div className="back-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Grundkenntnisse
            </p>
          </div>
        </div>

        {/* SDX Karte */}
        <div
          className={`card-body-competences mt-8 ${activeCard === "sdx" ? "flipped" : ""}`}
          onClick={() => handleFlip("sdx")}
        >
          <div className="front-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              SDX
            </p>
          </div>
          <div className="back-card-competences">
            <p
              className="text-2xl 
font-semibold
"
            >
              Grundkenntnisse
            </p>
          </div>
        </div>

        {/* Mehr anzeigen Button */}
        <div className="btn mt-8">
          <p>Mehr anzeigen</p>
        </div>
      </div>
    </section>
  );
}
