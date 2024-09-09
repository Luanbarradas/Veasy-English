import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

import "../styles/modal.css";

interface ModalData {
  title: string;
  benefits: string[];
  frequency: string;
  price: string;
}

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  modalData: ModalData;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, modalData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={closeModal}
          className="modal-close"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        <h2 id="modal-title" className="modal-title">
          {modalData.title}
        </h2>

        <ul className="modal-benefits">
          {modalData.benefits.map((benefit, index) => (
            <li key={index} className="modal-benefit-item">
              <FaCheck className="modal-benefit-icon" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <p className="modal-frequency">
          Frequência:{" "}
          <span className="modal-frequency-value">{modalData.frequency}</span>
        </p>

        <p className="modal-price">
          Preço: <span className="modal-price-value">{modalData.price}</span>
        </p>

        <button className="button-pattern" onClick={closeModal}>
          Tenho interesse
        </button>
      </div>
    </div>
  );
};

export default Modal;
