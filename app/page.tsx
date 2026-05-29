export default function Home() {
  return (
    <>
      <div id="home">
        <div className="">
          <div className="flex-col">
            <h1 className="Homeh1 center marginT-6">Luka Jevremovic</h1>
            <h2 className="Homeh2 center">Informatiker</h2>
          </div>
          <div className="center marginT-6">
            <img
              src="/klein-profilbild.jpg"
              className="Homeimg center"
              alt="portrait"
            />
          </div>
          <div className="flex-col center marginT-6">
            <h2 className="Homeh2">Applikationsentwickler</h2>
            <h1 className="Homeh1">1. Lehrjahr</h1>
          </div>
        </div>
        <div className="center marginT-6 padding-3 center-Text">
          <p>
            Ich bin im ersten Lehrjahr als Applikationsentwickler bei Swisscom
            tätig. Es freut mich, dass du auf meine Website bist und wünsche dir
            viel Spass beim Lesen.
          </p>
        </div>
      </div>
    </>
  );
}
