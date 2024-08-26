import logo from '../assets/logo_principal.svg';
import '../styles/style.css';

export const Header = () => {
    return (
        <header className="header">
            <section className="header-section">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="header-nav">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Sobre</li></a>
                    <a href="#"><li>Planos</li></a>
                </ul>
            </section>
        </header>
    );
};
