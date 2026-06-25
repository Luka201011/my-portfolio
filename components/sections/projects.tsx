"use client";
import { useState } from "react";
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
        <h2 className="text-center text-4xl font-bold">Projekte</h2>
      </div>
      <div className="flex justify-center items-center mt-10 pl-7 pr-7 flex-col xl:grid xl:grid-cols-2 gap-8">
        <div className="card-body bg-card-bg-white text-center p-10">
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
            <p className="mt-2">
              {" "}
              In den First Steps wurden mir die grundlegenden Kenntnisse und
              Erwartungen vermittelt. Ich lernte die wichtigsten Tools kennen
              und erhielt zahlreiche Einführungen. Dabei machte ich die ersten
              Schritte meiner Lehre, lernte meinen Lernbegleiter, zukünftige
              Arbeitskolleg*innen sowie die Swisscom kennen. Nach den First
              Steps fühlte ich mich gut auf das Berufsleben während meiner
              Ausbildung vorbereitet.
            </p>
          </div>
        </div>

        <div
          className={`card-body-project text-center mt-10 p-10 h-[450px] xl:h-[320px] md:h-[320] ${activeCard === "minion" ? "flipped" : ""}`}
        >
          <div className="front-card-project bg-card-bg-white flex-col">
            <div>
              <h2 className="text-lg font-bold">IT-Onboarding Team Minion</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div>
              <p>
                <strong>Host:</strong> Margherita Fasanella
              </p>
            </div>
            <div>
              <p className="mt-2">
                {" "}
                Das IT-Onboarding-Projekt hat mir erste technische Grundlagen
                der Webentwicklung, darunter HTML, CSS, JavaScript, TypeScript
                und Angular. Ich werden eine eigene Portfolio-Website erstellen
                und in Gruppenarbeit eine kleine Web-Applikation entwickeln.
                Dabei lernte ich die agilen Arbeitsprozesse bei Swisscom kennen,
                insbesondere Scrum, um optimal auf den Geschäftsalltag
                vorbereitet zu sein.
              </p>
              <button
                className="btn bg-second hover:bg-btn-hover text-white justify-self-center mt-8"
                onClick={() => handleFlip("minion")}
              >
                Mehr Infos
              </button>
            </div>
          </div>
          <div className="back-card-project flex-col bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">Meine Arbeit</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div className="m-2">
              <p className="mb-2">Das konnte ich alles umsetzten:</p>
              <div>
                <p>
                  <strong>Portfolio-Website:</strong>
                  Ich habe eine Portfolio Website erstellt.
                </p>
              </div>
              <div>
                <p>
                  <strong>Taschenrechner:</strong>
                  In einer Gruppenarbeit entwickelte ich mit meinen Teamkollegen
                  einen einfachen Taschenrechner als Web-Applikation. Dabei
                  übernahm ich die Implementierung der Grundfunktionen wie
                  Addition, Subtraktion, Multiplikation und Division.
                </p>
              </div>
              <div>
                <p>
                  <strong>Github:</strong>
                  <a
                    href="https://luka201011.github.io/Website-Taschenrechner/"
                    id="Github-Taschenrechner"
                    target="_blank"
                    className="underline"
                  >
                    Taschenrechner
                  </a>
                </p>
              </div>
            </div>
            <div
              className="btn-2 bg-btn-back text-white mt-2 justify-self-center text-center"
              onClick={() => handleFlip("minion")}
            >
              <p>zurück</p>
            </div>
          </div>
        </div>

        <div
          className={`card-body-project text-center mt-10 p-10 h-[450px] xl:h-[320px] md:h-[320] ${activeCard === "apps" ? "flipped" : ""}`}
        >
          <div className="front-card-project bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">Appes Team (Frontend)</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div>
              <p>
                <strong>Host:</strong> Petre Tudor
              </p>
            </div>
            <div>
              <p className="mt-2">
                {" "}
                Das Apps Team gab mir einen praxisnahen Einblick in die
                Entwicklung moderner Webapplikationen. Mit Technologien wie
                Next.js konnte ich mein technisches Wissen erweitern und eigene
                Komponenten entwickeln. Zudem lernte ich agile Methoden wie
                Scrum kennen, die die Teamarbeit erleichtern. Ein Highlight war
                die Mitarbeit an einem interaktiven Tool zur Unterstützung von
                Sponsoring-Aktivitäten bei Swisscom.
              </p>
              <button
                className="btn bg-second text-white justify-self-center mt-8"
                onClick={() => handleFlip("apps")}
              >
                Mehr Infos
              </button>
            </div>
          </div>
          <div className="back-card-project flex-col bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">Meine Arbeit</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div className="m-2">
              <p className="mb-2">Das konnte ich alles umsetzten:</p>
              <div>
                <p>
                  <strong>Portfolio-Website:</strong>
                  Ich habe diese Portfolio Website erstellt.
                </p>
              </div>
            </div>
            <div
              className="btn-2 bg-btn-back text-white mt-2 flex justify-center items-center text-center"
              onClick={() => handleFlip("apps")}
            >
              <p>zurück</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
