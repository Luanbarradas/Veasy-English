import perfil from "../assets/fotos-fofas-para-perfil-1678633942-scaled.jpeg"
export const Main = () => {
    return (
        <section className="h-72 bg-cover bg-center flex flex-row justify-between items-center px-12 mt-16 bg-orange-500 ">
            <div className="h-full w-1/2 justify-center">
                <div className="h-full flex items-center py-4">
                    <img src={perfil} alt="perfil" className="h-full object-contain rounded-3xl border-8" />
                </div>
            </div>
            <div className="text-left w-1/2 ">
                <h1 className="text-purple-950 text-lg font-bold text-3xl md:text-4xl ">
                    Sobre Mim!
                </h1>
                <h2 className="mt-8 text-white font-bold">Praesent luctus ligula sed blandit tincidunt. Pellentesque non suscipit.</h2>
                <p className="text-white mt-8 font-semibold">Proin quis dui et orci mattis hendrerit. Duis ut scelerisque odio, ac fermentum nibh. Ut porttitor auctor porta. Vivamus accumsan nisl sit amet nulla imperdiet congue. Proin finibus tempus leo vel luctus. Maecenas pulvinar felis urna, vitae pulvinar orci blandit vitae. Vivamus sit amet velit in velit auctor rhoncus sed a arcu.</p>

                <div className="flex space-x-8 mt-8" >

                    <div className="flex items-center space-x-2">
                        <p className="text-lg font-semibold text-purple-950">2</p>
                        <p className="text-white">Years Of
                            Experience</p>
                    </div>


                    <div className="flex items-center space-x-2">
                        <p className="text-lg font-semibold text-purple-950">150</p>
                        <p className="text-white">Trusted By Clients</p>
                    </div>
                </div>
            </div>


        </section >
    )
}

