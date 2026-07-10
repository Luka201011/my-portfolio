"use client";
import { useState } from "react";
import { Trans } from "@lingui/react/macro";

type Level = "grund" | "fortgeschritten" | "erweitert";

interface Competence {
  id: string;
  name: string;
  level: Level;
  alwaysVisible: boolean;
}

const levelLabels: Record<Level, React.ReactNode> = {
  grund: <Trans>Grundkenntnisse</Trans>,
  fortgeschritten: <Trans>Fortgeschritten</Trans>,
  erweitert: <Trans>Erweiterte Kenntnisse</Trans>,
};

const competences: Competence[] = [
  { id: "html", name: "HTML", level: "fortgeschritten", alwaysVisible: true },
  { id: "css", name: "CSS", level: "fortgeschritten", alwaysVisible: true },
  {
    id: "javascript",
    name: "JavaScript",
    level: "erweitert",
    alwaysVisible: true,
  },
  { id: "angular", name: "Angular", level: "grund", alwaysVisible: true },
  {
    id: "typescript",
    name: "TypeScript",
    level: "erweitert",
    alwaysVisible: true,
  },
  { id: "sdx", name: "SDX", level: "erweitert", alwaysVisible: true },
  { id: "sql", name: "SQL", level: "grund", alwaysVisible: false },
  { id: "java", name: "Java", level: "grund", alwaysVisible: false },
  { id: "react", name: "React", level: "erweitert", alwaysVisible: false },
];

export default function CompetencesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [areCardsVisible, setAreCardsVisible] = useState<boolean>(false);

  const handleFlip = (cardId: string) => {
    setActiveCard((prev) => (prev === cardId ? null : cardId));
  };

  const handleShowHiddenCards = () => {
    setAreCardsVisible((prev) => !prev);
  };

  return (
    <section id="competences" className="mt-30">
      <div>
        <h2 className="text-center text-4xl p-4 font-bold">
          <Trans>Kompetenzen</Trans>
        </h2>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 gap-8 justify-center items-center mt-20 px-7">
        {competences.map((comp) => (
          <div
            key={comp.id}
            className={`card-body-competences w-full mt-8 xl:mt-0 ${
              comp.id !== "html" ? "" : ""
            } ${!comp.alwaysVisible && !areCardsVisible ? "hidden" : ""} ${
              activeCard === comp.id ? "flipped" : ""
            }`}
            onClick={() => handleFlip(comp.id)}
          >
            <div className="front-card-competences bg-card-bg-white">
              <p className="text-2xl font-semibold">{comp.name}</p>
              {comp.id === "html" && (
                <img
                  src="/klicken.png"
                  alt="Hinweis das es anklickbar ist"
                  className="klicken-icon"
                />
              )}
            </div>
            <div className="back-card-competences bg-second text-white">
              <p className="text-2xl font-semibold">
                {levelLabels[comp.level]}
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={handleShowHiddenCards}
          className="btn bg-second text-white hover:bg-btn-hover justify-self-center mt-8 xl:col-start-2 xl:col-span-1 md:col-span-2"
        >
          {areCardsVisible ? (
            <Trans>Weniger anzeigen</Trans>
          ) : (
            <Trans>Mehr anzeigen</Trans>
          )}
        </button>
      </div>
    </section>
  );
}
