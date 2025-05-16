import React from "react";
import "../assets/style/top.css"
import topLogo from "../assets/image/TopLogo.png"

const Top = () => {


    return (
        <div className="wrapperTop d-flex justify-content-center align-items-center">
            <div className="row wrapperRowTop">
                <div className="col-12 col-md-7  titleName">
                    {/* IKODOR<div className="lastLetterTop">A</div> */}
                    <img src={topLogo} className="imgTopLogo" />
                </div>
                <div className="topRight col-12 col-md-5">
                    <div className="buttonTopContentTitle">
                        <h2>HOW CAN WE HELP?</h2>
                    </div>
                    <div className="wrapperButtonTop">
                        <div className="mb-3 buttonTopContent">
                            <button> OUR PLAN </button>
                        </div>
                        <div className="buttonTopContent">
                            <button>  CONTACT US </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;