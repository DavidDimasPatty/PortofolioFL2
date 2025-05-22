import React from "react";
import "../assets/style/top.css"
import topLogo from "../assets/image/TopLogo.png"

const Top = ({ changeLanguage }) => {

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
                <div className="col-12 col-md-7  titleName">
                    {/* IKODOR<div className="lastLetterTop">A</div> */}
                    <img src={topLogo} className="imgTopLogo" />
                </div>
                <div className="topRight col-12 col-md-5">
                    <div className="buttonTopContentTitle">
                        <h2 className="typing">{changeLanguage ? "ADAKAH" : "HOW CAN"}</h2>
                        <h2 className="typing">{changeLanguage ? "YANG BISA" : "WE HELP"}</h2>
                        <h2 className="typing">{changeLanguage ? "DIBANTU?" : "YOU?"}</h2>
                    </div>
                    <div className="wrapperButtonTop">
                        <div className="mb-3 buttonTopContent">
                            <button onClick={() => { window.location.href = "#ourPlan" }}> {changeLanguage ? "PAKET KAMI" : "OUR PLAN"}</button>
                        </div>
                        <div className="buttonTopContent">
                            <button onClick={() => sendEmail()}>  {changeLanguage ? "KONTAK KAMI" : "CONTACT US"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;