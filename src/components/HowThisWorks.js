import React from "react";
import "../assets/style/howthisworks.css"

const HowThisWorks = () => {

    return (
        <div className="col wrapperWorks">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            <h2>HOW THIS WORKS</h2>
                        </div>
                        <div class="container m-5">
                            <div class="row-container">
                                <div class="step-container">
                                    <div class="step-number">1</div>
                                    <div className="lineVertical"></div>
                                    <div class="step">KONSULTASI & ANALISIS</div>
                                </div>
                                <div class="line-container">
                                    <div class="line"></div>
                                </div>
                                <div class="step-container">
                                    <div class="step-number">2</div>
                                    <div className="lineVertical"></div>
                                    <div class="step">PERENCANAAN & STRATEGI</div>
                                </div>
                                <div class="line-container">
                                    <div class="line"></div>
                                </div>
                                <div class="step-container">
                                    <div class="step-number">3</div>
                                    <div className="lineVertical"></div>
                                    <div class="step">PENGEMBANGAN & IMPLEMENTASI</div>
                                </div>
                            </div>

                            <div class="row-container rounded-4 p-3">
                                <div class="step-container">
                                    <div class="step-number">4</div>
                                    <div className="lineVertical"></div>
                                    <div class="step">PENGUJIAN & OPTIMALISASI</div>
                                </div>
                                <div class="line-container">
                                    <div class="line"></div>
                                </div>
                                <div class="step-container">
                                    <div class="step-number">5</div>
                                    <div className="lineVertical"></div>
                                    <div class="step">DEPLOYMENT & TRAINING</div>
                                </div>
                                <div class="line-container">
                                    <div class="line"></div>
                                </div>
                                <div class="step-container">
                                    <div class="step-number">6</div>
                                    <div className="lineVertical"></div>
                                    <div class="step">PEMELIHARAAN & DUKUNGAN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    )
}


export default HowThisWorks;