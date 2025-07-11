import yogaLogo from "./assets/yoga.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={yogaLogo} className="logo" alt="Sunrise Yoga Logo" />
        <h1 className="title">Sunrise Yoga</h1>
        <p className="tagline">Find your inner peace</p>
        <a className="cta-button" href="#contact">Join us</a>
      </header>
      <section className="features">
        <h2>Our Studio</h2>
        <ul>
          <li>Classes for all levels</li>
          <li>Tranquil environment</li>
          <li>Experienced instructors</li>
        </ul>
      </section>
      <footer id="contact" className="footer">
        <p>
          Contact us:
          <a href="mailto:info@sunriseyoga.com">info@sunriseyoga.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
