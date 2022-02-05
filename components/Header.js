import Image from "next/image";
import { SearchIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className="bg-white px-3 py-2 flex items-center justify-between">
            <div className="flex items-center h-8">
                <MenuIcon className="mr-3 h-6 text-slate-500 cursor-pointer" />
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1200px-Rappi_logo.svg.png"
                    className="cursor-pointer"
                    width={84}
                    height={35}
                />
            </div>
            <form className="flex flex-1 items-center bg-slate-50 px-4 py-2 rounded text-md mx-7 max-w-xl">
                <input
                    className="flex-grow bg-transparent focus:outline-none" 
                    type="text"
                    placeholder="Buscar en Rappi"
                />
                <SearchIcon className="h-10 text-white bg-rappi-orange p-2 rounded-lg cursor-pointer" />
            </form>
            <div className="flex items-center">
                <button className="flex items-center bg-green-400 text-white p-2 cursor-pointer rounded-lg px-3 font-bold mr-5">
                    <ShoppingCartIcon className="h-7 mr-2"/>
                    <span>0</span>
                </button>
                <button className="text-green-400 font-bold">Ingreso</button>
            </div>
        </header>
    );
};

export default Header;
