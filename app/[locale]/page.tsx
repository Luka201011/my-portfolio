"use client";
import AboutSection from "../../components/sections/about";
import CompetencesSection from "../../components/sections/competences";
import ProjectsSection from "../../components/sections/projects";
import ContactSection from "../../components/sections/contact";
import { Trans } from "@lingui/react/macro";
import Image from "next/image";

import profileImage from "../../public/klein-profilbild.jpg";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-20 md:mt-20 md:flex-row md:gap-14 2xl:mt-48">
          <div className="flex-col justify-center flex items-center flex-1">
            <h1 className="text-2xl font-bold mt-14 xl:text-3xl 2xl:text-4xl">
              Luka Jevremovic
            </h1>
            <h2 className="text-xl font-normal xl:text-3xl 2xl:text-4xl">
              <Trans>Informatiker</Trans>
            </h2>
          </div>
          <div className="mt-14 md:mt-0">
            <Image
              src={profileImage}
              className="rounded-2xl w-3xs h-auto xl:w-xs xl:h-auto 2xl:w-md"
              alt="portrait Luka Jevremovic"
              loading="eager"
            />
          </div>
          <div className="flex-col flex justify-center items-center mt-14 flex-1">
            <h2 className="text-xl font-normal xl:text-3xl 2xl:text-4xl">
              <Trans>Applikationsentwickler</Trans>
            </h2>
            <h2 className="font-bold text-2xl xl:text-4xl 2xl:text-5xl">
              <Trans>2. Lehrjahr</Trans>
            </h2>
          </div>
        </div>
        <div className="mx-auto text-center p-8 mt-8 xl:mt-10 xl:w-100 xl:text-xl md:w-80 2xl:text-2xl">
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
