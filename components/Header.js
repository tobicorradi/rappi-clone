import Image from "next/image";
import logo from '../public/images/logo.png'

const Header = () => {
    return (
        <header className="bg-white p-5">
            <div className="relative flex items-center h-8 cursor-pointer">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1200px-Rappi_logo.svg.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
        </header>
    );
};

export default Header;
