import { Header } from './componentes/Header';
import { HeroSection } from './componentes/HeroSection.tsx'
import { Plano } from './componentes/Planos.tsx';

//import { Main } from './componentes/Main.tsx';
import './App.tsx'

function App() {


  return (
    <div className="bg-customBackground min-h-screen">
      <Header />

      <HeroSection />

      <Plano />
    </div>

  )
}

export default App
