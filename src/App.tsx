import { Header } from "./componentes/Header";
import { HeroSection } from "./componentes/HeroSection.tsx";
import { Plano } from "./componentes/Planos.tsx";
import { Footer } from "./componentes/Footer.tsx";

//import { Main } from './componentes/Main.tsx';
import "./App.tsx";

function App() {
  return (
    <div className="bg-purple-100 min-h-screen">
      <Header />

      <HeroSection />

      <Plano />

      <Footer />
    </div>
  );
}

export default App;
