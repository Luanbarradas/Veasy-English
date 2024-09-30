import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useScroll } from "../hook/useScroll";

import "../styles/footer.css";

export const Footer: React.FC = () => {
  const scrollToSection = useScroll();

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5591991941999";
    const message = "Olá, gostaria de mais informações sobre os cursos";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleInstagramClick = () => {
    const username = "veasy_english";
    window.open(`https://www.instagram.com/${username}/`, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Veasy English</h3>
          <p>Tornando o aprendizado de inglês fácil e acessível para todos.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>Sobre</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("plain-section")}>Planos</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Fale conosco</h3>
          <div className="social-icons">
            <a onClick={handleWhatsAppClick}>
              <FaWhatsapp size={24} />
            </a>
            <a onClick={handleInstagramClick}>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Veasy English. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
