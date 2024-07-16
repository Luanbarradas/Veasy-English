import logo from '../assets/logo_principal.svg'

export const Header = () => {
    return (
        <header className="bg-orange-500">

            <section className="mx-24 flex justify-between items-center ">
                <div className="flex items-center ">
                    <img src={logo} alt="logo" className='w-28 p-3 object-contain ' />
                </div>

                <ul className='flex text-purple-950 space-x-7 '>
                    <li className='ml-7 transition duration-300 ease-in-out text-lg hover:cursor-pointer hover:text-white '>Home</li>
                    <li className='ml-7 transition duration-300 ease-in-out text-lg hover:cursor-pointer hover:text-white'>Sobre</li>
                    <li className='ml-7 transition duration-300 ease-in-out text-lg hover:cursor-pointer hover:text-white'>Planos</li>
                </ul>
            </section>
        </header>
    )
}