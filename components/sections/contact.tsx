export default function ContactSection() {
  return (
    <section id="contact" className="mt-10">
      <div>
        <h2 className="text-center text-4xl font-bold">Kontakt</h2>
      </div>
      <div className="flex justify-center items-center mt-10 pl-7 pr-7 flex-col">
        <div className="card-body-contact text-center flex justify-center items-center flex-col">
          <div>
            <h2 className="font-bold text-base">Aktueller Arbeitsort</h2>
          </div>
          <div
            className="flex justify-center items-center mt-5"
            style={{ width: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.345366273858!2d7.470208374222856!3d46.975601671081066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3a00d329ec5b%3A0x523f3d7992284a57!2sBusiness%20Park%2C%20Ittigen%20Business%20Park%2C%20Ey%2010%2C%203063%20Ittigen!5e1!3m2!1sde!2sch!4v1780560104359!5m2!1sde!2sch"
              width="100%"
              height="200px"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="card-body-contact flex justify-center items-center flex-col mt-10">
          <div>
            <h2 className="font-bold text-base text-center">Kontaktdaten</h2>
          </div>
          <div className="text-field flex justify-start items-start mt-5 flex-col">
            <div className="flex-row gap-4">
              <div>
                <img
                  src="/ausweis.png"
                  alt="Person Icon"
                  className="contact-icon"
                />
              </div>
              <div>
                <p>Luka Jevremovic</p>
              </div>
            </div>
            <div className="flex-row gap-4 mt-2">
              <div>
                <img
                  src="/anruf.png"
                  alt="Telefon Icon"
                  className="contact-icon"
                />
              </div>
              <div>
                <p>079 412 94 62</p>
              </div>
            </div>
            <div className="flex-row gap-4 mt-2">
              <div>
                <img src="/mail.png" alt="Mail Icon" className="contact-icon" />
              </div>
              <div>
                <a href="mailto:luka.jevremovic@swisscom.com">
                  luka.jevremovic@swisscom.com
                </a>
              </div>
            </div>
            <div className="flex-row gap-4 mt-2">
              <div>
                <img
                  src="/biografie.png"
                  alt="Computer Icon Intranet Swisscom"
                  className="contact-icon"
                />
              </div>
              <div>
                <a
                  href="https://neli.swisscom.com/profile/%5Bme%5D/detail"
                  target="_blank"
                >
                  Intranet
                </a>
              </div>
            </div>
            <div className="flex-row gap-4 mt-2">
              <div>
                <img
                  src="/linkedin.png"
                  alt="LinkedIn Icon"
                  className="contact-icon"
                />
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/luka-jevremovic-3994a5379/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body-contact flex justify-center items-center flex-col mt-10">
          <div>
            <h2 className="font-bold text-base text-center">
              Rand Informationen
            </h2>
          </div>
          <div className="text-field flex justify-start items-start mt-5 flex-col">
            <div className="flex-row gap-4">
              <div>
                <p>LB: Martin Näf</p>
              </div>
            </div>
            <div className="flex-row gap-4 mt-2">
              <div>
                <p>Host: Petre Tudor</p>
              </div>
            </div>
            <div className="flex-row gap-4 mt-2">
              <div>
                <p>Schultage: Montag, Dienstag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-10">
        <div className="text-center btn">
          <a
            href="./Lebenslauf_Luka_Jevremovic.pdf"
            target="_blank"
            id="button-lebenslauf"
          >
            Lebenslauf Herunterladen
          </a>
        </div>

        <div className="pfeil-rechts">
          <a href="#Navigation">
            <img src="/pfeil-nach-oben.png" alt="Nach Oben" />
          </a>
        </div>
      </footer>
    </section>
  );
}
