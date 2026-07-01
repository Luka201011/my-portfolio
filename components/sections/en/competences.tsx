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

  const [areCardsVisible, setAreCardsVisible] = useState<boolean>(false);

  const handleShowHiddenCards = () => {
    if (areCardsVisible === true) {
      setAreCardsVisible(false);
    } else {
      setAreCardsVisible(true);
    }
  };

  return (
    <section id="competences" className="mt-30">
      <div>
        <h2 className="text-center text-4xl font-bold">Competences</h2>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 gap-8 justify-center items-center mt-20 px-7">
        {/* HTML Karte */}
        <div
          className={`card-body-competences w-full ${activeCard === "html" ? "flipped" : ""}`}
          onClick={() => handleFlip("html")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">HTML</p>
            <img
              src="/klicken.png"
              alt="Hinweis das es anklickbar ist"
              className="klicken-icon"
            />
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">advanced</p>
          </div>
        </div>

        {/* CSS Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 md:mt-0 ${activeCard === "css" ? "flipped" : ""}`}
          onClick={() => handleFlip("css")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">CSS</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">advanced</p>
          </div>
        </div>

        {/* JavaScript Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${activeCard === "javascript" ? "flipped" : ""}`}
          onClick={() => handleFlip("javascript")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">JavaScript</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">intermediate</p>
          </div>
        </div>

        {/* Angular Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${activeCard === "angular" ? "flipped" : ""}`}
          onClick={() => handleFlip("angular")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">Angular</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">Basic knowledge</p>
          </div>
        </div>

        {/* TypeScript Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${activeCard === "typescript" ? "flipped" : ""}`}
          onClick={() => handleFlip("typescript")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">TypeScript</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">intermediate</p>
          </div>
        </div>

        {/* SDX Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${activeCard === "sdx" ? "flipped" : ""}`}
          onClick={() => handleFlip("sdx")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">SDX</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">intermediate</p>
          </div>
        </div>

        {/* SQL Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${!areCardsVisible ? "hidden" : ""} ${activeCard === "sql" ? "flipped" : ""}`}
          onClick={() => handleFlip("sql")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">SQL</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">Basic knowledge</p>
          </div>
          -
        </div>

        {/* JAVA Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${!areCardsVisible ? "hidden" : ""} ${activeCard === "java" ? "flipped" : ""}`}
          onClick={() => handleFlip("java")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">Java</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">Basic knowledge</p>
          </div>
        </div>

        {/* React Karte */}
        <div
          className={`card-body-competences w-full mt-8 xl:mt-0 ${!areCardsVisible ? "hidden" : ""} ${activeCard === "react" ? "flipped" : ""}`}
          onClick={() => handleFlip("react")}
        >
          <div className="front-card-competences bg-card-bg-white">
            <p className="text-2xl font-semibold">React</p>
          </div>
          <div className="back-card-competences bg-second text-white">
            <p className="text-2xl font-semibold">intermediate</p>
          </div>
        </div>

        <button
          onClick={handleShowHiddenCards}
          className="btn bg-second text-white hover:bg-btn-hover justify-self-center mt-8 xl:col-start-2 xl:col-span-1 md:col-span-2"
        >
          {areCardsVisible ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}
