import planoIndividual from '../assets/aulaIndidual.jpg';
import planoGrupo from '../assets/aulaGrupo.jpg';
import conversacao from '../assets/conversacao.jpg';

const planos = [
    {
        title: 'Plano Individual',
        price: 'R$100/mês',
        image: planoIndividual,
    },
    {
        title: 'Plano em Grupo',
        price: 'R$200/mês',
        image: planoGrupo,
    },
    {
        title: 'Conversação',
        price: 'R$150/mês',
        image: conversacao,
    },
];


export const Plano: React.FC = () => {
    return (
        <section className="py-12 bg-purple-100">
            <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">Selecione um Plano</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                {planos.map((plano, index) => (
                    <div key={index} className="bg-purple-900 p-4 rounded-3xl shadow-md w-80 text-center">
                        <div className="relative">
                            <img src={plano.image} alt={plano.title} className="h-48 w-full object-cover mb-4 rounded-3xl overflow-hidden" />
                            <div className="absolute inset-0 rounded"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{plano.title}</h3>
                        <p className="text-lg font-bold mb-4 text-white">{plano.price}</p>
                        <label className="block mb-4">
                            <input type="radio" name="plano" className="hidden" />
                            <span className=" bg-orange-500 px-6 py-2 text-white text-base font-semibold rounded-full hover:bg-orange-700  transition duration-300 cursor-pointer">
                                Assine Já
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </section>

    );
};
