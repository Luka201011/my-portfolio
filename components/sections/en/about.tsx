"use client";
import { useState } from "react";
export default function AboutSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (cardId: string) => {
    if (activeCard === cardId) setActiveCard(null);
    else setActiveCard(cardId);
  };

  return (
    <section id="about" className="mt-10 lg:mt-45">
      <div>
        <h2 className="text-center text-4xl font-bold">About me</h2>
      </div>
      <div className="pl-7 pr-7 xl:grid xl:grid-cols-8">
        <div className="card-body bg-card-bg-white mt-10 xl:col-span-3 xl:col-start-2 xl:row-start-1 md:mt-15">
          <p className="p-2 text-center">
            Hey! I'm <strong>Luka Jevremovic</strong>, born in 2010, and I have
            a great passion for computers, technology, science, programming, and
            mathematics, which is why I see my future in computer science. I
            decided to pursue the{" "}
            <strong>profession of IT application development</strong> because I
            want to <strong>create my own software solutions</strong> and find
            it fascinating how an idea gradually turns into a fully functional
            application. With this website, I want to show{" "}
            <strong>the skills I have already developed</strong> and share my
            passion for computer science. I consider myself honest, a team
            player, careful, and focused in my work. My <strong>dream</strong>{" "}
            is to study <strong>business informatics or cybersecurity</strong>.
          </p>
        </div>

        {/*
        <div className="mt-15 flex justify-center items-center xl:col-start-4 xl:col-span-2 xl:row-start-2">
          <img
            src="/klein-profilbild.jpg"
            alt="Portrait"
            className="aboutimg"
          />
        </div>
        */}

        <div
          className={`card-body-about mt-15 min-h-[450px] xl:min-h-[290px] xl:col-span-3 xl:col-end-8 xl:row-start-3 md:min-h-[290px] ${activeCard === "hobby" ? "flipped" : ""}`}
        >
          <div className="front-card-about bg-card-bg-white p-5">
            <p className="p-2 text-center">
              In my <strong>free time</strong>, I spend a lot of time{" "}
              <strong>outdoors with friends</strong> and enjoy being active. I
              especially like <strong>dancing Serbian folk dances</strong>,
              because it’s fun and helps me{" "}
              <strong>
                stay connected to my culture and build friendships
              </strong>
              . Additionally, I <strong>enjoy playing basketball.</strong>
            </p>
            <button
              className="btn bg-second text-white hover:bg-btn-hover mt-2 flex justify-center items-center text-center"
              onClick={() => handleFlip("hobby")}
            >
              View more
            </button>
          </div>
          <div className="back-card-about bg-card-bg-white xl:h-auto p-5 xl:p-3">
            <h2 className="p-2 text-center font-medium text-xl">videos</h2>
            <div className=" flex flex-col gap-5 2xl:gap-12 xl:flex-row xl:gap-5 md:gap-10 md:flex-row">
              <div>
                <iframe
                  width="250"
                  height="auto"
                  src="https://www.youtube.com/embed/qRlQnEmyBHs?si=6k8_U5SEKhohkhjv"
                  title="YouTube video von Auftritt 'Kumanovo'"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  width="250"
                  height="auto"
                  src="https://www.youtube.com/embed/928UoWsOTuk?si=3WLSMy9FI74cn0K4"
                  title="YouTube video von Auftritt 'Kobisnica'"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <button
              className="btn-2 bg-btn-back text-white mt-6 flex justify-center items-center text-center"
              onClick={() => handleFlip("hobby")}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
