import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "../../assets/style/Overlay.css";

const Overlay = () => {
    const [doneAnimate, setDoneAnimate] = useState(
        sessionStorage.getItem("rocketAnimated") === "true"
    );
    useEffect(() => {
        setDoneAnimate(false);
        if (!doneAnimate) {
            document.body.classList.add("no-scroll");
            let tl = gsap.timeline({
                repeat: 0,
                repeatDelay: 0,
                onComplete: () => {
                    document.body.classList.remove("no-scroll");
                    sessionStorage.setItem("rocketAnimated", "true");
                    setDoneAnimate(true);
                }
            });
            const labels = document.getElementsByClassName("labels");
            const rocket = document.querySelectorAll(
                ".rocket__body, .rocket__wing, .rocket__fire"
            );
            const smokeL = document.querySelectorAll(".rocket__smoke--left");
            const smokeR = document.querySelectorAll(".rocket__smoke--right");
            const fire = document.getElementsByClassName("rocket__fire");

            let cdStart = 2,
                cdLeave = cdStart / 2,
                esDuration = 0.1,
                esRepeat = 25,
                smDuration = 3;

            tl
                // .addLabel("countdown")
                // .from(labels, {
                //     duration: cdStart,
                //     scale: 0,
                //     x: "50px",
                //     y: "50px",
                //     stagger: cdStart / labels.length,
                // }, "countdown")
                // .to(labels, {
                //     duration: cdLeave,
                //     scale: 0,
                //     x: "20px",
                //     y: "20px",
                //     opacity: 0,
                //     stagger: cdStart / labels.length,
                // }, "countdown+=" + cdStart / labels.length)

                .addLabel("engine-start")
                .from(rocket, {
                    duration: esDuration,
                    x: "+=3px",
                    repeat: esRepeat,
                }, "engine-start-=.5")
                .from(rocket, {
                    duration: esDuration * 20,
                    y: "+=5px",
                }, "engine-start-=1")
                .from(smokeL, {
                    duration: 2,
                    scale: 0,
                    opacity: 2,
                    stagger: smDuration / smokeL.length,
                    x: "+=45px",
                    y: "+=30px",
                }, "engine-start-=.5")
                .from(smokeR, {
                    duration: 2,
                    scale: 0,
                    opacity: 2,
                    stagger: smDuration / smokeR.length,
                    x: "-=45px",
                    y: "+=30px",
                }, "engine-start-=.5")
                .from(fire, {
                    duration: smDuration,
                    scale: 0,
                }, "engine-start-=.5")

                .addLabel("lift-off")
                .to(rocket, {
                    duration: 2,
                    y: "-=200px",
                }, "lift-off-=1")
                .to(fire, {
                    duration: 0.25,
                    scale: 2,
                }, "lift-off-=1")

                .addLabel("launch")
                .to(rocket, {
                    duration: 3,
                    y: `-=${window.innerHeight}px`,
                    ease: "power4",
                }, "launch-=1.5")
                .to(fire, {
                    duration: 0.25,
                    scale: 1.75,
                    repeat: 10,
                }, "launch-=1.8")
                .to("#frame", {
                    duration: 3,
                    y: `-=${window.innerHeight + 100}px`,
                    ease: "power4",
                    onStart: () => {
                        document.body.classList.remove("no-scroll");
                    }
                }, "launch-=1.5");
        } else {
            setDoneAnimate(true);
            document.body.classList.remove("no-scroll");
        }
    }, []);

    return (
        <>
            {!doneAnimate ?
                <div id="frame">
                    <div className="wrapText">
                        <h3>WELCOME TO IKODORA!</h3>
                    </div>
                    <div className="rocket">
                        <div className="rocket__body">
                            <div className="rocket__body__window">
                                <div className="shadow"></div>
                            </div>
                            <div className="rocket__body__inner">
                                <div className="shadow"></div>
                            </div>
                        </div>
                        <div className="rocket__wing rocket__wing--left"></div>
                        <div className="rocket__wing rocket__wing--right">   </div>
                        <div className="rocket__label">
                            <p className="labels"></p>
                            <p className="labels"></p>
                            <p className="labels"></p>
                        </div>

                        {["left", "right"].map((side) =>
                            Array.from({ length: 5 }).map((_, i) => (
                                <div key={`${side}-${i}`} className={`rocket__smoke rocket__smoke--${side}`}>
                                    <div className="rocket__smoke__inner">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className="rocket__fire"></div>
                    </div>
                </div>
                : <></>}
        </>
    );
};

export default Overlay;
