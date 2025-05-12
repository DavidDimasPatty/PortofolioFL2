import React, { useState } from "react";
import "../assets/style/howthisworks.css"
import logoPT from "../assets/image/logoPT.png"
import step1 from "../assets/image/howWorks/step1/step1.png"
import step2a from "../assets/image/howWorks/step2/step2a.png"
import step2b from "../assets/image/howWorks/step2/step2b.png"
import step2c from "../assets/image/howWorks/step2/step2c.png"
import step3a from "../assets/image/howWorks/step3/step3a.png"
import step3b from "../assets/image/howWorks/step3/step3b.png"
import step3c from "../assets/image/howWorks/step3/step3c.png"
import step4a from "../assets/image/howWorks/step4/step4a.png"
import step4b from "../assets/image/howWorks/step4/step4b.png"
import step4c from "../assets/image/howWorks/step4/step4c.png"
import step5a from "../assets/image/howWorks/step5/step5a.png"
import step5b from "../assets/image/howWorks/step5/step5b.png"
import step6a from "../assets/image/howWorks/step6/step6a.png"
import step6b from "../assets/image/howWorks/step6/step6b.png"
import step6c from "../assets/image/howWorks/step6/step6c.png"

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
                                {hoverContentBox === "1" ? (
                                    <div className="step1">
                                        <img src={step1} width={"100px"} className="workstep1" />
                                    </div>) :
                                    hoverContentBox === "2" ? (
                                        <div className="step2">
                                            <img
                                                src={step2a}
                                                width="100px"
                                                className={`workstep2a ${hoverContentBox === "2" ? "active" : ""}`}
                                            />
                                            <img
                                                src={step2b}
                                                width="100px"
                                                className={`workstep2b ${hoverContentBox === "2" ? "active" : ""}`}
                                            />
                                            <img
                                                src={step2c}
                                                width="100px"
                                                className={`workstep2c ${hoverContentBox === "2" ? "active" : ""}`}
                                            />
                                        </div>) :
                                        hoverContentBox === "3" ? (
                                            <div>
                                                <img src={step3a} width={"100px"} className="workstep3a" />
                                                <img src={step3b} width={"100px"} className="workstep3b" />
                                                <img src={step3c} width={"100px"} className="workstep3c" />
                                            </div>) :
                                            hoverContentBox === "4" ? (
                                                <div>
                                                    <img src={step4a} width={"100px"} className="workstep4a" />
                                                    <img src={step4b} width={"100px"} className="workstep4b" />
                                                    <img src={step4c} width={"100px"} className="workstep4c" />
                                                </div>) :
                                                hoverContentBox === "5" ? (
                                                    <div>
                                                        <img
                                                            src={step5a}
                                                            width="100px"
                                                            className={`workstep5a ${hoverContentBox === "5" ? "active" : ""}`}
                                                        />
                                                        <img
                                                            src={step5b}
                                                            width="20px"
                                                            className={`workstep5b ${hoverContentBox === "5" ? "active" : ""}`}
                                                        />
                                                    </div>) :
                                                    (
                                                        <div>
                                                            <img src={step6a} width={"100px"} className="workstep6a" />
                                                            <img src={step6b} width={"100px"} className="workstep6b" />
                                                            <img src={step6c} width={"100px"} className="workstep6c" />
                                                        </div>)
                                }
                            </div>
                            {hoverContentBox === "1" ? (<div className="textWorks p-3">
                                Kami mendengarkan kebutuhan Anda,
                                memahami tantangan bisnis, dan
                                menganalisis infrastruktur yang ada
                                untuk memberikan solusi terbaik.
                            </div>) : hoverContentBox === "2" ? (
                                <div className="textWorks p-3">
                                    Tim kami merancang strategi
                                    implementasi berdasarkan best
                                    practices dan standar industri,
                                    memastikan solusi yang efisien
                                    dan skalabel.
                                </div>
                            ) : hoverContentBox === "3" ? (
                                <div className="textWorks p-3">
                                    Kami mulai membangun, mengonfigurasi,
                                    dan mengintegrasikan solusi IT sesuai
                                    dengan kebutuhan bisnis Anda, dengan
                                    fokus pada keamanan dan performa.
                                </div>
                            ) : hoverContentBox === "4" ? (
                                <div className="textWorks p-3">
                                    Setiap solusi diuji secara menyeluruh
                                    untuk memastikan kinerja maksimal,
                                    keamanan yang kuat, serta
                                    kompatibilitas dengan sistem yang sudah ada.
                                </div>
                            ) : hoverContentBox === "5" ? (
                                <div className="textWorks p-3">
                                    Setelah siap, solusi diterapkan ke lingkungan
                                    produksi, dan kami memberikan pelatihan kepada
                                    tim Anda untuk memastikan adopsi yang sukses.
                                </div>) :
                                (
                                    <div className="textWorks p-3">
                                        Kami menyediakan dukungan berkelanjutan,
                                        monitoring, dan pembaruan untuk memastikan
                                        sistem tetap optimal dan siap menghadapi
                                        tantangan masa depan.
                                    </div>)
                            }
                            <div>
                                <div className="col d-flex justify-content-between align-items-end px-3 textPathWorks">
                                    {hoverContentBox === "1" ? (
                                        <>
                                            <div>
                                                Step 1
                                            </div>
                                            <div>
                                                Konsultasi dan Analisis
                                            </div>
                                        </>) : hoverContentBox === "2" ? (
                                            <>
                                                <div>
                                                    Step 2
                                                </div>
                                                <div>
                                                    Perencanaan dan Strategi
                                                </div>
                                            </>
                                        ) : hoverContentBox === "3" ? (<>
                                            <div>
                                                Step 3
                                            </div>
                                            <div>
                                                Pengembangan dan Implementasi
                                            </div>
                                        </>) :
                                        hoverContentBox === "4" ? (<>
                                            <div>
                                                Step 4
                                            </div>
                                            <div>
                                                Pengujian dan Optimalisasi
                                            </div>
                                        </>) :
                                            hoverContentBox === "5" ? (<>
                                                <div>
                                                    Step 5
                                                </div>
                                                <div>
                                                    Deployment dan Training
                                                </div>
                                            </>) : (
                                                <>
                                                    <div>
                                                        Step 6
                                                    </div>
                                                    <div>
                                                        Pemeliharaan dan Dukungan
                                                    </div>
                                                </>
                                            )}
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

        </div >
    )
}


export default HowThisWorks;