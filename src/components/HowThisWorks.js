import React, { useState } from "react";
import "../assets/style/howthisworks.css"
import logoPT from "../assets/image/logoPT.png"

const HowThisWorks = () => {
    const [hoverContainer1, setHoverContainer1] = useState(false);
    const [hoverContainer2, setHoverContainer2] = useState(false);
    const [hoverContainer3, setHoverContainer3] = useState(false);
    const [hoverContainer4, setHoverContainer4] = useState(false);
    const [hoverContainer5, setHoverContainer5] = useState(false);
    const [hoverContainer6, setHoverContainer6] = useState(false);
    const [hoverContentBox, setHoverContentBox] = useState("1");

    const container1 = () => {
        setHoverContainer1(true);
    }

    const containerEnd1 = () => {
        setHoverContainer1(false);
    }

    const container2 = () => {
        container1();
        setHoverContainer2(true);
    }

    const containerEnd2 = () => {
        containerEnd1();
        setHoverContainer2(false);
    }

    const container3 = () => {
        container2();
        setHoverContainer3(true);
    }

    const containerEnd3 = () => {
        containerEnd2();
        setHoverContainer3(false);
    }

    const container4 = () => {
        container3();
        setHoverContainer4(true);
    }

    const containerEnd4 = () => {
        containerEnd3();
        setHoverContainer4(false);
    }

    const container5 = () => {
        container4();
        setHoverContainer5(true);
    }

    const containerEnd5 = () => {
        containerEnd4();
        setHoverContainer5(false);
    }

    const container6 = () => {
        container5();
        setHoverContainer6(true);
    }

    const containerEnd6 = () => {
        containerEnd5();
        setHoverContainer6(false);
    }

    const setContent = (val) => {
        setHoverContentBox(val);
    }

    return (
        <div className="row wrapperWorks d-flex justify-content-center align-items-center">
            <div className="row WrapperWorks">
                <div className="col-12 col-md-6 wrapperDiagram">
                    <div className="diagramContent">
                        <h2 className="mb-5">HOW THIS WORKS</h2>
                        <div class="col">
                            <div class="row-container">
                                <div class={`step-container`}
                                    onMouseEnter={() => { container1(); setContent("1") }}
                                    onMouseLeave={() => { containerEnd1(); setContent("1") }}>
                                    <div class={`step-number ${hoverContainer1 ? "light-top1" : ""}`}>1</div>
                                    <div class={`lineVertical ${hoverContainer1 ? "light-v1" : ""}`}></div>
                                    <div class={`step ${hoverContainer1 ? "light1" : ""}`}>KONSULTASI & ANALISIS</div>
                                </div>
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                <div class={`step-container`}
                                    onMouseEnter={() => { container2(); setContent("2") }}
                                    onMouseLeave={() => { containerEnd2(); setContent("1") }}>
                                    <div class={`step-number ${hoverContainer2 ? "light-top2" : ""}`}>2</div>
                                    <div class={`lineVertical ${hoverContainer2 ? "light-v2" : ""}`}></div>
                                    <div class={`step ${hoverContainer2 ? "light2" : ""}`}>PERENCANAAN & STRATEGI</div>
                                </div>
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                <div class={`step-container`}
                                    onMouseEnter={() => { container3(); setContent("3") }}
                                    onMouseLeave={() => { containerEnd3(); setContent("1") }}>
                                    <div class={`step-number ${hoverContainer3 ? "light-top3" : ""}`}>3</div>
                                    <div class={`lineVertical ${hoverContainer3 ? "light-v3" : ""}`}></div>
                                    <div class={`step ${hoverContainer3 ? "light3" : ""}`}>PENGEMBANGAN & IMPLEMENTASI</div>
                                </div>
                            </div>

                            <div class="row-container rounded-4 p-3">
                                <div class={`step-container`}
                                    onMouseEnter={() => { container4(); setContent("4") }}
                                    onMouseLeave={() => { containerEnd4(); setContent("1") }}>
                                    <div class={`step-number ${hoverContainer4 ? "light-top4" : ""}`}>4</div>
                                    <div class={`lineVertical ${hoverContainer4 ? "light-v4" : ""}`}></div>
                                    <div class={`step ${hoverContainer4 ? "light4" : ""}`}>PENGUJIAN & OPTIMALISASI</div>
                                </div>
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                <div class={`step-container`}
                                    onMouseEnter={() => { container5(); setContent("5") }}
                                    onMouseLeave={() => { containerEnd5(); setContent("1") }}>
                                    <div class={`step-number ${hoverContainer5 ? "light-top5" : ""}`}>5</div>
                                    <div class={`lineVertical ${hoverContainer5 ? "light-v5" : ""}`}></div>
                                    <div class={`step ${hoverContainer5 ? "light5" : ""}`}>DEPLOYMENT & TRAINING</div>
                                </div>
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                <div class={`step-container`}
                                    onMouseEnter={() => { container6(); setContent("6") }}
                                    onMouseLeave={() => { containerEnd6(); setContent("1") }}>
                                    <div class={`step-number ${hoverContainer6 ? "light-top6" : ""}`}>6</div>
                                    <div class={`lineVertical ${hoverContainer6 ? "light-v6" : ""}`}></div>
                                    <div class={`step ${hoverContainer6 ? "light6" : ""}`}>PEMELIHARAAN & DUKUNGAN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 wrapperBoxWorks">
                    <div className="col boxWorksContent">
                        <div className="wrapContentComponent">
                            <div className="boxTopWorks">

                            </div>
                            <div className="plus-shape">

                            </div>
                        </div>
                        <div className="boxWorks">
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
            </div>



            <div className="projectsMore d-flex justify-content-center align-items-center">
                <div className="row projectsMoreCol">
                    <div className="col">
                        <div className="moreProjects d-flex justify-content-center align-items-center">
                            <b>More than 50+ clients and 100+ project</b>
                        </div>
                        <div className="moreProjectsButtonWrapper d-flex justify-content-center align-items-center">
                            <button className="moreProjectsButton">GET FREE CONSULTATION</button>
                        </div>
                        <div className="orbit">
                            <div class="orbit1"></div>
                            <div class="orbit2"></div>
                            <div class="orbit3"></div>
                            <div class="rocket"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default HowThisWorks;