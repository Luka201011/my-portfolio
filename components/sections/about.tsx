export default function AboutSection() {
  return (
    <section id="about" className="marginT-4">
      <div>
        <h2 className="center-Text title">Über mich</h2>
      </div>
      <div className="paddingL-3 paddingR-3">
        <div className="card-body marginT-4">
          <p className="padding-1 center-Text">
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
        <div className="card-body marginT-6">
          <p className="padding-1 center-Text">
            In meiner <strong>Freizeit</strong> verbringe ich viel Zeit{" "}
            <strong>draussen mit Freunden</strong> und bin gerne aktiv.
            Besonders mag ich das <strong>Tanzen serbischer Volkstänze</strong>,
            da es mir Spass macht und mir hilft,{" "}
            <strong>meine Kultur zu pflegen und Freundschaften</strong>{" "}
            aufzubauen. Zusätzlich spiele ich <strong>gerne Basketball.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
