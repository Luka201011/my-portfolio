"use client";
import { useState } from "react";
import { Trans } from "@lingui/react/macro";
import Image from "next/image";
import { useRef } from "react";

import request from "../../public/SDMR/request.png";
import faq from "../../public/SDMR/faq.png";
import nav from "../../public/SDMR/nav.png";

export default function ProjectsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (cardId: string) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="mt-28">
      <div>
        <h2 className="text-center text-4xl p-4 font-bold">
          <Trans>Projekte</Trans>
        </h2>
      </div>
      <div className="flex justify-center items-center mt-10 pl-7 pr-7 flex-col xl:grid xl:grid-cols-2 gap-8">
        {/* Team Halo */}
        <div
          className={`card-body-project text-center mt-10 h-[450px] xl:h-[320px] md:h-[320px] ${activeCard === "Halo" ? "flipped" : ""}`}
        >
          <div className="front-card-project bg-card-bg-white flex-col">
            <div>
              <h2 className="text-lg font-bold">Team Halo</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div>
              <p>
                <strong>Host:</strong> Sven Waser
              </p>
            </div>
            <div>
              <p className="mt-2 text-sm md:text-base">
                <Trans>Kommt bald</Trans>
              </p>
              <button
                className="btn bg-second hover:bg-btn-hover text-white justify-self-center mt-4"
                onClick={() => handleFlip("Halo")}
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
            </div>
            <button
              className="btn-2 bg-btn-back text-white mt-8 flex justify-center items-center text-center"
              onClick={() => handleFlip("Halo")}
            >
              <Trans>zurück</Trans>
            </button>
          </div>
        </div>

        {/* Apps Team */}
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
              <p>
                <strong>Memory App:</strong>{" "}
                <Trans>Ich habe eine Memory App entwickelt. </Trans>
              </p>
              <p>
                <strong>Github:</strong>{" "}
                <a
                  href="https://luka201011.github.io/memory-app/"
                  id="Github-Memory-App"
                  target="_blank"
                  className="underline text-second"
                >
                  Memory App
                </a>
              </p>
              <p>
                <strong>SDMR Project:</strong>{" "}
                <Trans>
                  Ich hatte die Gelegenheit, aktiv an einem realen Projekt von
                  Swisscom mitzuwirken und dabei wertvolle Praxiserfahrung in
                  der Frontend-Entwicklung zu sammeln.
                </Trans>
              </p>
              <p>
                <strong>
                  <Trans>Bilder:</Trans>
                </strong>
              </p>
              <div className="slider-wrapper bg-bg-akcent relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg mt-4">
                <div className="slider" ref={sliderRef}>
                  <div
                    className="slide-item cursor-pointer"
                    onClick={() => setSelectedImage(request.src)}
                  >
                    <Image
                      src={request}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="Project Image 1"
                    />
                  </div>
                  <div
                    className="slide-item cursor-pointer"
                    onClick={() => setSelectedImage(faq.src)}
                  >
                    <Image
                      src={faq}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="Project Image 2"
                    />
                  </div>
                  <div
                    className="slide-item cursor-pointer"
                    onClick={() => setSelectedImage(nav.src)}
                  >
                    <Image
                      src={nav}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="Project Image 3"
                    />
                  </div>
                </div>
                <div className="slider-nav gap-2 flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                  <button
                    onClick={() => scrollToSlide(0)}
                    className="w-3 h-3 rounded-full bg-black hover:bg-white transition-all shadow-md focus:outline-none"
                    aria-label="Slide 1"
                  />
                  <button
                    onClick={() => scrollToSlide(1)}
                    className="w-3 h-3 rounded-full bg-black hover:bg-white transition-all shadow-md focus:outline-none"
                    aria-label="Slide 2"
                  />
                  <button
                    onClick={() => scrollToSlide(2)}
                    className="w-3 h-3 rounded-full bg-black hover:bg-white transition-all shadow-md focus:outline-none"
                    aria-label="Slide 3"
                  />
                </div>
              </div>
            </div>
            <button
              className="btn-2 bg-btn-back text-white mt-8 flex justify-center items-center text-center"
              onClick={() => handleFlip("apps")}
            >
              <Trans>zurück</Trans>
            </button>
          </div>
        </div>

        {/* Team Minion */}
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

        {/* First Steps */}
        <div className="card-body-project bg-card-bg-white text-center mt-10 p-5 h-[450px] xl:h-[320px] md:h-[320px] flex flex-col items-center justify-start">
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
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-bg-akcent z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-8 text-black hover:text-second text-4xl font-light"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Projektansicht Vollbild"
              className="max-w-full max-h-[80vh] object-contain rounded-lg border border-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
