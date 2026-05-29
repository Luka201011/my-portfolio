"client use";

const MainNav: React.FC = async () => {
  return (
    <>
      <div>
        <nav className="navbar-container" id="Navigation">
          <div className="">
            <div className="flex-row gap-4">
              <a href="index.html">
                <img src="/flagge.png" alt="Deutsch" className="flag-icon" />
              </a>
              <a href="index-englisch.html">
                <img
                  src="/vereinigtes-konigreich.png"
                  alt="Englisch"
                  className="flag-icon"
                />
              </a>
            </div>

            <button
              className="navbar-toggler burger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarLinks"
              aria-controls="navbarLinks"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="burger"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarLinks">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#Navigation">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#Titel-übermich">
                    Über mich
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#Titel-kompetenzen">
                    Kompetenzen
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#Titel-Projekte">
                    Projekte
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#Titel-Kontakt">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainNav;
