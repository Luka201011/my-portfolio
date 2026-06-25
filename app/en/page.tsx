import AboutSection from "../../components/sections/en/about";
import CompetencesSection from "../../components/sections/en/competences";
import ProjectsSection from "../../components/sections/en/projects";
import ContactSection from "../../components/sections/en/contact";

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
              Computer Scientist
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
              Application Developer
            </h2>
            <h1 className="font-bold text-2xl xl:text-4xl">First year</h1>
          </div>
        </div>
        <div className="mx-auto  text-center p-8 mt-8 xl:mt-10 xl:w-100 xl:text-xl md:w-80">
          <p>
            I am currently in my first year of training as an application
            developer at Swisscom. I'm glad you've visited my website and wish
            you an enjoyable time reading through it.
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
