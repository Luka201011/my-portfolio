"use client";
import { useState } from "react";
import { Trans } from "@lingui/macro";

export default function ProjectsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (cardId: string) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };

  return (
    <section id="projects" className="mt-30">
      <div>
        <h2 className="text-center text-4xl p-4 font-bold">
          <Trans>Projekte</Trans>
        </h2>
      </div>
      <div className="flex justify-center items-center mt-10 pl-7 pr-7 flex-col xl:grid xl:grid-cols-2 gap-8">
        {/* Erste Karte: First Steps */}
        <div className="card-body-project bg-card-bg-white text-center mt-10 p-10 h-[450px] xl:h-[320px] md:h-[320px] flex flex-col items-center justify-center">
          <div>
            <h2 className="text-lg font-bold">First Steps 2025 NEX-14</h2>
          </div>
          <div className="title-projects-line bg-second"></div>
          <div>
            <p>
              <strong>Host:</strong> Jonas Schweizer
            </p>
          </div>
          <div>
            <p className="mt-2 text-sm md:text-base">
              <Trans>
                In den First Steps wurden mir die grundlegenden Kenntnisse und
                Erwartungen vermittelt. Ich lernte die wichtigsten Tools kennen
                und erhielt zahlreiche Einführungen. Dabei machte ich die ersten
                Schritte meiner Lehre, lernte meinen Lernbegleiter, zukünftige
                Arbeitskolleg*innen sowie die Swisscom kennen. Nach den First
                Steps fühlte ich mich gut auf das Berufsleben während meiner
                Ausbildung vorbereitet.
              </Trans>
            </p>
          </div>
        </div>

        {/* Zweite Karte: Team Minion */}
        <div
          className={`card-body-project text-center mt-10 h-[450px] xl:h-[320px] md:h-[320px] ${activeCard === "minion" ? "flipped" : ""}`}
        >
          <div className="front-card-project bg-card-bg-white flex-col">
            <div>
              <h2 className="text-lg font-bold">IT Onboarding Team Minion</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div>
              <p>
                <strong>Host:</strong> Margherita Fasanella
              </p>
            </div>
            <div>
              <p className="mt-2 text-sm md:text-base">
                <Trans>
                  Das IT-Onboarding-Projekt hat mir erste technische Grundlagen
                  der Webentwicklung, darunter HTML, CSS, JavaScript, TypeScript
                  und Angular. Ich werden eine eigene Portfolio-Website
                  erstellen und in Gruppenarbeit eine kleine Web-Applikation
                  entwickeln. Dabei lernte ich die agilen Arbeitsprozesse bei
                  Swisscom kennen, insbesondere Scrum, um optimal auf den
                  Geschäftsalltag vorbereitet zu sein.
                </Trans>
              </p>
              <button
                className="btn bg-second hover:bg-btn-hover text-white justify-self-center mt-4"
                onClick={() => handleFlip("minion")}
              >
                <Trans>Mehr Infos</Trans>
              </button>
            </div>
          </div>

          <div className="back-card-project flex-col bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">
                <Trans>Meine Arbeit</Trans>
              </h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div className="m-2 text-sm">
              <p className="mb-2 font-bold">
                <Trans>Das konnte ich alles umsetzten:</Trans>
              </p>
              <p className="mb-1">
                <strong>Portfolio-Website:</strong>{" "}
                <Trans>Ich habe eine Portfolio Website erstellt.</Trans>
              </p>
              <p className="mb-1">
                <Trans>
                  <strong>Taschenrechner:</strong> In einer Gruppenarbeit
                  entwickelte ich mit meinen Teamkollegen einen einfachen
                  Taschenrechner als Web-Applikation. Dabei übernahm ich die
                  Implementierung der Grundfunktionen wie Addition, Subtraktion,
                  Multiplikation und Division.
                </Trans>
              </p>
              <p>
                <strong>Github:</strong>{" "}
                <a
                  href="https://luka201011.github.io/Website-Taschenrechner/"
                  id="Github-Taschenrechner"
                  target="_blank"
                  className="underline text-second"
                >
                  <Trans>Taschenrechner</Trans>
                </a>
              </p>
            </div>
            <button
              className="btn-2 bg-btn-back text-white mt-4 justify-self-center text-center"
              onClick={() => handleFlip("minion")}
            >
              <Trans>zurück</Trans>
            </button>
          </div>
        </div>

        {/* Dritte Karte: Apps Team */}
        <div
          className={`card-body-project text-center mt-10 h-[450px] xl:h-[320px] md:h-[320px] ${activeCard === "apps" ? "flipped" : ""}`}
        >
          <div className="front-card-project bg-card-bg-white flex-col">
            <div>
              <h2 className="text-lg font-bold">Appes Team (Frontend)</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div>
              <p>
                <strong>Host:</strong> Apps Team Frontend
              </p>
            </div>
            <div>
              <p className="mt-2 text-sm md:text-base">
                <Trans>
                  Das Apps Team gab mir einen praxisnahen Einblick in die
                  Entwicklung moderner Webapplikationen. Mit Technologien wie
                  Next.js konnte ich mein technisches Wissen erweitern und
                  eigene Komponenten entwickeln. Zudem lernte ich agile Methoden
                  wie Scrum kennen, die die Teamarbeit erleichtern. Ein
                  Highlight war die Mitarbeit an einem interaktiven Tool zur
                  Unterstützung von Sponsoring-Aktivitäten bei Swisscom.
                </Trans>
              </p>
              <button
                className="btn bg-second hover:bg-btn-hover text-white justify-self-center mt-4"
                onClick={() => handleFlip("apps")}
              >
                <Trans>Mehr Infos</Trans>
              </button>
            </div>
          </div>

          <div className="back-card-project flex-col bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">
                <Trans>Meine Arbeit</Trans>
              </h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div className="m-2 text-sm">
              <p className="mb-2 font-bold">
                <Trans>Das konnte ich alles umsetzten:</Trans>
              </p>
              <p>
                <strong>Portfolio-Website:</strong>{" "}
                <Trans>Ich habe diese Portfolio Website erstellt.</Trans>
              </p>
            </div>
            <button
              className="btn-2 bg-btn-back text-white mt-8 flex justify-center items-center text-center"
              onClick={() => handleFlip("apps")}
            >
              <Trans>zurück</Trans>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
