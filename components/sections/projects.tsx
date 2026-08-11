"use client";
import { useState, useRef } from "react";
import { Trans } from "@lingui/react/macro";
import Image, { type StaticImageData } from "next/image";

import request from "../../public/SDMR/request.png";
import faq from "../../public/SDMR/faq.png";
import nav from "../../public/SDMR/nav.png";

interface ProjectTask {
  title: React.ReactNode;
  description?: React.ReactNode;
  link?: {
    url: string;
    label: string;
  };
  images?: StaticImageData[];
}

interface Project {
  id: string;
  title: string;
  host: string;
  description?: React.ReactNode;
  tasks?: ProjectTask[];
}

const PROJECTS: Project[] = [
  {
    id: "Halo",
    title: "Team Halo",
    host: "Sven Waser",
    description: <Trans>Kommt bald</Trans>,
  },
  {
    id: "apps",
    title: "Apps Team (Frontend)",
    host: "John Riordan",
    description: (
      <Trans>
        Das Apps Team gab mir einen praxisnahen Einblick in die Entwicklung
        moderner Webapplikationen. Mit Technologien wie Next.js konnte ich mein
        technisches Wissen erweitern und eigene Komponenten entwickeln. Zudem
        lernte ich agile Methoden wie Scrum kennen, die die Teamarbeit
        erleichtern. Ein Highlight war die Mitarbeit an einem interaktiven Tool
        zur Unterstützung von Sponsoring-Aktivitäten bei Swisscom.
      </Trans>
    ),
    tasks: [
      {
        title: "Portfolio-Website:",
        description: <Trans>Ich habe diese Portfolio Website erstellt.</Trans>,
      },
      {
        title: "Memory App:",
        description: <Trans>Ich habe eine Memory App entwickelt.</Trans>,
        link: {
          url: "https://memory-app-green.vercel.app/",
          label: "Memory App",
        },
      },
      {
        title: "SDMR Project:",
        description: (
          <Trans>
            Ich hatte die Gelegenheit, aktiv an einem realen Projekt von
            Swisscom mitzuwirken und dabei wertvolle Praxiserfahrung in der
            Frontend-Entwicklung zu sammeln.
          </Trans>
        ),
        images: [request, faq, nav],
      },
    ],
  },
  {
    id: "minion",
    title: "IT Onboarding Team Minion",
    host: "Margherita Fasanella",
    description: (
      <Trans>
        Das IT-Onboarding-Projekt hat mir erste technische Grundlagen der
        Webentwicklung, darunter HTML, CSS, JavaScript, TypeScript und Angular.
        Ich werden eine eigene Portfolio-Website erstellen und in Gruppenarbeit
        eine kleine Web-Applikation entwickeln. Dabei lernte ich die agilen
        Arbeitsprozesse bei Swisscom kennen, insbesondere Scrum, um optimal auf
        den Geschäftsalltag vorbereitet zu sein.
      </Trans>
    ),
    tasks: [
      {
        title: "Portfolio-Website:",
        description: <Trans>Ich habe eine Portfolio Website erstellt.</Trans>,
      },
      {
        title: "Taschenrechner:",
        description: (
          <Trans>
            In einer Gruppenarbeit entwickelte ich mit meinen Teamkollegen einen
            einfachen Taschenrechner als Web-Applikation. Dabei übernahm ich die
            Implementierung der Grundfunktionen wie Addition, Subtraktion,
            Multiplikation und Division.
          </Trans>
        ),
        link: {
          url: "https://website-taschenrechner.vercel.app/",
          label: "Taschenrechner",
        },
      },
    ],
  },
  {
    id: "first-steps",
    title: "First Steps 2025 NEX-14",
    host: "Jonas Schweizer",
    description: (
      <Trans>
        In den First Steps wurden mir die grundlegenden Kenntnisse und
        Erwartungen vermittelt. Ich lernte die wichtigsten Tools kennen und
        erhielt zahlreiche Einführungen. Dabei machte ich die ersten Schritte
        meiner Lehre, lernte meinen Lernbegleiter, zukünftige
        Arbeitskolleg*innen sowie die Swisscom kennen. Nach den First Steps
        fühlte ich mich gut auf das Berufsleben während meiner Ausbildung
        vorbereitet.
      </Trans>
    ),
  },
];

export default function ProjectsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<
    StaticImageData | string | null
  >(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = (cardId: string) => {
    setActiveCard((prev) => (prev === cardId ? null : cardId));
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="mt-28">
      <div>
        <h2 className="text-center text-4xl p-4 font-bold">
          <Trans>Projekte</Trans>
        </h2>
      </div>

      <div className="flex justify-center items-center mt-10 pl-7 pr-7 flex-col xl:grid xl:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`card-body-project text-center mt-10 h-[450px] xl:h-[320px] md:h-[320px] ${
              activeCard === project.id ? "flipped" : ""
            }`}
          >
            <div className="front-card-project bg-card-bg-white p-5">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <div className="title-projects-line bg-second"></div>
              <p>
                <strong>Host:</strong> {project.host}
              </p>
              <p className="mt-2 text-sm md:text-base">{project.description}</p>
              {project.tasks && project.tasks.length > 0 && (
                <button
                  className="btn-2 bg-second text-white mt-4"
                  onClick={() => handleFlip(project.id)}
                >
                  <Trans>Mehr Infos</Trans>
                </button>
              )}
            </div>

            <div className="back-card-project flex-col bg-card-bg-white p-5 overflow-y-auto">
              <h2 className="text-lg font-bold">
                <Trans>Meine Arbeit</Trans>
              </h2>
              <div className="title-projects-line bg-second"></div>

              {project.tasks?.map((task, index) => (
                <div key={index} className="mb-3">
                  <p className="text-sm">
                    <strong>{task.title}</strong> {task.description}
                    {task.link && (
                      <a
                        href={task.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-second ml-1 font-semibold"
                      >
                        {task.link.label}
                      </a>
                    )}
                  </p>

                  {task.images && task.images.length > 0 && (
                    <>
                      <p>
                        <strong>
                          <Trans>Bilder:</Trans>
                        </strong>
                      </p>
                      <div className="slider-wrapper bg-bg-akcent relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg mt-4">
                        <div className="slider" ref={sliderRef}>
                          {task.images.map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="slide-item cursor-pointer"
                              onClick={() => setSelectedImage(img)}
                            >
                              <Image
                                src={img}
                                width={500}
                                height={300}
                                className="w-full h-full object-cover"
                                alt={`Project Image ${imgIdx + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="slider-nav gap-2 flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                          {task.images.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => scrollToSlide(dotIdx)}
                              className="w-3 h-3 rounded-full bg-black hover:bg-white transition-all shadow-md focus:outline-none"
                              aria-label={`Slide ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}

              <button
                className="btn-2 bg-second text-white mt-4"
                onClick={() => handleFlip(project.id)}
              >
                <Trans>zurück</Trans>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-8 text-white hover:text-second text-4xl font-light"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Projektansicht Vollbild"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
