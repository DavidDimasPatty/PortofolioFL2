import React, { useRef, useEffect, useState } from "react";
import "../assets/style/home.css"
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Top from "./Top";
import Slogan from "./Slogan";
import HowThisWorks from "./HowThisWorks";
import FAQ from "./FAQ";
import Services from "./Services";


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className={`wrapper-all ${isMenuOpen ? 'menuOpen' : ''}`}>
            <Header onCheckboxChange={handleCheckboxChange}
                onMenuOpen={toggleMenu}
                isMenuOpen={isMenuOpen} />
            <Top />
            <Slogan />
            <Services/>
            <HowThisWorks />
            <FAQ/>
            <Footer />
        </div>
    )
};

export default Home;