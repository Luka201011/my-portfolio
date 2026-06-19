"use client";
import { useState } from "react";
export default function AboutSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (cardId: string) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };
  return (
    <section id="about" className="mt-10 lg:mt-45">
      <div>
        <h2 className="text-center text-4xl font-bold">Über mich</h2>
      </div>
      <div className="pl-7 pr-7 xl:grid xl:grid-cols-8">
        <div className="card-body mt-10 xl:col-span-3 xl:col-start-2 xl:row-start-1">
          <p className="p-2 text-center">
            Hey! Ich bin <strong>Luka Jevremovic</strong>, geboren im Jahr 2010,
            und habe eine grosse Leidenschaft für Computer, Technik,
            Naturwissenschaften, Programmieren und Mathematik, weshalb ich meine
            Zukunft in der Informatik sehe. Ich habe mich für den{" "}
            <strong>Beruf Informatiker Applikationsentwicklung</strong>{" "}
            entschieden, weil ich eigene{" "}
            <strong>Softwarelösungen entwickeln</strong> möchte und es spannend
            finde, wie aus einer Idee Schritt für Schritt eine funktionierende
            Anwendung entsteht. Mit dieser Website zeige ich,{" "}
            <strong>welche Fähigkeiten ich bereits aufgebaut habe</strong>, und
            teile meine Leidenschaft für die Informatik. Ich zeichne mich durch
            Ehrlichkeit, Teamfähigkeit, Sorgfalt und eine konzentrierte
            Arbeitsweise aus. Mein <strong>Traum</strong> ist es, ein Studium in{" "}
            <strong>Wirtschaftsinformatik oder Cybersecurity</strong> zu
            absolvieren.
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
          className={`card-body-about mt-15 min-h-[450px] xl:min-h-[290px] xl:col-span-3 xl:col-end-8 xl:row-start-3 ${activeCard === "hobby" ? "flipped" : ""}`}
        >
          <div className="front-card-about p-5">
            <p className="p-2 text-center">
              In meiner <strong>Freizeit</strong> verbringe ich viel Zeit{" "}
              <strong>draussen mit Freunden</strong> und bin gerne aktiv.
              Besonders mag ich das{" "}
              <strong>Tanzen serbischer Volkstänze</strong>, da es mir Spass
              macht und mir hilft,{" "}
              <strong>meine Kultur zu pflegen und Freundschaften</strong>{" "}
              aufzubauen. Zusätzlich spiele ich{" "}
              <strong>gerne Basketball.</strong>
            </p>
            <div
              className="btn mt-2 flex justify-center items-center text-center"
              onClick={() => handleFlip("hobby")}
            >
              <p>Mehr anzeigen</p>
            </div>
          </div>
          <div className="back-card-about xl:h-auto p-5 xl:p-3">
            <h2 className="p-2 text-center font-medium text-xl">videos</h2>
            <div className=" flex flex-col xl:flex-row gap-3">
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
            <div
              className="btn-2 mt-2 flex justify-center items-center text-center"
              onClick={() => handleFlip("hobby")}
            >
              <p>zurück</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
