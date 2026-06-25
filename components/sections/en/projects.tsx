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
        <h2 className="text-center text-4xl font-bold">Projects</h2>
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
              During the First Steps program, I was introduced to the
              fundamental knowledge and expectations. I got to know the most
              important tools and received numerous introductions. This was when
              I took the first steps of my apprenticeship, met my learning
              coach, future colleagues, and got to know Swisscom as a company.
              After completing the First Steps, I felt well prepared for
              professional life during my training.
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
                The IT onboarding project introduced me to the basic technical
                foundations of web development, including HTML, CSS, JavaScript,
                TypeScript, and Angular. I will create my own portfolio website
                and, together with my team, develop a small web application.
                Through this project, I got to know Swisscom's agile work
                processes, especially Scrum, to be optimally prepared for
                everyday business life.
              </p>
              <button
                className="btn bg-second hover:bg-btn-hover text-white justify-self-center mt-8"
                onClick={() => handleFlip("minion")}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="back-card-project flex-col bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">My work</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div className="m-2">
              <p className="mb-2">I was able to implement all of this:</p>
              <div>
                <p>
                  <strong>Portfolio-Website:</strong>I created a portfolio
                  website.
                </p>
              </div>
              <div>
                <p>
                  <strong>Calculator:</strong>
                  As part of a group project, my teammates and I developed a
                  simple calculator as a web application. I was responsible for
                  implementing the basic functions such as addition,
                  subtraction, multiplication, and division.
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
                    Calculator
                  </a>
                </p>
              </div>
            </div>
            <div
              className="btn-2 bg-btn-back text-white mt-2 justify-self-center text-center"
              onClick={() => handleFlip("minion")}
            >
              <p>Return</p>
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
                The Apps team gave me hands-on insights into the development of
                modern web applications. Using technologies such as Next.js, I
                was able to expand my technical knowledge and develop my own
                components. I also learned about agile methods like Scrum, which
                make teamwork more efficient. A highlight of my experience was
                contributing to an interactive tool that supports Swisscom's
                sponsorship activities.
              </p>
              <button
                className="btn bg-second text-white justify-self-center mt-8"
                onClick={() => handleFlip("apps")}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="back-card-project flex-col bg-card-bg-white">
            <div>
              <h2 className="text-lg font-bold">My work</h2>
            </div>
            <div className="title-projects-line bg-second"></div>
            <div className="m-2">
              <p className="mb-2">I was able to implement all of this:</p>
              <div>
                <p>
                  <strong>Portfolio-Website:</strong>I created a portfolio
                  website.
                </p>
              </div>
            </div>
            <div
              className="btn-2 bg-btn-back text-white mt-2 flex justify-center items-center text-center"
              onClick={() => handleFlip("apps")}
            >
              <p>Return</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
