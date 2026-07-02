"use client";

import { Trans } from "@lingui/react/macro";

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
        <h2 className="text-center text-4xl font-bold">
          <Trans>Über mich</Trans>
        </h2>
      </div>
      <div className="pl-7 pr-7 xl:grid xl:grid-cols-8">
        <div className="card-body bg-card-bg-white mt-10 xl:col-span-3 xl:col-start-2 xl:row-start-1 md:mt-15">
          <p className="p-2 text-center">
            <Trans>
              Hey! Ich bin <strong>Luka Jevremovic</strong>, geboren im Jahr
              2010, und habe eine grosse Leidenschaft für Computer, Technik,
              Naturwissenschaften, Programmieren und Mathematik, weshalb ich
              meine Zukunft in der Informatik sehe. Ich habe mich für den{" "}
              <strong>Beruf Informatiker Applikationsentwicklung</strong>{" "}
              entschieden, weil ich eigene{" "}
              <strong>Softwarelösungen entwickeln</strong> möchte und es
              spannend finde, wie aus einer Idee Schritt für Schritt eine
              funktionierende Anwendung entsteht. Mit dieser Website zeige ich,{" "}
              <strong>welche Fähigkeiten ich bereits aufgebaut habe</strong>,
              und teile meine Leidenschaft für die Informatik. Ich zeichne mich
              durch Ehrlichkeit, Teamfähigkeit, Sorgfalt und eine konzentrierte
              Arbeitsweise aus. Mein <strong>Traum</strong> ist es, ein Studium
              in <strong>Wirtschaftsinformatik oder Cybersecurity</strong> zu
              absolvieren.
            </Trans>
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
              <Trans>
                In meiner <strong>Freizeit</strong> verbringe ich viel Zeit{" "}
                <strong>draussen mit Freunden</strong> und bin gerne aktiv.
                Besonders mag ich das{" "}
                <strong>Tanzen serbischer Volkstänze</strong>, da es mir Spass
                macht und mir hilft,{" "}
                <strong>meine Kultur zu pflegen und Freundschaften</strong>{" "}
                aufzubauen. Zusätzlich spiele ich{" "}
                <strong>gerne Basketball.</strong>
              </Trans>
            </p>
            <button
              className="btn bg-second text-white hover:bg-btn-hover mt-2 flex justify-center items-center text-center"
              onClick={() => handleFlip("hobby")}
            >
              <Trans>Mehr anzeigen</Trans>
            </button>
          </div>
          <div className="back-card-about bg-card-bg-white xl:h-auto p-5 xl:p-3">
            <h2 className="p-2 text-center font-medium text-xl">
              <Trans>Videos</Trans>
            </h2>
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
              <Trans>zurück</Trans>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
