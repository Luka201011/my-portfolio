import AboutSection from "../components/sections/about";
import CompetencesSection from "../components/sections/competences";
import ProjectsSection from "../components/sections/projects";
import ContactSection from "../components/sections/contact";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-20 xl:mt-25">
          <div className="flex-col justify-center flex items-center">
            <h1 className="text-2xl font-bold mt-15 xl:text-5xl">
              Luka Jevremovic
            </h1>
            <h2 className="text-xl font-normal xl:text-4xl">Informatiker</h2>
          </div>
          <div className="flex justify-center mt-15">
            <img
              src="/klein-profilbild.jpg"
              className="rounded-2xl w-3xs h-auto flex justify-center items-center xl:w-sm xl:h-auto"
              alt="portrait"
            />
          </div>
          <div className="flex-col flex justify-center items-center mt-15">
            <h2 className="text-xl font-normal xl:text-4xl">
              Applikationsentwickler
            </h2>
            <h1 className="font-bold text-2xl xl:text-5xl">1. Lehrjahr</h1>
          </div>
        </div>
        <div className="mx-auto  text-center p-8 mt-8 xl:mt-15 xl:w-100 xl:text-xl">
          <p>
            Ich bin im ersten Lehrjahr als Applikationsentwickler bei Swisscom
            tätig. Es freut mich, dass du auf meine Website bist und wünsche dir
            viel Spass beim Lesen.
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
