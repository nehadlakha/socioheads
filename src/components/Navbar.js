import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 200) setFix(true);
        else setFix(false);
    }

    window.addEventListener("scroll", setFixed);
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header className={fix ? 'navbar fixed' : 'navbar'}>
            {/* <h1 className="logo">Logo</h1> */}
            <img className="logo" src={require('../images/logo-removebg-preview.png')} />
            <nav ref={navRef}>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/Services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;