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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(MotionPathPlugin);
const HowThisWorks = ({ changeLanguage }) => {
    const phoneNumber = "62859106795228";
    const defaultMessage = "Halo, saya ingin kosultasi.";
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
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

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
            } else {
                document.body.style.overflow = "";
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

    const openWhatsApp = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}` // Aplikasi WhatsApp
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`; // WhatsApp Web

        window.open(url, "_blank");
    };

    const isDesktop = window.innerWidth > 1024;

    const motionProps = window.innerWidth > 1024
        ? {
            initial: { opacity: 0, y: 50 },
            animate: inView ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.6, ease: "easeOut" }
        }
        : {};

    return (
        <div className="row wrapperWorks d-flex justify-content-center align-items-center">
            {window.innerWidth <= 1024 ? <h2 className="mb-5 text-center howThisTittle">HOW THIS WORKS</h2> : ""}
            <div className="childWrapperWorks" ref={window.innerWidth <= 1024 ? diagramRef : null} id="howWorks">
                {window.innerWidth > 1024 ?
                    <motion.div className="col-12 col-md-6 wrapperDiagram"
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <div className="diagramContent">
                            <h2 className="mb-5 howThisTittle">HOW THIS WORKS</h2>
                            <div class="col">
                                <div class="row-container  rounded-4 p-3">
                                    <div class={`step-container`}
                                        onMouseEnter={() => { container1(); setContent("1") }}
                                        onMouseLeave={() => { containerEnd1(); setContent("1") }}>
                                        <div class={`step-number ${hoverContainer1 ? "light-top1" : ""}`}>1</div>
                                        <div class={`lineVertical ${hoverContainer1 ? "light-v1" : ""}`}></div>
                                        <div class={`step ${hoverContainer1 ? "light1" : ""}`}>{changeLanguage ? "KONSULTASI & ANALISIS" : "CONSULT & ANALYZE"}</div>
                                    </div>
                                    {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                    <div class={`step-container`}
                                        onMouseEnter={() => { container2(); setContent("2") }}
                                        onMouseLeave={() => { containerEnd2(); setContent("1") }}>
                                        <div class={`step-number ${hoverContainer2 ? "light-top2" : ""}`}>2</div>
                                        <div class={`lineVertical ${hoverContainer2 ? "light-v2" : ""}`}></div>
                                        <div class={`step ${hoverContainer2 ? "light2" : ""}`}>{changeLanguage ? "PERENCANAAN & STRATEGI" : "PLANNING & STRATEGY"}</div>
                                    </div>
                                    {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                    <div class={`step-container`}
                                        onMouseEnter={() => { container3(); setContent("3") }}
                                        onMouseLeave={() => { containerEnd3(); setContent("1") }}>
                                        <div class={`step-number ${hoverContainer3 ? "light-top3" : ""}`}>3</div>
                                        <div class={`lineVertical ${hoverContainer3 ? "light-v3" : ""}`}></div>
                                        <div class={`step ${hoverContainer3 ? "light3" : ""}`}>{changeLanguage ? "PENGEMBANGAN & IMPLEMENTASI" : "DEVELOPMENT & IMPLEMENT"}</div>
                                    </div>

                                    <div class={`step-container`}
                                        onMouseEnter={() => { container6(); setContent("6") }}
                                        onMouseLeave={() => { containerEnd6(); setContent("1") }}>
                                        <div class={`step-number ${hoverContainer6 ? "light-top6" : ""}`}>6</div>
                                        <div class={`lineVertical ${hoverContainer6 ? "light-v6" : ""}`}></div>
                                        <div class={`step ${hoverContainer6 ? "light6" : ""}`}>{changeLanguage ? "PEMELIHARAAN & DUKUNGAN" : "MAINTENANCE & SUPPORT"}</div>
                                    </div>
                                    {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}
                                    <div class={`step-container`}
                                        onMouseEnter={() => { container5(); setContent("5") }}
                                        onMouseLeave={() => { containerEnd5(); setContent("1") }}>
                                        <div class={`step-number ${hoverContainer5 ? "light-top5" : ""}`}>5</div>
                                        <div class={`lineVertical ${hoverContainer5 ? "light-v5" : ""}`}></div>
                                        <div class={`step ${hoverContainer5 ? "light5" : ""}`}>{changeLanguage ? "PENYEBARAN & PELATIHAN" : "DEPLOYMENT & TRAINING"}</div>
                                    </div>
                                    {/* <div class="line-container">
                                    <div class="line"></div>
                                </div> */}


                                    <div class={`step-container`}
                                        onMouseEnter={() => { container4(); setContent("4") }}
                                        onMouseLeave={() => { containerEnd4(); setContent("1") }}>
                                        <div class={`step-number ${hoverContainer4 ? "light-top4" : ""}`}>4</div>
                                        <div class={`lineVertical ${hoverContainer4 ? "light-v4" : ""}`}></div>
                                        <div class={`step ${hoverContainer4 ? "light4" : ""}`}>{changeLanguage ? "PENGUJIAN & OPTIMALISASI" : "TESTING & OPTIMALIZATION"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div> :
                    <motion.div className="wrapperDiagram" ref={ref}>
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
                                        <div class={`step light1`}>{changeLanguage ? "KONSULTASI & ANALISIS" : "CONSULT & ANALYZE"}</div>
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
                                        <div class={`step light2`}>{changeLanguage ? "PERENCANAAN & STRATEGI" : "PLANNING & STRATEGY"}</div>
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
                                        <div class={`step light3`}>{changeLanguage ? "PENGEMBANGAN & IMPLEMENTASI" : "DEVELOPMENT & IMPLEMENT"}</div>
                                    </div>}

                                {currentStep == 4 &&
                                    <div class={`step-container`}
                                        ref={(el) => (stepRefs.current[0] = el)}
                                        onMouseEnter={() => { container4(); setContent("4") }}
                                        onMouseLeave={() => { containerEnd4(); setContent("1") }}>
                                        <div class={`step-number light-top4`}>4</div>
                                        <div class={`lineVertical light-v4`}></div>
                                        <div class={`step light4`}>{changeLanguage ? "PENGUJIAN & OPTIMALISASI" : "TESTING & OPTIMALIZATION"}</div>
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
                                        <div class={`step light5`}>{changeLanguage ? "PENYEBARAN & PELATIHAN" : "DEPLOYMENT & TRAINING"}</div>
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
                                        <div class={`step light6`}>{changeLanguage ? "PEMELIHARAAN & DUKUNGAN" : "MAINTENANCE & SUPPORT"}</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </motion.div>}

                <motion.div
                    className={`wrapperBoxWorks ${window.innerWidth > 1024 ? "col-12 col-md-6" : ""}`}
                    ref={ref}
                    {...motionProps} >
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

                            {hoverContentBox === "1" ?
                                (<div className="textWorks p-3">
                                    <motion.b key={hoverContentBox} initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.5 }}>
                                        {changeLanguage ? "Kami mendengarkan kebutuhan Anda, memahami tantangan bisnis, dan menganalisis infrastruktur yang ada untuk memberikan solusi terbaik." : "We listen to your needs, understand your business challenges, and analyze your existing infrastructure to deliver the best solution."}
                                    </motion.b>
                                </div>
                                ) : hoverContentBox === "2" ? (
                                    <div className="textWorks p-3">
                                        <motion.b key={hoverContentBox} initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.5 }}>
                                            {changeLanguage ? "Tim kami merancang strategi implementasi berdasarkan praktek dan standar industri, memastikan solusi yang efisien dan skalabel." : "Our team designs implementation strategies based on industry best practices and standards, ensuring efficient and scalable solutions."}
                                        </motion.b>
                                    </div>
                                ) : hoverContentBox === "3" ? (
                                    <div className="textWorks p-3">
                                        <motion.b key={hoverContentBox} initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.5 }}>
                                            {changeLanguage ? "Kami mulai membangun, mengonfigurasi, dan mengintegrasikan solusi IT sesuai dengan kebutuhan bisnis Anda, dengan fokus pada keamanan dan performa." : "We begin by building, configuring, and integrating IT solutions tailored to your business needs, with a strong focus on security and performance."}
                                        </motion.b>
                                    </div>
                                ) : hoverContentBox === "4" ? (
                                    <div className="textWorks p-3">
                                        <motion.b key={hoverContentBox} initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.5 }}>
                                            {changeLanguage ? "Setiap solusi diuji secara menyeluruh untuk memastikan kinerja maksimal,  keamanan yang kuat, serta kompatibilitas dengan sistem yang sudah ada." : "Each solution is thoroughly tested to ensure optimal performance, robust security, and seamless compatibility with existing systems."}
                                        </motion.b>
                                    </div>
                                ) : hoverContentBox === "5" ? (
                                    <div className="textWorks p-3">
                                        <motion.b key={hoverContentBox} initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.5 }}>
                                            {changeLanguage ? "Setelah siap, solusi diterapkan ke lingkungan produksi, dan kami memberikan pelatihan kepada tim Anda untuk memastikan adopsi yang sukses." : "Once ready, the solution is deployed to the production environment, and we provide training to your team to ensure a successful adoption."}
                                        </motion.b>
                                    </div>) :
                                    (
                                        <div className="textWorks p-3">
                                            <motion.b key={hoverContentBox} initial={{ opacity: 0, x: -100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 1.5 }}>
                                                {changeLanguage ? "Kami menyediakan dukungan berkelanjutan, monitoring, dan pembaruan untuk memastikan sistem tetap optimal dan siap menghadapi tantangan masa depan." : "We provide continuous support, monitoring, and updates to ensure the system remains optimal and ready to meet future challenges."}
                                            </motion.b>
                                        </div>)
                            }
                            <div>
                                <div className="col d-flex justify-content-between align-items-end px-3 textPathWorks">
                                    {hoverContentBox === "1" ? (
                                        <>
                                            <div>
                                                {changeLanguage ? "Langkah 1" : "Step 1"}
                                            </div>
                                            <div className="explStep">
                                                {changeLanguage ? "KONSULTASI & ANALISIS" : "CONSULT & ANALYZE"}
                                            </div>
                                        </>) : hoverContentBox === "2" ? (
                                            <>
                                                <div>
                                                    {changeLanguage ? "Langkah 2" : "Step 2"}
                                                </div>
                                                <div className="explStep">
                                                    {changeLanguage ? "PERENCANAAN & STRATEGI" : "PLANNING & STRATEGY"}
                                                </div>
                                            </>
                                        ) : hoverContentBox === "3" ? (<>
                                            <div>
                                                {changeLanguage ? "Langkah 3" : "Step 3"}
                                            </div>
                                            <div className="explStep">
                                                {changeLanguage ? "PENGEMBANGAN & IMPLEMENTASI" : "DEVELOPMENT & IMPLEMENT"}
                                            </div>
                                        </>) :
                                        hoverContentBox === "4" ? (<>
                                            <div>
                                                {changeLanguage ? "Langkah 4" : "Step 4"}
                                            </div>
                                            <div className="explStep">
                                                {changeLanguage ? "PENGUJIAN & OPTIMALISASI" : "TESTING & OPTIMALIZATION"}
                                            </div>
                                        </>) :
                                            hoverContentBox === "5" ? (<>
                                                <div>
                                                    {changeLanguage ? "Langkah 5" : "Step 5"}
                                                </div>
                                                <div className="explStep">
                                                    {changeLanguage ? "PENYEBARAN & PELATIHAN" : "DEPLOYMENT & TRAINING"}
                                                </div>
                                            </>) : (
                                                <>
                                                    <div>
                                                        {changeLanguage ? "Langkah 6" : "Step 6"}
                                                    </div>
                                                    <div className="explStep">
                                                        {changeLanguage ? "PEMELIHARAAN & DUKUNGAN" : "MAINTENANCE & SUPPORT"}
                                                    </div>
                                                </>
                                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>



            <motion.div className="projectsMore d-flex justify-content-center align-items-center" id="targetSection"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="projectsMoreCol">
                    <div className="moreProjects d-flex justify-content-center align-items-center">
                        <b>{changeLanguage ? "Lebih dari 50+ klien dan 100+ project" : "More than 50+ clients and 100+ project"}</b>
                    </div>
                    <div className="moreProjectsButtonWrapper d-flex justify-content-center align-items-center">
                        <motion.button className="moreProjectsButton" onClick={openWhatsApp}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >{changeLanguage ? "KONSULTASI GRATIS" : "GET FREE CONSULTATION"}
                        </motion.button>
                    </div>

                    <div className="orbit">
                        <svg>
                            <circle cx="280" cy="260" r="180" stroke="white" fill="none" />
                            <circle cx="500" cy="260" r="180" stroke="white" fill="none" />
                            <circle cx="760" cy="260" r="180" stroke="white" fill="none" />
                            <g transform="translate(80.000000,15.000000) scale(0.450000)"
                                fill="none" stroke="none" >
                                <path id="orbitPath" class="cls-1" d="M23,552s-2.065-81.682,24-154c24.909-69.109,78-129,78-129s32.712-33.521,69-59c34.147-23.975,54-31,54-31a476.582,476.582,0,0,1,174-44,629.074,629.074,0,0,1,68,8,582.756,582.756,0,0,1,64,16s37.3,13.732,71,34c35.265,21.21,67,49,67,49,7.584,7.888,16.8,15.762,24,24,7.063,8.084,16.32,17.315,20.7,22.671A264.06,264.06,0,0,1,760,322c2.208,3.758,5.409,9.794,8.159,14.893,4.169,7.731,8.4,15.338,12.841,23.107a303.964,303.964,0,0,1,22,51c6.92,21.194,11.03,54.152,15,87,3.186,26.368,5.63,47.789,3,74-0.9,9-1.9,18.242-3.468,27.713A353.677,353.677,0,0,1,809,638a312.629,312.629,0,0,1-18,55c-5.977,13.794-14.355,29.156-24,45a473.042,473.042,0,0,1-40,55c-10.957,12.933-17.626,21.267-30,33,0,0-40.943-32.907-68-77-26.942-43.906-45-95-45-95a493.224,493.224,0,0,1-16-77c-4.049-33.964-2-74-2-74s5.226-52.684,22-99c16.726-46.184,45-86,45-86a315.181,315.181,0,0,1,44-58c28.479-29.249,67-56,67-56s29.886-19.34,61-33c30.378-13.336,62-21,62-21s60-13.679,117-11c59.93,2.817,117,22,117,22s38.12,14.359,73,36c33.6,20.844,64,49,64,49s37.79,34.559,65,78c27.29,43.559,44,96,44,96s12.87,44.594,15,90a404.394,404.394,0,0,1-19,145c-6.6,20.539-23.37,65.25-53,108-13.74,19.832-30.35,44.964-50,60-20.14-16.062-23.92-19.619-45-47-9.27-12.047-23.29-33.9-34-55-19.91-39.248-30.64-78.191-25-63a294.213,294.213,0,0,1-19-105c-0.92-16.812-1.53-37.446-1.05-49.9,0.14-3.692.35-7.33,0.63-10.835q0.54-6.643,1.42-13.263a250.879,250.879,0,0,1,17-63l21-58,40-61a364.862,364.862,0,0,1,42-49,374.767,374.767,0,0,1,52-42,407.153,407.153,0,0,1,80-42,456.545,456.545,0,0,1,69-18,390.584,390.584,0,0,1,52-6,359.293,359.293,0,0,1,46,1l46,3a494.987,494.987,0,0,1,79,23c29.6,11.375,55.98,24.463,75,37,21.13,13.928,42.53,31.964,65,56a417.654,417.654,0,0,1,64,90,456.37,456.37,0,0,1,36,97c8.26,33.589,12.08,64.325,12,89a326.721,326.721,0,0,1-11,83,369.31,369.31,0,0,1-101,199c-26.07,26.562-59.58,52.075-105,75-42.59,21.5-81.24,33.376-117,39-41.29,6.494-92.3,6.5-155-8a456.389,456.389,0,0,1-92-32c-7.67-4.992-15.23-9.6-23-14-13.29-7.532-21.18-11.323-33-21-6.08-4.974-13.45-11.581-19.5-17.5-5.73-5.6-11.47-11.012-17.5-16.5q-13.995,12.5-28,25a392.441,392.441,0,0,1-42.74,30.6c-8.14,5.035-17.61,10.344-27.26,15.4-9.59,5.023-19.14,9.629-29,14a356.335,356.335,0,0,1-70,21c-21.64,4.132-51.789,6.251-83,6a398.68,398.68,0,0,1-95-12c-34-8.493-64.159-20.358-91-35-3.448-1.881-6.833-3.624-10.267-5.349C759.8,880.676,756.954,877.822,753,876c-5.333-4.333-11.468-7.923-17-12-31.533-21.4-35.339-41.183-43-35-47,37.939-23.242,19.911-59,46-20.162,15.633-33.667,18.667-56,31a457.515,457.515,0,0,1-95,24c-37.138,5.233-69.433,5.882-99,3a387.145,387.145,0,0,1-109-27A379.406,379.406,0,0,1,92,761,397.141,397.141,0,0,1,23,552Z" />
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
            </motion.div>

        </div >
    )
}


export default HowThisWorks;