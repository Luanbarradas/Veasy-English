import { useState } from "react";
import planoIndividual from "../assets/aulaIndidual.jpg";
import planoGrupo from "../assets/aulaGrupo.jpg";
import conversacao from "../assets/conversacao.jpg";
import theTalk from "../assets/thetalk.png";
import Modal from "./Modal";
import "../styles/plain.css";

interface ModalData {
  title: string;
  benefits: string[];
  frequency: string;
  price: string;
}

const plains = [
  {
    title: "Plano Individual",
    price: "R$220,00/mês",
    image: planoIndividual,
    modalData: {
      title: "Aula Individual",
      benefits: [
        "Aulas online ao vivo",
        "Foco na comunicação",
        "Horários flexíveis",
        "Material exclusivo",
        "No seu ritmo",
        "Certificado",
      ],
      frequency: "1x na Semana",
      price: "R$220,00/mês",
      whatsappMessage:
        "Olá, estou interessado no Plano Individual uma vez por semana",
    } as ModalData,
  },
  {
    title: "Plano individual 2x",
    price: "R$350,00/mês",
    image: planoGrupo,
    modalData: {
      title: "Plano Individual 2x",
      benefits: [
        "Aulas online ao vivo",
        "Foco na comunicação",
        "Horários flexíveis",
        "Material exclusivo",
        "No seu ritmo",
        "Certificado",
      ],
      frequency: "2x na Semana",
      price: "R$350,00/mês",
      whatsappMessage:
        "Olá, estou interessado no Plano Individual duas vezes por semana",
    } as ModalData,
  },
  {
    title: "Plano indivual 3x",
    price: "R$440,00/mês",
    image: conversacao,
    modalData: {
      title: "Plano Individual 3x",
      benefits: [
        "Aulas online ao vivo",
        "Foco na comunicação",
        "Horários flexíveis",
        "Material exclusivo",
        "No seu ritmo",
        "Certificado",
      ],
      frequency: "3x na Semana",
      price: "R$440,00/mês",
      whatsappMessage:
        "Olá, estou interessado no Plano Individual três vezes por semana",
    } as ModalData,
  },
  {
    title: "Plano indivual 4x",
    price: "R$550,00/mês",
    image: conversacao,
    modalData: {
      title: "Plano Individual 4x",
      benefits: [
        "Aulas online ao vivo",
        "Foco na comunicação",
        "Horários flexíveis",
        "Material exclusivo",
        "No seu ritmo",
        "Certificado",
      ],
      frequency: "4x na Semana",
      price: "R$550,00/mês",
      whatsappMessage:
        "Olá, estou interessado no Plano Individual quatro vezes por semana",
    } as ModalData,
  },
  {
    title: "Talk the talk",
    price: "R$199,00/mês",
    image: theTalk,
    modalData: {
      title: "Talk the Talk",
      benefits: [
        "Aulas de conversação",
        "Material exclusivo",
        "Prática em grupo",
      ],
      frequency: "1x na Semana",
      price: "R$199,00/mês",
      whatsappMessage: "Olá, estou interessado no Plano Talk the Talk",
    } as ModalData,
  },
];

export const Plain = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (data: ModalData) => {
    setModalData(data);
    setIsOpen(true);
    document.querySelector(".plano-section")?.classList.add("opacidade");
    document.querySelector(".header")?.classList.add("opacidade");
    document.querySelector(".hero-section")?.classList.add("opacidade");
    document.querySelector(".main-section")?.classList.add("opacidade");
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
    document.querySelector(".plano-section")?.classList.remove("opacidade");
    document.querySelector(".header")?.classList.remove("opacidade");
    document.querySelector(".hero-section")?.classList.remove("opacidade");
    document.querySelector(".main-section")?.classList.remove("opacidade");
  };

  return (
    <>
      <section id="plain-section" className="plano-section">
        <h2 className="plano-title">Selecione um Plano</h2>
        <div className="planos-container">
          {plains.map((plano, index) => (
            <div key={index} className="plano-card moving-element">
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
                    onClick={() => openModal(plano.modalData)}
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
      {isOpen && modalData && (
        <Modal isOpen={isOpen} closeModal={closeModal} modalData={modalData} />
      )}
    </>
  );
};
