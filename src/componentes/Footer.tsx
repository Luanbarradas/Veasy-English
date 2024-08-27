import instagramIcon from "../assets/instagram-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";

import "../styles/footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div>
          <h2 className="footer-title">Designer Awards 2022</h2>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus.
          </p>
          <p className="email">@blablabla.com</p>
        </div>
        <div>
          <ul className="footer-list">
            <li>Lore</li>
            <li>Ipsum</li>
            <li>Consectetur</li>
            <li>Duis rutrum</li>
          </ul>
          <div className="social-buttons">
            <button>
              <img src={instagramIcon} alt="Instagram" />
            </button>
            <button>
              <img src={emailIcon} alt="Email" />
            </button>
            <button>
              <img src={whatsappIcon} alt="WhatsApp" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
