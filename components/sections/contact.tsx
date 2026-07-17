"use client";
import { useParams } from "next/navigation";
import { Trans } from "@lingui/react/macro";

export default function ContactSection() {
  const { locale } = useParams<{ locale: string }>();
  const cvFile =
    locale === "en"
      ? "./CV_from_Luka_Jevremovic.pdf"
      : "./Lebenslauf_Luka_Jevremovic.pdf";

  return (
    <section id="contact" className="mt-28 w-full">
      <div>
        <h2 className="text-center text-4xl p-4 font-bold mb-10 xl:mb-20">
          <Trans>Kontakt</Trans>
        </h2>
      </div>
      <div className="px-4 flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid xl:grid-cols-2 xl:gap-16 xl:items-stretch xl:ml-44 xl:mr-44">
        <div className="card-body-contact bg-bg-akcent border-solid border-4 border-card-border w-full text-center flex flex-col justify-between items-center p-6 md:col-span-2 xl:col-span-1">
          <div>
            <h2 className="font-bold text-base mb-4 text-lg">
              <Trans>Aktueller Arbeitsort</Trans>
            </h2>
          </div>
          <div className="w-full h-[300px] md:h-[400px] xl:h-full xl:flex-grow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.345366273858!2d7.470208374222856!3d46.975601671081066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3a00d329ec5b%3A0x523f3d7992284a57!2sBusiness%20Park%2C%20Ittigen%20Business%20Park%2C%20Ey%2010%2C%203063%20Ittigen!5e1!3m2!1sde!2sch!4v1780560104359!5m2!1sde!2sch"
              width="100%"
              height="100%"
              className="rounded-xl w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:grid md:grid-cols-2 md:col-span-2 xl:flex xl:flex-col xl:col-span-1 xl:justify-between">
          <div className="card-body-contact bg-bg-akcent border-solid border-4 border-card-border w-full flex flex-col justify-center items-center p-6 md:col-span-1">
            <div>
              <h2 className="font-bold text-base text-center mb-4 text-lg">
                <Trans>Kontaktdaten</Trans>
              </h2>
            </div>
            <div className="text-field bg-card-bg-white border-2 border-solid border-black w-full flex justify-start items-start flex-col p-4">
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/ausweis.png"
                  alt="Person Icon"
                  className="contact-icon w-6 h-6 object-contain"
                />
                <p>Luka Jevremovic</p>
              </div>
              <div className="flex items-center gap-4 mt-3 w-full">
                <img
                  src="/biografie.png"
                  alt="Computer Icon Intranet"
                  className="contact-icon w-6 h-6 object-contain"
                />
                <a
                  className="underline"
                  href="https://neli.swisscom.com/profile/%5Bme%5D/detail"
                  target="_blank"
                >
                  Intranet
                </a>
              </div>
              <div className="flex items-center gap-4 mt-3 w-full">
                <img
                  src="/linkedin.png"
                  alt="LinkedIn Icon"
                  className="contact-icon w-6 h-6 object-contain"
                />
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/luka-jevremovic-3994a5379/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="card-body-contact bg-bg-akcent border-solid border-4 border-card-border w-full flex flex-col justify-center items-center p-6 md:col-span-1">
            <div>
              <h2 className="font-bold text-base text-center mb-4 text-lg">
                <Trans>Rand Informationen</Trans>
              </h2>
            </div>
            <div className="text-field bg-card-bg-white border-2 border-solid border-black w-full flex justify-start items-start flex-col p-4">
              <div className="w-full">
                <p>
                  <strong>LB:</strong> Martin Näf
                </p>
              </div>
              <div className="mt-3 w-full">
                <p>
                  <Trans>
                    <strong>Aktuelles Projekt:</strong>
                  </Trans>{" "}
                  Team Halo
                </p>
              </div>
              <div className="mt-3 w-full">
                <p>
                  <Trans>
                    <strong>Schultage:</strong>
                  </Trans>{" "}
                  <Trans>Montag, Dienstag</Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer bg-bg-akcent mt-16 flex items-center justify-center">
        <div className="btn bg-second text-white hover:bg-btn-hover">
          <a href={cvFile} target="_blank" id="button-lebenslauf">
            <Trans>Lebenslauf Herunterladen</Trans>
          </a>
        </div>
        <div className="pfeil-rechts">
          <a href="#Navigation">
            <img src="/pfeil-oben.png" alt="Nach Oben" />
          </a>
        </div>
      </footer>
    </section>
  );
}
