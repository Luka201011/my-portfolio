"use client";
import AboutSection from "../../components/sections/about";
import CompetencesSection from "../../components/sections/competences";
import ProjectsSection from "../../components/sections/projects";
import ContactSection from "../../components/sections/contact";
import { Trans } from "@lingui/react/macro";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-20 xl:mt-5 md:flex-row md:gap-15">
          <div className="flex-col justify-center flex items-center">
            <h1 className="text-2xl font-bold mt-15 xl:text-4xl">
              Luka Jevremovic
            </h1>
            <h2 className="text-xl font-normal xl:text-3xl">
              <Trans>Informatiker</Trans>
            </h2>
          </div>
          <div className="flex justify-center mt-15">
            <img
              src="/klein-profilbild.jpg"
              className="rounded-2xl w-3xs h-auto flex justify-center items-center xl:w-xs xl:h-auto"
              alt="portrait"
            />
          </div>
          <div className="flex-col flex justify-center items-center mt-15">
            <h2 className="text-xl font-normal xl:text-3xl">
              <Trans>Applikationsentwickler</Trans>
            </h2>
            <h1 className="font-bold text-2xl xl:text-4xl">
              <Trans>2. Lehrjahr</Trans>
            </h1>
          </div>
        </div>
        <div className="mx-auto  text-center p-8 mt-8 xl:mt-10 xl:w-100 xl:text-xl md:w-80">
          <p>
            <Trans>
              Ich bin im zweiten Lehrjahr als Applikationsentwickler bei
              Swisscom tätig. Es freut mich, dass du auf meine Website bist und
              wünsche dir viel Spass beim Lesen.
            </Trans>
          </p>
        </div>
      </div>

      <AboutSection />

      <CompetencesSection />

      <ProjectsSection />

      <ContactSection />
    </>
  );
}
