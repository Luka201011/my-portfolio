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
    <section id="about" className="marginT-4">
      <div>
        <h2 className="text-center title">Über mich</h2>
      </div>
      <div className="paddingL-3 paddingR-3">
        <div className="card-body marginT-4">
          <p className="padding-1 text-center">
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
        <div className="marginT-6 center">
          <img
            src="/klein-profilbild.jpg"
            alt="Portrait"
            className="aboutimg"
          />
        </div>
        <div
          className={`card-body-about marginT-6 ${activeCard === "hobby" ? "flipped" : ""}`}
        >
          <div className="front-card-about">
            <p className="padding-1 text-center">
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
              className="btn marginT-1 center text-center"
              onClick={() => handleFlip("hobby")}
            >
              <p>Mehr anzeigen</p>
            </div>
          </div>
          <div className="back-card-about">
            <h2 className="padding-1 text-center font-semibold text-xl">
              videos
            </h2>
            <div className="flex-col gap-3">
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
              className="btn-2 marginT-1 center text-center"
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
