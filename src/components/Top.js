import React from "react";
import "../assets/style/top.css"

const Top = () => {


    return (
        <div className="col wrapperTop d-flex justify-content-center align-items-center">
            <div className="row wrapperRowTop">
                <div className="col-7 wrapperTopLeft d-flex justify-content-center align-items-center titleName">
                    <h1>IKODORA</h1>
                </div>
                <div className="col-5 d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="row buttonTopContentTitle">
                            <h2>HOW CAN WE HELP?</h2>
                        </div>
                        <div className="row mb-3 buttonTopContent  d-flex justify-content-start align-items-center">
                            <button> OUR PLAN </button>
                        </div>
                        <div className="row buttonTopContent  d-flex justify-content-start align-items-center">
                            <button>  CONTACT US </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;