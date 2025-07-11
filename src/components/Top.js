import React, { useState } from "react";
import "../assets/style/top.css"
import topLogo from "../assets/image/TopLogo.png"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Top = ({ changeLanguage }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [doneAnimate, setDoneAnimate] = useState(
        sessionStorage.getItem("rocketAnimated") === "true"
    );

    function sendEmail() {
        const email = "ikodora.official@gmail.com";
        const subject = `Saya mau konsultasi`;
        const body = `Halo, saya mau konsultasi.`;
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
                        <h2 className={`typing ${doneAnimate ? "done" : ""}`}>{changeLanguage ? "ADA YANG" : "HOW CAN"}</h2>
                        <h2 className={`typing ${doneAnimate ? "done" : ""}`}>{changeLanguage ? "BISA KAMI" : "WE HELP"}</h2>
                        <h2 className={`typing ${doneAnimate ? "done" : ""}`}>{changeLanguage ? "BANTU?" : "YOU?"}</h2>
                    </div>
                    <div className="wrapperButtonTop">
                        <div className="mb-3 buttonTopContent">
                            <motion.button onClick={() => { window.location.href = "#ourPlan" }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 3,
                                    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
                                }}
                                whileTap={{
                                    scale: 1.1,
                                    rotate: 3,
                                    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            > {changeLanguage ? "PAKET KAMI" : "OUR PLAN"}</motion.button>
                        </div>
                        <div className="buttonTopContent">
                            <motion.button onClick={() => sendEmail()}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: -3,
                                    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
                                }}
                                whileTap={{
                                    scale: 1.1,
                                    rotate: 3,
                                    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}>  {changeLanguage ? "KONTAK KAMI" : "CONTACT US"}</motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Top;