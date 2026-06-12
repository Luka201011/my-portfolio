import AboutSection from "../components/sections/about";
import CompetencesSection from "../components/sections/competences";
import ProjectsSection from "../components/sections/projects";
import ContactSection from "../components/sections/contact";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="">
          <div className="flex-col justify-center flex items-center">
            <h1 className="text-2xl font-bold mt-15">Luka Jevremovic</h1>
            <h2 className="text-xl font-normal">Informatiker</h2>
          </div>
          <div className="flex justify-center mt-15">
            <img
              src="/klein-profilbild.jpg"
              className="Homeimg flex justify-center items-center"
              alt="portrait"
            />
          </div>
          <div className="flex-col flex justify-center items-center mt-15">
            <h2 className="text-xl font-normal">Applikationsentwickler</h2>
            <h1 className="font-bold text-2xl">1. Lehrjahr</h1>
          </div>
        </div>
        <div className="flex justify-center mt-15 p-8 text-center">
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
