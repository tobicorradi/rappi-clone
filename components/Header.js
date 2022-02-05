import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className="bg-white p-5 grid">
            <div className="relative flex items-center h-8 cursor-pointer">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1200px-Rappi_logo.svg.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div>
                <form className="flex items-center bg-slate-50 px-4 py-2 rounded text-md">
                    <input
                        className="flex-grow bg-transparent focus:outline-none" 
                        type="text"
                        placeholder="Buscar en Rappi"
                    />
                    <SearchIcon className="h-10 text-white bg-red-500 p-2 rounded-lg cursor-pointer" />
                </form>
                <button className="flex items-center bg-green-400 text-white p-2 cursor-pointer rounded-lg px-3 font-bold">
                    <ShoppingCartIcon className="h-7 mr-2"/>
                    <span>0</span>
                </button>
                </div>
        </header>
    );
};

export default Header;
