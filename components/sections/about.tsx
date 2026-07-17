"use client";

import { Trans } from "@lingui/react/macro";
import { useState } from "react";
import Image from "next/image";

import romImage from "../../public/Bild_rom.png";
import folklorImage from "../../public/Folklor.png";

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (cardId: string) => {
    if (activeCard === cardId) setActiveCard(null);
    else setActiveCard(cardId);
  };

  return (
    <section id="about" className="mt-10 lg:mt-44">
      <div>
        <h2 className="text-center text-4xl p-4 font-bold">
          <Trans>Über mich</Trans>
        </h2>
      </div>
      <div className="pl-7 pr-7 gap-6 md:grid md:grid-cols-12 xl:grid xl:grid-cols-10">
        <div className="card-body bg-card-bg-white mt-5 md:mt-10 md:col-span-8 md:row-start-1 xl:col-span-4 xl:col-start-2 xl:row-start-1">
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

        <div className="mt-5 md:mt-10 md:col-span-4 md:row-start-1 xl:col-span-2 xl:col-start-7 xl:row-start-1 flex justify-center items-center">
          <Image
            src={romImage}
            alt="Portrait in Rom"
            className="rounded-xl w-full md:w-52 h-auto object-cover"
          />
        </div>

        <div className="md:col-span-4 md:row-start-2 xl:col-span-2 xl:col-start-3 xl:row-start-3 flex justify-center items-center">
          <Image
            src={folklorImage}
            alt="Traditionelle Kleidung"
            className="rounded-xl w-full md:w-52 h-auto object-cover"
          />
        </div>

        <div
          className={`card-body-about min-h-[450px] md:min-h-[290px] md:col-span-8 md:row-start-2 xl:min-h-[290px] xl:col-span-4 xl:col-end-10 xl:row-start-3 ${activeCard === "hobby" ? "flipped" : ""}`}
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
              className="btn bg-second text-white mt-2 flex justify-center items-center text-center mx-auto transition-colors duration-200 hover:bg-btn-hover"
              onClick={() => handleFlip("hobby")}
            >
              <Trans>Mehr anzeigen</Trans>
            </button>
          </div>

          <div className="back-card-about bg-card-bg-white xl:h-auto p-5 xl:p-3">
            <h2 className="p-2 text-center font-medium text-xl">
              <Trans>Videos</Trans>
            </h2>
            <div className="flex flex-col gap-5 2xl:gap-12 xl:flex-row xl:gap-5 md:gap-10 md:flex-row justify-center items-center">
              <div>
                <iframe
                  width="250"
                  height="140"
                  src="https://www.youtube.com/embed/qRlQnEmyBHs?si=6k8_U5SEKhohkhjv"
                  title="YouTube video von Auftritt 'Kumanovo'"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  width="250"
                  height="140"
                  src="https://www.youtube.com/embed/928UoWsOTuk?si=3WLSMy9FI74cn0K4"
                  title="YouTube video von Auftritt 'Kobisnica'"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <button
              className="btn-2 bg-btn-back text-white mt-6 flex justify-center items-center text-center mx-auto"
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
