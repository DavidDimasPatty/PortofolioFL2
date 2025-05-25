import React from "react";
import "../assets/style/top.css"
import topLogo from "../assets/image/TopLogo.png"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Top = ({ changeLanguage }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    function sendEmail() {
        const email = "example@example.com";
        const subject = `Saya mau plan uji coba`;
        const body = `Halo, saya mau uji coba.`;
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    }

    return (
        <div className="wrapperTop d-flex justify-content-center align-items-center">
            <div className="row wrapperRowTop">
                <motion.div className="col-12 col-md-7  titleName"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
                    <img src={topLogo} className="imgTopLogo" />
                </motion.div>
                <motion.div className="topRight col-12 col-md-5"
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
                    <div className="buttonTopContentTitle">
                        <h2 className="typing">{changeLanguage ? "ADA YANG" : "HOW CAN"}</h2>
                        <h2 className="typing">{changeLanguage ? "BISA KAMI" : "WE HELP"}</h2>
                        <h2 className="typing">{changeLanguage ? "BANTU?" : "YOU?"}</h2>
                    </div>
                    <div className="wrapperButtonTop">
                        <div className="mb-3 buttonTopContent">
                            <button onClick={() => { window.location.href = "#ourPlan" }}> {changeLanguage ? "PAKET KAMI" : "OUR PLAN"}</button>
                        </div>
                        <div className="buttonTopContent">
                            <button onClick={() => sendEmail()}>  {changeLanguage ? "KONTAK KAMI" : "CONTACT US"}</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Top;