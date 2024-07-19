import perfil from "../assets/fotos-fofas-para-perfil-1678633942-scaled.jpeg";
import "../styles/sobre.css";

export const Main = () => {
  return (
    <section className="main-section">
      <div className="main-image-container">
        <div className="main-image-wrapper">
          <img src={perfil} alt="perfil" className="main-image" />
        </div>
      </div>
      <div className="main-text">
        <h1 className="main-title">Sobre Mim!</h1>
        <h2 className="main-subtitle">
          Praesent luctus ligula sed blandit tincidunt. Pellentesque non
          suscipit.
        </h2>
        <p className="main-description">
          Proin quis dui et orci mattis hendrerit. Duis ut scelerisque odio, ac
          fermentum nibh. Ut porttitor auctor porta. Vivamus accumsan nisl sit
          amet nulla imperdiet congue. Proin finibus tempus leo vel luctus.
          Maecenas pulvinar felis urna, vitae pulvinar orci blandit vitae.
          Vivamus sit amet velit in velit auctor rhoncus sed a arcu.
        </p>

        <div className="main-stats">
          <div className="main-stat">
            <p className="main-stat-number">2</p>
            <p className="main-stat-text">Years Of Experience</p>
          </div>
          <div className="main-stat">
            <p className="main-stat-number">150</p>
            <p className="main-stat-text">Trusted By Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};
