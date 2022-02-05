import Image from "next/image";
import logo from '../public/images/logo.png'

const Header = () => {
    return (
        <header>
            <Image src={logo} />
            Soy un header
        </header>
    );
};

export default Header;
