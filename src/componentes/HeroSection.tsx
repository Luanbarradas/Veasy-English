import hero from "../assets/hero.svg";
import { useScroll } from "../hook/useScroll";

import "../styles/hero-section.css";

export const HeroSection = () => {
  const scrollToSection = useScroll();

  return (
    <section className="hero-section">
      <div className="container-hero">
        <div className="text-content">
          <h1>Bem-vindo ao Veasy English</h1>
          <p>Aprenda inglês de forma fácil e divertida</p>
          <button
            className="button-pattern"
            onClick={() => scrollToSection("plain-section")}
          >
            Comece Agora
          </button>
        </div>
        <div className="image-content">
          <img src={hero} alt="Bem-vindo" />
        </div>
      </div>
    </section>
  );
};
