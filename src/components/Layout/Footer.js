import React, { useRef, useEffect, useState } from "react";
import "../../assets/style/footer.css";
import logoPT from "../../assets/image/logoPT.png"
import Marquee from "react-fast-marquee";
import waLogo from "../../assets/image/whatsapp.png"
import fbLogo from "../../assets/image/facebook.png"
import igLogo from "../../assets/image/instagramm.png"
const Footer = () => {
    const [isHoverVision, setIsHoverVision] = useState(false);
    const [isHoverMission, setisHoverMission] = useState(false);

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


    return (
        <div className="footer" id="footer">
            <div className="row">
                <div className="col-4 d-flex  pb-2">
                    <div className="row">
                        <div className="row p-3 secureTittle">
                            <h3>WANT TO BE SECURE?</h3>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-start buttonFooterBot">
                                <button>Our Plan</button>
                                <button>FAQ</button>
                                <button>HOW</button>
                            </div>
                        </div>

                        <div className="row wrapImgFooter">
                            <img src={logoPT} className="imgFooter"></img>
                        </div>
                    </div>
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center wrapperVisionMission">
                    <div className={`row mb-4 ourVisionHidden ${isHoverVision ? `visible` : ''}`}>
                        <h6 className="titelOurVisionHidden">Our Vision</h6>
                        <div className="textVisionHidden">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                    </div>
                    <div className={`row mb-4 ourMissionHidden ${isHoverMission ? `visible` : ''}`}>
                        <h6 className="titelOurVisionHidden">Our Mission</h6>
                        <div className="textMissionHidden">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>

                <div className="col-2 d-flex">
                    <div className="row aboutUsWrapFooter">
                        <div className="row mb-4">
                            <h6 className="aboutUsFooter">About Us</h6>
                            <h6 onMouseEnter={hoverVision}
                                onMouseLeave={resetHover}
                                onTouchStart={hoverVision}
                                onTouchEnd={resetHover}>Our Vision</h6>
                            <h6 onMouseEnter={hoverMission}
                                onMouseLeave={resetHover}
                                onTouchStart={hoverMission}
                                onTouchEnd={resetHover}>Our Mission</h6>
                        </div>

                        <div className="row mb-4 contactUsWrapFooter">
                            <h6 className="contactUsFooter">Contact Us</h6>
                            <h6>Email@gmail.com</h6>
                            <h6>+62813 11948 214</h6>
                            <br />
                            <h6>Address</h6>
                            <h6>Jakarta - Indonesia</h6>
                        </div>

                        <div className="row mb-4 socialMediaWrapFooter">
                            <div className="col">
                                <h6 className="socialMediaFooter">Social Media</h6>
                                <img src={igLogo} width={"30px"} className="mx-1" />
                                <img src={fbLogo} width={"30px"} className="mx-1" />
                                <img src={waLogo} width={"30px"} className="mx-1" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footerEnd d-flex justify-content-center align-items-center">
                <div className="borderSpaceEnd d-flex justify-content-center align-items-center gap-3">
                    <Marquee speed={200} pauseOnHover={true} autoFill={true}>
                        <h2 className="moveText"> IKODORA </h2>
                    </Marquee>
                </div>
            </div>

        </div>
    );
}

export default Footer;