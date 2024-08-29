import { Header } from "./componentes/Header";
import { HeroSection } from "./componentes/HeroSection.tsx";
import { Plano } from "./componentes/Planos.tsx";
import { Footer } from "./componentes/Footer.tsx";
import { Main } from "./componentes/Main.tsx";
import "./index.css";
import "./App.tsx";
import { Feedback } from "./componentes/Feedback.tsx";

function App() {
  return (
    <div>
      <Header />

      <HeroSection />

      <Main />

      <Plano />

      <Feedback />

      <Footer />
    </div>
  );
}

export default App;
