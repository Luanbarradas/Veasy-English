import hero from "../assets/hero.svg";
import "../styles/hero-section.css";

export const HeroSection = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans-section");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="hero-line">Bem-vindo ao</span>
          <span className="hero-line">Veasy English</span>
        </h1>
        <p className="hero-subtitle">
          Aprenda inglês de forma fácil e divertida
        </p>
        <button
          className="button-pattern hero-button"
          onClick={scrollToPlans}
          role="link"
        >
          Comece Agora
        </button>
      </div>
      <div className="hero-image-container">
        <img src={hero} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};
