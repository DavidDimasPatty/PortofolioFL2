import { React, useState } from "react";
import "../assets/style/FAQ.css"

const FAQ = () => {
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);

    const clickQuestion1 = () => {
        setQuestion1(!question1);
        setQuestion2(false);
        setQuestion3(false);
        setQuestion4(false);
        setQuestion5(false);
    }

    const clickQuestion2 = () => {
        setQuestion1(false);
        setQuestion2(!question2);
        setQuestion3(false);
        setQuestion4(false);
        setQuestion5(false);
    }

    const clickQuestion3 = () => {
        setQuestion1(false);
        setQuestion2(false);
        setQuestion3(!question3);
        setQuestion4(false);
        setQuestion5(false);
    }

    const clickQuestion4 = () => {
        setQuestion1(false);
        setQuestion2(false);
        setQuestion3(false);
        setQuestion4(!question4);
        setQuestion5(false);
    }

    const clickQuestion5 = () => {
        setQuestion1(false);
        setQuestion2(false);
        setQuestion3(false);
        setQuestion4(false);
        setQuestion5(!question5);
    }

    return (
        <div className="col wrapFAQ">
            <div className="row wrapRowFAQ">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="col wrappperQuestions">
                        <div className="col">
                            <div><h3>FREQUENT ASKED QUESTIONS</h3></div>
                        </div>

                        <div className="col">
                            <div className="row wrapQuestions">
                                <div className="row questionFAQ" onClick={clickQuestion1}>
                                    <div>Apa saja layanan yang ditawarkan oleh perusahaan IT solution ini?</div>
                                    <div className={`downArrow1 ${question1 ? "active" : ""}`}>˅</div>
                                    <hr />
                                </div>
                                <div className={`row question1 ${question1 ? "active" : ""}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="row wrapQuestions">
                                <div className="row questionFAQ" onClick={clickQuestion2}>
                                    Bagaimana cara kami memastikan keamanan data pelanggan?
                                    <div className={`downArrow2 ${question2 ? "active" : ""}`}>˅</div>
                                    <hr />
                                </div>
                                <div className={`row question2 ${question2 ? "active" : ""}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="row wrapQuestions">
                                <div className="row questionFAQ"  onClick={clickQuestion3}>
                                    Apakah layanan IT security kami dapat diintegrasikan dengan sistem yang sudah ada?
                                    <div className={`downArrow3 ${question3 ? "active" : ""}`}>˅</div>
                                    <hr />
                                </div>
                                <div className={`row question3 ${question3 ? "active" : ""}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="row wrapQuestions">
                                <div className="row questionFAQ" onClick={clickQuestion4}>
                                    Berapa lama waktu yang dibutuhkan untuk implementasi layanan?
                                    <div className={`downArrow4 ${question4 ? "active" : ""}`}>˅</div>
                                    <hr />
                                </div>
                                <div className={`row question4 ${question4 ? "active" : ""}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                            <div className="row wrapQuestions">
                                <div className="row questionFAQ" onClick={clickQuestion5}>
                                    Bagaimana cara memulai dengan layanan kami?
                                    <div className={`downArrow5 ${question5 ? "active" : ""}`}>˅</div>
                                    <hr />
                                </div>
                                <div className={`row question5 ${question5 ? "active" : ""}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="col d-flex justify-content-center align-items-center anyFAQ">Any more questions?</div>
                        <div className="col d-flex justify-content-center align-items-center"> if you still have questions, give us a shout!</div>
                        <div className="col wrapButtonFAQRight d-flex justify-content-center align-items-center">
                            <button className="contactUsFAQ">Contact Us</button>
                            <button className="getStartedFAQ">Get Sarted</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FAQ;