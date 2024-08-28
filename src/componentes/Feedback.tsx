import React, { useState } from "react";
import "../styles/feedback.css";

const feedbacks = [
  {
    name: "Isabella Henz",
    feedback:
      "Quero agradecer à Professora pelas ótimas aulas de inglês. Desde que comecei, meu inglês melhorou muito! As aulas são super dinâmicas e divertidas, e a forma como explica tudo é muito clara. Sinto que meu inglês está finalmente a destravar e, com paciência e estudo, chegarei à fluência. Recomendo muito suas aulas para quem quer melhorar o inglês!",
  },
  {
    name: "Cris Sapage",
    feedback:
      "Eu gosto muito das aulas de inglês com a Teacher. Ela me motiva a aprender e a pensar em inglês o tempo todo. As aulas são descontraídas, divertidas e dinâmicas.",
  },
  {
    name: "Ayana Monte",
    feedback:
      "Sua abordagem e dedicação excepcionais fizeram com que eu compreendesse e me interessasse pelo estudo do idioma. (...) Após anos tentando estudar o idioma sem sucesso, finalmente encontrei em você a orientação necessária para alcançar ótimos resultados. Agradeço por fazer do processo de aprendizagem algo divertido, estimulante e eficaz. Sua competência e comprometimento são verdadeiramente inspiradores.",
  },
];

export const Feedback: React.FC = () => {
  const [expandedFeedbacks, setExpandedFeedbacks] = useState<number[]>([]);

  const toggleFeedback = (index: number) => {
    setExpandedFeedbacks((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((i) => i !== index)
        : [...prevExpanded, index]
    );
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Customer Feedback</h2>
      {feedbacks.map((item, index) => (
        <div
          key={index}
          className={`feedback ${
            expandedFeedbacks.includes(index) ? "expanded" : ""
          }`}
          onClick={() => toggleFeedback(index)}
        >
          <h3>{item.name}</h3>
          <p>
            {expandedFeedbacks.includes(index)
              ? item.feedback
              : `${item.feedback.substring(0, 50)}...`}
          </p>
        </div>
      ))}
    </div>
  );
};
