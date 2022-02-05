
import { LocationMarkerIcon } from "@heroicons/react/solid";
const Banner = () => {
    return (
        <section className='search-banner bg-rappi-orange text-white text-center h-80 flex flex-col items-center justify-center px-7'>
            <h1 className="text-4xl md:text-5xl font-thin mb-10">Si tienes <strong className="font-black">Rappi,</strong> tienes Todo.</h1>
            <form className="text-slate-400 text-lg p-4 bg-white rounded-sm w-full text-left shadow-2xl md:max-w-lg flex items-center mb-8">
                <LocationMarkerIcon className="h-6 mr-4"/>
                <input className="w-full focus:outline-none" type="text" placeholder="¿Dónde querés recibir tu compra?"/>
            </form>
            <button className="flex items-center hover:text-rose-200 text-sm">
                <LocationMarkerIcon className="h-6 mr-2"/>
                Usá tu ubicación actual
            </button>
        </section>
    );
};

export default Banner;
