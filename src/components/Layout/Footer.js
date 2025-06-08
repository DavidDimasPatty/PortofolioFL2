import React, { useRef, useEffect, useState } from "react";
import "../../assets/style/footer.css";
import logoPT from "../../assets/image/footerLogo.png"
import Marquee from "react-fast-marquee";
import waLogo from "../../assets/image/whatsapp.png"
import fbLogo from "../../assets/image/facebook.png"
import igLogo from "../../assets/image/instagramm.png"
import { motion } from "framer-motion";
const Footer = ({ changeLanguage }) => {
    const [isHoverVision, setIsHoverVision] = useState(false);
    const [isHoverMission, setisHoverMission] = useState(false);
    const phoneNumber = "62859106795228";
    const defaultMessage = "Halo, saya ingin kosultasi.";
    const hoverVision = () => {
        setIsHoverVision(true);
        setisHoverMission(false);
    }

    const hoverMission = () => {
        setIsHoverVision(false);
        setisHoverMission(true);
    }


    const resetHover = () => {
        setIsHoverVision(false);
        setisHoverMission(false);
    }

    const openWhatsApp = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}` // Aplikasi WhatsApp
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`; // WhatsApp Web

        window.open(url, "_blank");
    };

    return (
        <div className="footer" id="footer">
            <div className="contentFooter">
                <div className="col-12 col-md-5 d-flex  pb-2 box1Footer">
                    <div className="row w-100">
                        <div className="row secureTittle">
                            <h3>{changeLanguage ? "INGIN KEAMANAN?" : "WANT TO BE SECURE?"} <hr /></h3>

                        </div>
                        <div className="col-12 d-flex justify-content-start buttonFooterBot">
                            <motion.button onClick={() => { window.location.href = "#ourPlan" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >{changeLanguage ? "Paket Kami" : "Our Plan"}</motion.button>
                            <motion.button onClick={() => { window.location.href = "#faq" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}>FAQ</motion.button>
                            <motion.button onClick={() => { window.location.href = "#howWorks" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}>{changeLanguage ? "Bagaimana" : "HOW"}</motion.button>
                        </div>
                        <div className="row wrapImgFooter">
                            <img src={logoPT} className="imgFooter"></img>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center wrapperVisionMission box2Footer">
                    <div className={`mb-4 ourVisionHidden ${isHoverVision ? `visible` : ''}`}>
                        <h6 className="titelOurVisionHidden">{changeLanguage ? "Visi Kami" : "Our Vision"}</h6>
                        <div className="textVisionHidden">
                            {changeLanguage
                                ? "Menjadi pelopor dalam pengembangan solusi teknologi yang aman, inovatif, dan berkelanjutan di tingkat Nasional maupun Global, dengan menjunjung tinggi integritas, kepercayaan, serta tanggung jawab sosial sebagai landasan utama dalam membentuk ekosistem digital yang terpercaya dan berdampak positif bagi bangsa dan negara."
                                : "To become a pioneer in developing secure, innovative, and sustainable technology solutions at both national and global levels, upholding integrity, trust, and social responsibility as the fundamental principles in building a trusted digital ecosystem that positively impacts the nation and country."
                            }
                        </div>

                    </div>
                    <div className={`mb-4 ourMissionHidden ${isHoverMission ? `visible` : ''}`}>
                        <h6 className="titelOurMissionHidden">{changeLanguage ? "Misi Kami" : "Our Mission"}</h6>
                        <div className="textMissionHidden">
                            {changeLanguage ? (
                                <>
                                    <ul>
                                        <li>Menjadikan Keamanan sebagai Pilar Utama dalam Setiap Inovasi.</li>
                                        <li>Mendorong Inovasi yang Relevan dan Bertanggung Jawab.</li>
                                        <li>Mengubah Ide Besar Menjadi Solusi Melalui Teknologi dan Kolaborasi.</li>
                                        <li>Menjunjung Tinggi Integritas dan Etika Profesional.</li>
                                        <li>Membangun Ekosistem Digital yang Tangguh, Adaptif, dan Terpercaya.</li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <ul>
                                        <li>Making Security the Main Pillar in Every Innovation.</li>
                                        <li>Driving Relevant and Responsible Innovation.</li>
                                        <li>Transforming Big Ideas into Solutions Through Technology and Collaboration.</li>
                                        <li>Upholding Integrity and Professional Ethics.</li>
                                        <li>Building a Resilient, Adaptive, and Trusted Digital Ecosystem.</li>
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-2 d-flex box3Footer">
                    <div className="row aboutUsWrapFooter">
                        <div className="row mb-4">
                            <h6 className="aboutUsFooter">{changeLanguage ? "Tentang Kami" : "About Us"}</h6>
                            <h6 onMouseEnter={hoverVision}
                                onMouseLeave={resetHover}
                                onTouchStart={hoverVision}
                                onTouchEnd={resetHover}>{changeLanguage ? "Visi Kami" : "Our Vision"}</h6>
                            <h6 onMouseEnter={hoverMission}
                                onMouseLeave={resetHover}
                                onTouchStart={hoverMission}
                                onTouchEnd={resetHover}>{changeLanguage ? "Misi Kami" : "Our Mission"}</h6>
                        </div>

                        <div className="row mb-4 contactUsWrapFooter">
                            <h6 className="contactUsFooter">{changeLanguage ? "Kontak Kami" : "About Us"}</h6>
                            <h6>ikodora.official@gmail.com</h6>
                            <br />
                            <h6>Address</h6>
                            <h6>Jakarta - Indonesia</h6>
                        </div>

                        <div className="row mb-4 socialMediaWrapFooter">
                            <div className="col">
                                <h6 className="socialMediaFooter">{changeLanguage ? "Media Sosial" : "Social Media"}</h6>
                                <a href="https://www.instagram.com/ikodora.official/" target="_blank"><img src={igLogo} width={"30px"} className="mx-1" /></a>
                                {/* <img src={fbLogo} width={"30px"} className="mx-1" /> */}
                                <img src={waLogo} width={"30px"} className="mx-1" onClick={() =>openWhatsApp()} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footerEnd d-flex justify-content-center align-items-center">
                <div className="borderSpaceEnd d-flex justify-content-center align-items-center gap-3">
                    <Marquee speed={100} pauseOnHover={false} autoFill={true}>
                        <h2 className="moveText"> IKODORA </h2>
                    </Marquee>
                </div>
            </div>

        </div>
    );
}

export default Footer;