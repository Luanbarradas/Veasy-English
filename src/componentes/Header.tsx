import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo_principal.svg";
import { useScroll } from "../hook/useScroll";
import "../styles/header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = useScroll();

  return (
    <>
      <header id="home" className="header">
        <div className="container-header">
          <img src={logo} alt="Veasy English Logo" className="logo" />
          <nav className="nav-desktop">
            <a className="nav-link" onClick={() => scrollToSection("about")}>
              Sobre
            </a>
            <a
              className="nav-link"
              onClick={() => scrollToSection("plain-section")}
            >
              Planos
            </a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="nav-mobile">
            <a
              className="nav-mobile-link"
              onClick={() => scrollToSection("about")}
            >
              Sobre
            </a>
            <a
              className="nav-mobile-link"
              onClick={() => scrollToSection("plain-section")}
            >
              Planos
            </a>
          </div>
        )}
      </header>
    </>
  );
};
