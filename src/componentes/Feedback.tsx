import React from "react";
import "../styles/feedback.css";

const feedbacks = [
  {
    id: 1,
    name: "Cris Sapage",
    text: "Eu gosto muito das aulas de inglês com a Teacher. Ela me motiva a aprender e a pensar em inglês o tempo todo. As aulas são descontraídas, divertidas e dinâmicas.",
  },
  {
    id: 2,
    name: "Isabella Henz",
    text: "Quero agradecer à Professora pelas ótimas aulas de inglês. Desde que comecei, meu inglês melhorou muito! As aulas são super dinâmicas e divertidas, e a forma como explica tudo é muito clara. Sinto que meu inglês está finalmente a destravar e, com paciência e estudo, chegarei à fluência. Recomendo muito suas aulas para quem quer melhorar o inglês!",
  },
  {
    id: 3,
    name: "Ayana Monte",
    text: "Sua abordagem e dedicação excepcionais fizeram com que eu compreendesse e me interessasse pelo estudo do idioma. (...) Após anos tentando estudar o idioma sem sucesso, finalmente encontrei em você a orientação necessária para alcançar ótimos resultados. Agradeço por fazer do processo de aprendizagem algo divertido, estimulante e eficaz. Sua competência e comprometimento são verdadeiramente inspiradores.",
  },
];

export const Feedback: React.FC = () => {
  return (
    <>
      <section className="feedback-container">
        <div className="container">
          <h2>Feedbacks</h2>
          <div className="grid">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="testimonial moving-element">
                <p className="testimonial-text">"{feedback.text}"</p>
                <p className="name">{feedback.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
