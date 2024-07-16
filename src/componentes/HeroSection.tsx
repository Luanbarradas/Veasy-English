import hero from '../assets/hero.svg'

export const HeroSection = () => {
    return (
        <section className="h-[37.5rem] bg-cover bg-center flex flex-row justify-between items-center px-12 mt-16">
            <div className="text-left">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-purple-950">
                    Bem-vindo ao Veasy English
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-black mt-4">
                    Aprenda inglês de forma fácil e divertida
                </p>
                <a href="#"> <button className="mt-8 px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded hover:bg-orange-600 transition duration-300">
                    Comece Agora
                </button></a>
            </div>
            <div className="h-full w-1/2 flex justify-center">
                <img src={hero} alt="Hero" className="h-full object-contain" />
            </div>
        </section>
    )
}