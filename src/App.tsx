import "./index.css";
import "./App.tsx";
import { Feedback } from "./componentes/Feedback.tsx";
import { Header } from "./componentes/Header.tsx";
import { Footer } from "./componentes/Footer.tsx";
import { HeroSection } from "./componentes/HeroSection.tsx";
import { About } from "./componentes/About.tsx";
import { Plain } from "./componentes/Plain.tsx";

function App() {
  return (
    <div>
      <Header />

      <HeroSection />

      <About />

      <Plain />

      <Feedback />

      <Footer />
    </div>
  );
}

export default App;
