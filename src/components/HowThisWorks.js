import React from "react";
import "../assets/style/howthisworks.css"
import logoPT from "../assets/image/logoPT.png"

const HowThisWorks = () => {

    return (
        <div className="col wrapperWorks">
            <div className="row rowWrapperWorks">
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
                </div>
                <div className="col-6 wrapperBoxWorks">
                    <div className="boxTopWorks">

                    </div>
                    <div className="plus-shape">

                    </div>
                    <div className="col boxWorks">
                        <div className="imageWorks">
                            <img src={logoPT} width={"100px"} className="imgWorksDeep" />
                        </div>
                        <div className="textWorks p-3">
                            Kami mendengarkan kebutuhan Anda,
                            memahami tantangan bisnis, dan
                            menganalisis infrastruktur yang ada
                            untuk memberikan solusi terbaik
                        </div>
                        <div>
                            <div className="col d-flex justify-content-between align-items-end px-3 textPathWorks">
                                <div>
                                    Step 1
                                </div>
                                <div>
                                    Konsultasi dan Analisis
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row projectsMore d-flex justify-content-center align-items-center">
                <div className="col projectsMoreCol">
                    <div className="row">
                        <div className="moreProjects d-flex justify-content-center align-items-center">
                            <b>More than 50+ clients and 100+ project</b>
                        </div>
                        <div className="moreProjectsButtonWrapper d-flex justify-content-center align-items-center">
                            <button className="moreProjectsButton">GET FREE CONSULTATION</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HowThisWorks;