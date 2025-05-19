import React, { useRef, useState, useEffect } from "react";
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
import rocket from "../assets/image/roket.png"
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
const HowThisWorks = () => {
    const [hoverContainer1, setHoverContainer1] = useState(false);
    const [hoverContainer2, setHoverContainer2] = useState(false);
    const [hoverContainer3, setHoverContainer3] = useState(false);
    const [hoverContainer4, setHoverContainer4] = useState(false);
    const [hoverContainer5, setHoverContainer5] = useState(false);
    const [hoverContainer6, setHoverContainer6] = useState(false);
    const [doneLook, setDoneLook] = useState(false);
    const [hoverContentBox, setHoverContentBox] = useState("1");
    const diagramRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(1);
    const stepRefs = useRef([]);
    const rocketRef = useRef(null);
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

    useEffect(() => {
        if (doneLook) return;

        const handleScroll = () => {
            const diagramEl = diagramRef.current;
            if (!diagramEl) return;

            const rect = diagramEl.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                document.body.style.overflow = "hidden";
                document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;
                document.body.style.left = '0';
                document.body.style.right = '0';
            } else {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.overflow = '';
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            document.body.style.overflow = "";
        };
    }, [doneLook]);

    useEffect(() => {
        const diagramEl = diagramRef.current;
        if (!diagramEl) return;

        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY > 0 && currentStep < 6) nextStep();
            else if (e.deltaY < 0 && currentStep > 1) prevStep();
        };

        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            if (deltaY > 50 && currentStep < 6) nextStep();
            else if (deltaY < -50 && currentStep > 1) prevStep();
        };

        diagramEl.addEventListener("wheel", handleWheel, { passive: false });
        diagramEl.addEventListener("touchstart", handleTouchStart, { passive: false });
        diagramEl.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            diagramEl.removeEventListener("wheel", handleWheel);
            diagramEl.removeEventListener("touchstart", handleTouchStart);
            diagramEl.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentStep]);


    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 6));
        setHoverContentBox((currentStep + 1).toString());
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
        setHoverContentBox((currentStep - 1).toString());
    };

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (currentStep <= 5 && doneLook == false) {
            if (stepRefs.current[currentStep - 1]) {
                stepRefs.current[currentStep - 1].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else if (currentStep >= 6 && doneLook == false) {
            setDoneLook(true);
            document.getElementById("targetSection").scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [currentStep]);


    useEffect(() => {
        gsap.to(rocketRef.current, {
            duration: 30,
            repeat: -1,
            ease: "none",
            motionPath: {
                path: "#orbitPath",
                align: "#orbitPath",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            }
        });
    }, []);


    return (
        <div className="row wrapperWorks d-flex justify-content-center align-items-center">
            {window.innerWidth <= 767 ? <h2 className="mb-5 text-center howThisTittle">HOW THIS WORKS</h2> : ""}
            <div className="childWrapperWorks" ref={window.innerWidth <= 767 ? diagramRef : null}>
                {window.innerWidth > 767 ?
                    <div className="col-12 col-md-6 wrapperDiagram">
                        <div className="diagramContent">
                            <h2 className="mb-5 howThisTittle">HOW THIS WORKS</h2>
                            <div class="col">
                                <div class="row-container  rounded-4 p-3">
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

                                <div class="row-container  rounded-4 p-3">
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
                    </div> :
                    <div className="wrapperDiagram">
                        <div className="diagramContent" >
                            {/* tampilan mobile diatur aja nanti si width */}
                            <div class="col">
                                {currentStep <= 1 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container1(); setContent("1") }}
                                        onMouseLeave={() => { containerEnd1(); setContent("1") }}>
                                        <div class={`step-number light-top1`}>1</div>
                                        <div class={`lineVertical  light-v1 `}></div>
                                        <div class={`step light1`}>KONSULTASI & ANALISIS</div>
                                    </div>}
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                {currentStep == 2 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container2(); setContent("2") }}
                                        onMouseLeave={() => { containerEnd2(); setContent("1") }}>
                                        <div class={`step-number  light-top2`}>2</div>
                                        <div class={`lineVertical light-v2`}></div>
                                        <div class={`step light2`}>PERENCANAAN & STRATEGI</div>
                                    </div>}
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                {currentStep == 3 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container3(); setContent("3") }}
                                        onMouseLeave={() => { containerEnd3(); setContent("1") }}>
                                        <div class={`step-number light-top3`}>3</div>
                                        <div class={`lineVertical light-v3`}></div>
                                        <div class={`step light3`}>PENGEMBANGAN & IMPLEMENTASI</div>
                                    </div>}

                                {currentStep == 4 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container4(); setContent("4") }}
                                        onMouseLeave={() => { containerEnd4(); setContent("1") }}>
                                        <div class={`step-number light-top4`}>4</div>
                                        <div class={`lineVertical light-v4`}></div>
                                        <div class={`step light4`}>PENGUJIAN & OPTIMALISASI</div>
                                    </div>
                                }
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}

                                {currentStep == 5 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container5(); setContent("5") }}
                                        onMouseLeave={() => { containerEnd5(); setContent("1") }}>
                                        <div class={`step-number light-top5`}>5</div>
                                        <div class={`lineVertical light-v5`}></div>
                                        <div class={`step light5`}>DEPLOYMENT & TRAINING</div>
                                    </div>}
                                {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                {currentStep >= 6 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container6(); setContent("6") }}
                                        onMouseLeave={() => { containerEnd6(); setContent("1") }}>
                                        <div class={`step-number light-top6`}>6</div>
                                        <div class={`lineVertical light-v6`}></div>
                                        <div class={`step light6`}>PEMELIHARAAN & DUKUNGAN</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>}

                <div className={`wrapperBoxWorks ${window.innerWidth > 767 ? "col-12 col-md-6" : ""}`}>
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



            <div className="projectsMore d-flex justify-content-center align-items-center" id="targetSection">
                <div className="projectsMoreCol">
                    <div className="moreProjects d-flex justify-content-center align-items-center">
                        <b>More than 50+ clients and 100+ project</b>
                    </div>
                    <div className="moreProjectsButtonWrapper d-flex justify-content-center align-items-center">
                        <button className="moreProjectsButton">GET FREE CONSULTATION</button>
                    </div>

                    <div className="orbit">
                        <svg>
                            <circle cx="280" cy="210" r="157" stroke="white" fill="none" />
                            <circle cx="500" cy="210" r="157" stroke="white" fill="none" />
                            <circle cx="750" cy="210" r="157" stroke="white" fill="none" />
                            <g transform="translate(0.000000,513.000000) scale(0.100000,-0.100000)"
                                fill="transparent" stroke="none" >
                                <path id="orbitPath" d="M7320 4665 c-387 -53 -745 -252 -1008 -559 l-42 -49 -88 86 c-147
144 -262 225 -445 312 -235 112 -405 150 -672 150 -267 0 -437 -38 -672 -150
-187 -89 -299 -168 -453 -321 l-96 -94 -74 66 c-195 171 -454 298 -717 351
-123 24 -403 24 -526 0 -214 -43 -454 -148 -619 -273 -311 -233 -513 -555
-599 -955 -33 -150 -33 -438 0 -588 77 -361 239 -644 498 -873 204 -181 471
-310 743 -359 98 -18 382 -18 480 0 276 50 540 178 750 364 l85 76 85 -84
c145 -142 260 -223 443 -310 235 -112 406 -150 672 -149 268 0 438 38 672 149
188 89 299 168 455 322 l97 96 94 -95 c105 -106 197 -182 305 -251 508 -327
1176 -327 1684 0 397 255 670 665 760 1140 32 169 32 457 0 626 -111 587 -509
1077 -1042 1282 -238 92 -517 125 -770 90z m410 -9 c389 -52 730 -236 993
-535 196 -221 342 -525 399 -828 32 -169 32 -457 0 -626 -89 -473 -358 -878
-750 -1130 -508 -327 -1176 -327 -1684 0 -109 70 -199 144 -304 251 l-94 96
-98 -97 c-156 -154 -267 -233 -455 -322 -234 -111 -404 -149 -672 -149 -266
-1 -437 37 -672 149 -184 87 -288 161 -438 306 l-90 88 -85 -76 c-209 -185
-474 -314 -750 -364 -98 -18 -382 -18 -480 0 -405 73 -770 310 -993 644 -114
171 -191 356 -238 578 -33 150 -33 438 0 588 50 234 143 449 271 625 214 297
563 518 937 593 123 24 403 24 526 0 271 -54 545 -192 737 -369 58 -54 78 -69
66 -50 -6 9 164 178 234 234 124 97 336 210 493 262 157 52 286 71 482 71 267
0 437 -38 672 -150 202 -96 370 -220 503 -371 28 -32 34 -35 42 -21 28 51 180
202 288 288 317 251 753 369 1160 315z"/>
                            </g>
                            <image
                                ref={rocketRef}
                                href={rocket}
                                width="60"
                                height="60"
                            />
                        </svg>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default HowThisWorks;