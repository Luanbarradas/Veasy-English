import hero from "../assets/hero.svg";
import "../styles/hero-section.css";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">Bem-vindo ao Veasy English</h1>
        <p className="hero-subtitle">
          Aprenda inglês de forma fácil e divertida
        </p>
        <a href="#">
          <button className="button-pattern hero-button">Comece Agora</button>
        </a>
      </div>
      <div className="hero-image-container">
        <img src={hero} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};
