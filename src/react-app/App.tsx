import yogaLogo from "./assets/yoga.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={yogaLogo} className="logo" alt="Kobiety w drodze logo" />
        <h1 className="title">Kobiety w drodze</h1>
        <p className="tagline">Benvenuti nel viaggio verso la serenità</p>
        <a className="cta-button" href="#contact">Dołącz do nas</a>
      </header>
      <section className="features">
        <h2>Nasza Oferta</h2>
        <ul>
          <li>Warsztaty holistyczne</li>
          <li>Natura e tranquillità</li>
          <li>Esperienza e passione</li>
        </ul>
      </section>
      <footer id="contact" className="footer">
        <p>
          Kontakt:
          <a href="mailto:info@kobietywdrodze.pl">info@kobietywdrodze.pl</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
