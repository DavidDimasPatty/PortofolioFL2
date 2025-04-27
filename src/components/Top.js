import React from "react";
import "../assets/style/top.css"

const Top = () => {


    return (
        <div className="wrapperTop d-flex justify-content-center align-items-center">
            <div className="row wrapperRowTop">
                <div className="col-12 col-md-7  titleName">
                    IKODOR<div className="lastLetterTop">A</div>
                </div>
                <div className="topRight col-12 col-md-5">
                    <div className="buttonTopContentTitle">
                        <h2>HOW CAN WE HELP?</h2>
                    </div>
                    <div className="mb-3 buttonTopContent  d-flex justify-content-start align-items-center">
                        <button> OUR PLAN </button>
                    </div>
                    <div className="buttonTopContent  d-flex justify-content-start align-items-center">
                        <button>  CONTACT US </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;