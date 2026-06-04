export default function CompetencesSection() {
  return (
    <section id="competences" className="marginT-4">
      <div>
        <h2 className="center-Text title">Kompetenzen</h2>
      </div>
      <div className="center marginT-4 paddingL-3 paddingR-3 flex-col">
        <div className="card-body-competences center-Text flex-row center">
          <p className="text-competences">HTML</p>
          <img
            src="/klicken.png"
            alt="Hinweis das es anklickbar ist"
            className="klicken-icon"
          />
        </div>
        <div className="card-body-competences center-Text center marginT-4 ">
          <p className="text-competences">CSS</p>
        </div>
        <div className="card-body-competences center-Text center marginT-4">
          <p className="text-competences">JavaScript</p>
        </div>
        <div className="card-body-competences center-Text center marginT-4">
          <p className="text-competences">Angular</p>
        </div>
        <div className="card-body-competences center-Text center marginT-4">
          <p className="text-competences">TypeScript</p>
        </div>
        <div className="card-body-competences center-Text center marginT-4">
          <p className="text-competences">SDX</p>
        </div>
      </div>
    </section>
  );
}
