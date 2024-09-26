import meet from "../assets/meet-hero-section.jpg";
import "../styles/about.css";

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src={meet}
            alt="Veasy English facilities"
            className="about-img"
          />
        </div>
        <div className="about-text">
          <h2 className="about-title">Descubra a Veasy English</h2>
          <p className="about-description">
            Onde ajudamos alunos com diversos objetivos, principalmente
            imigrantes, alcançarem a fluência em inglês através de uma
            metodologia comunicativa e interativa. Aprenda de forma prática e
            eficaz para atingir seus objetivos, seja para se integrar em um novo
            país ou para avançar em sua carreira.
          </p>
          <ul className="about-list">
            <li>Aulas online ao vivo</li>
            <li>Foco na comunicação</li>
            <li>Horários flexíveis</li>
            <li>Tudo no seu ritmo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
