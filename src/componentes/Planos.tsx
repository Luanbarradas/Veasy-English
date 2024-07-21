import planoIndividual from "../assets/aulaIndidual.jpg";
import planoGrupo from "../assets/aulaGrupo.jpg";
import conversacao from "../assets/conversacao.jpg";
import "../styles/plano.css";

const planos = [
  {
    title: "Plano Individual",
    price: "R$100/mês",
    image: planoIndividual,
  },
  {
    title: "Plano em Grupo",
    price: "R$200/mês",
    image: planoGrupo,
  },
  {
    title: "Conversação",
    price: "R$150/mês",
    image: conversacao,
  },
];

export const Plano = () => {
  return (
    <section className="plano-section">
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
                <input type="radio" name="plano" className="hidden" />
                <span className="button-pattern">Assine Já</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
