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
        <div className="wrapRowFAQ">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="row wrappperQuestions d-flex justify-content-center align-items-center">
                    <div className="col">
                        <h3 className="text-center mb-3 faqTittleTop"> FREQUENT ASKED QUESTIONS</h3>
                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion1}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">Apa saja layanan yang ditawarkan oleh perusahaan IT solution ini? </div>
                                    <div className={`downArrow1 ${question1 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question1 ${question1 ? "active" : ""}`}>
                                <ul>
                                    <li> Cybersecurity Services: Vulneability Assessment & Pentesting dan keamanan jaringan.</li>
                                    <li> Software Development: Pengembangan aplikasi berbasis web dan mobile.</li>
                                    <li> IT Consulting & Managed Services: Perencanaan, implementasi, dan pemeliharaan infrastruktur IT.</li>
                                    <li>  Data Analytics & AI Solutions: Business Intelligence, Machine Learning, dan Big Data.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion2}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">Bagaimana cara kami memastikan keamanan data pelanggan?</div>
                                    <div className={`downArrow2 ${question2 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question2 ${question2 ? "active" : ""}`}>
                                <ul>
                                    <li>Enkripsi Data (At Rest & In Transit) menggunakan AES-256 & TLS.</li>
                                    <li> Multi-Factor Authentication (MFA) untuk perlindungan login.</li>
                                    <li> Backup & Disaster Recovery untuk menghindari kehilangan data.</li>
                                    <li> Audit & Compliance sesuai dengan standar internasional.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion3}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">Apakah layanan IT security kami dapat diintegrasikan dengan sistem yang sudah ada?</div>
                                    <div className={`downArrow3 ${question3 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question3 ${question3 ? "active" : ""}`}>
                                Tentu! Solusi kami dirancang untuk kompatibilitas dengan berbagai teknologi yang sudah Anda gunakan. Tim kami akan melakukan assessment dan integrasi tanpa mengganggu operasional bisnis Anda.
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion4}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">Berapa lama waktu yang dibutuhkan untuk implementasi layanan?</div>
                                    <div className={`downArrow4 ${question4 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question4 ${question4 ? "active" : ""}`}>
                                <ul>
                                    <li> Security Assessment & Pentesting: 1-4 minggu.</li>
                                    <li> Software Development : 3 bulan - 12 bulan.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion5}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">Bagaimana cara memulai dengan layanan kami?</div>
                                    <div className={`downArrow5 ${question5 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question5 ${question5 ? "active" : ""}`}>
                                <ul>
                                    <li> Konsultasi Gratis – Hubungi kami untuk mendiskusikan kebutuhan Anda.</li>
                                    <li> Assessment – Kami akan melakukan analisis terhadap sistem IT Anda.</li>
                                    <li> Proposal & Rekomendasi – Kami memberikan solusi yang sesuai.</li>
                                    <li> Implementasi & Support – Kami menjalankan solusi dengan dukungan 24/7.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
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
    )
}


export default FAQ;