import React, { useRef, useEffect, useState } from "react";
import "../../assets/style/header.css"
import logoPT from "../../assets/image/logoPT.png"

const Header = ({ onCheckboxChange, onMenuOpen, isMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = (event) => {
        onMenuOpen(!isMenuOpen);
    };

    const handleChange = (event) => {
        onCheckboxChange(event.target.checked);
    };

    const handleScroll = () => {
        const scrollThresholdInVh = 50;
        const thresholdInPx = (scrollThresholdInVh / 100) * window.innerHeight;
        if (window.scrollY > thresholdInPx) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
            <div className={`logo${isScrolled ? '-scrolled' : ' '} d-flex justify-content-center align-items-center`} id="logo">
                <img src={logoPT} width={"60px"} />
            </div>
            <button className={`burger-btn ${isScrolled ? `scrolled` : ''} ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                ☰
            </button>
            <button className={`close-btn ${isScrolled ? `scrolled` : ''}  ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                X
            </button>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#tentangKami" className={`${isScrolled ? 'scrolled' : ' '}`} onClick={() => onMenuOpen(false)}>
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#ourService" className={`${isScrolled ? 'scrolled' : ' '}`} onClick={() => onMenuOpen(false)}>
                            Layanan
                        </a>
                    </li>
                    <li>
                        <a href="#FAQ" className={`${isScrolled ? 'scrolled' : ' '}`} onClick={() => onMenuOpen(false)}>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <div className={`toggle-button-cover ${isScrolled ? 'scrolled ' : ' '}  ${isMenuOpen ? ' open ' : ' '}`} >
                            <div class="button-cover">
                                <div class="butSWitch" id="button-10">
                                    <input type="checkbox" class="checkbox" onChange={handleChange} />
                                    <div class="knobs">
                                        <span>EN</span>
                                    </div>
                                    <div class="layer"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li>
                        <button className={`${isScrolled ? 'getStarted scrolled ' : 'getStarted '} ${isMenuOpen ? 'open' : ''}`} onClick={() => { window.location.href = "#plan"; onMenuOpen(false); }}>Get Started</button>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}


export default Header;