import { Link } from "react-router-dom";
import { logo } from "../constants/assets";
import { navbarLinks } from "../constants";
import { MobileNavbar } from "../components/MobileNavbar";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <header className="fixed z-[1000] flex w-full items-center h-28">
                <div className="container flex h-full items-center justify-between">
                    <Link to={'/'} className="flex h-3/4 items-center gap-x-2">
                        <img src={logo} alt="logo" className="h-full max-h-14 max-w-14"/>
                        <p className="text-base font-semibold text-gray-90">Santhosh</p>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-4">
                            {navbarLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.path} className={`link`}>
                                        {link.label}                                
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link to={'/contact'} className="btn-primary hidden md:inline-flex">Contact</Link>
                    <button className="md:hidden text-gray-90 cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}>
                        <Menu />
                    </button>
                </div>
            </header>
            {toggleMenu && <MobileNavbar />}
        </>
    );
};

export default Header;
