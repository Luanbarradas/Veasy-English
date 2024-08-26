import { Header } from "./componentes/Header";
import { HeroSection } from "./componentes/HeroSection.tsx";
import { Plano } from "./componentes/Planos.tsx";
import { Footer } from "./componentes/Footer.tsx";
import { Main } from './componentes/Main.tsx';
import "./index.css";
import './App.tsx'

function App() {
  return (
    <div id="global" className="bg-purple-100 min-h-screen ">
      <Header />

      <HeroSection />

      <Main />

      <Plano />

      <Footer />

    </div>
  );
}

export default App;
