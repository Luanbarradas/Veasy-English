import { useState } from "react";
import planoIndividual from "../assets/aulaIndidual.jpg";
import planoGrupo from "../assets/aulaGrupo.jpg";
import conversacao from "../assets/conversacao.jpg";
import theTalk from "../assets/thetalk.png";
import aulaindividual from "../assets/aulaindividualumasemana.png";
import aulaIndividualDuasSemanas from "../assets/aulaindividualdois.png";
import aulaInvidualTresSemanas from "../assets/aulaindidualtres.png";
import talk from "../assets/talkthetalk.png";

import "../styles/plano.css";

const planos = [
  {
    title: "Plano Individual",
    price: "R$189,00/mês",
    image: planoIndividual,
    modalImage: aulaindividual,
  },
  {
    title: "Plano individual 2x",
    price: "R$299,90/mês",
    image: planoGrupo,
    modalImage: aulaIndividualDuasSemanas,
  },
  {
    title: "Plano indivual 3x",
    price: "R$380,00/mês",
    image: conversacao,
    modalImage: aulaInvidualTresSemanas,
  },
  {
    title: "talk the talk",
    price: "R$159,90/mês",
    image: theTalk,
    modalImage: talk,
  },
];

export const Plano = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
    document.querySelector(".plano-section")?.classList.add("opacidade");
    document.querySelector(".header")?.classList.add("opacidade");
    document.querySelector(".hero-section")?.classList.add("opacidade");
    document.querySelector(".main-section")?.classList.add("opacidade");
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
    document.querySelector(".plano-section")?.classList.remove("opacidade");
    document.querySelector(".header")?.classList.remove("opacidade");
    document.querySelector(".hero-section")?.classList.remove("opacidade");
    document.querySelector(".main-section")?.classList.remove("opacidade");
  };

  return (
    <>
      <section id="plans-section" className="plano-section">
        <h2 className="plano-title">Selecione um Plano</h2>
        <div className="planos-container">
          {planos.map((plano, index) => (
            <div key={index} className="plano-card">
              <div className="plano-image-wrapper">
                <img
                  src={plano.image}
                  alt={plano.title}
                  className="plano-image"
                />
              </div>
              <div className="plano-card-botton">
                <h3 className="plano-title-card">{plano.title}</h3>
                <p className="plano-price">{plano.price}</p>
                <label className="plano-button-label">
                  <button
                    className="button-pattern"
                    onClick={() => openModal(plano.modalImage)}
                  >
                    Saiba mais
                  </button>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {currentImage && <img src={currentImage} alt="Plano Detalhe" />}
          </div>
        </div>
      )}
    </>
  );
};
