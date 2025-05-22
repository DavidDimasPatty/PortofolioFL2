import { React, useState } from "react";
import "../assets/style/FAQ.css"

const FAQ = ({ changeLanguage }) => {
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

    function sendEmail() {
        const email = "example@example.com";
        const subject = `Saya mau plan uji coba`;
        const body = `Halo, saya mau uji coba.`;
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    }

    return (
        <div className="wrapRowFAQ">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" id="faq">
                <div className="row wrappperQuestions d-flex justify-content-center align-items-center">
                    <div className="col">
                        <h3 className="text-center mb-3 faqTittleTop"> FREQUENT ASKED QUESTIONS</h3>
                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion1}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">
                                        {changeLanguage
                                            ? "Apa saja layanan yang ditawarkan oleh perusahaan IT solution ini?"
                                            : "What services are offered by this IT solution company?"}
                                    </div>
                                    <div className={`downArrow1 ${question1 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question1 ${question1 ? "active" : ""}`}>
                                {changeLanguage ? (
                                    <>
                                        <ul>
                                            <li>Cybersecurity Services: Vulneability Assessment & Pentesting dan keamanan jaringan.</li>
                                            <li>Software Development: Pengembangan aplikasi berbasis web dan mobile.</li>
                                            <li>IT Consulting & Managed Services: Perencanaan, implementasi, dan pemeliharaan infrastruktur IT.</li>
                                            <li>Data Analytics & AI Solutions: Business Intelligence, Machine Learning, dan Big Data.</li>
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <ul>
                                            <li>Cybersecurity Services: Vulnerability Assessment & Pentesting and network security.</li>
                                            <li>Software Development: Web and mobile application development.</li>
                                            <li>IT Consulting & Managed Services: Planning, implementation, and maintenance of IT infrastructure.</li>
                                            <li>Data Analytics & AI Solutions: Business Intelligence, Machine Learning, and Big Data.</li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion2}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">
                                        {changeLanguage
                                            ? "Bagaimana cara kami memastikan keamanan data pelanggan?"
                                            : "How do we ensure the security of customer data?"}
                                    </div>
                                    <div className={`downArrow2 ${question2 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question2 ${question2 ? "active" : ""}`}>
                                {changeLanguage ? (
                                    <>
                                        <ul>
                                            <li>Enkripsi Data (At Rest & In Transit) menggunakan AES-256 & TLS.</li>
                                            <li>Multi-Factor Authentication (MFA) untuk perlindungan login.</li>
                                            <li>Backup & Disaster Recovery untuk menghindari kehilangan data.</li>
                                            <li>Audit & Compliance sesuai dengan standar internasional.</li>
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <ul>
                                            <li>Data Encryption (At Rest & In Transit) using AES-256 & TLS.</li>
                                            <li>Multi-Factor Authentication (MFA) for login protection.</li>
                                            <li>Backup & Disaster Recovery to prevent data loss.</li>
                                            <li>Audit & Compliance according to international standards.</li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion3}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">
                                        {changeLanguage
                                            ? "Apakah layanan IT security kami dapat diintegrasikan dengan sistem yang sudah ada?"
                                            : "Can our IT security services be integrated with existing systems?"}
                                    </div>
                                    <div className={`downArrow3 ${question3 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question3 ${question3 ? "active" : ""}`}>
                                {changeLanguage ? (
                                    <>
                                        <ul>
                                            <li>
                                                Tentu! Solusi kami dirancang untuk kompatibilitas dengan berbagai teknologi yang sudah Anda gunakan. Tim kami akan melakukan assessment dan integrasi tanpa mengganggu operasional bisnis Anda.
                                            </li>
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <ul>
                                            <li>
                                                Absolutely! Our solutions are designed for compatibility with the various technologies you already use. Our team will perform assessments and integration without disrupting your business operations.
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion4}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">
                                        {changeLanguage
                                            ? "Berapa lama waktu yang dibutuhkan untuk implementasi layanan?"
                                            : "How long does it take to implement the service?"}
                                    </div>
                                    <div className={`downArrow4 ${question4 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question4 ${question4 ? "active" : ""}`}>
                                {changeLanguage ? (
                                    <>
                                        <ul>
                                            <li>Security Assessment & Pentesting: 1-4 minggu.</li>
                                            <li>Software Development: 3 bulan - 12 bulan.</li>
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <ul>
                                            <li>Security Assessment & Pentesting: 1-4 weeks.</li>
                                            <li>Software Development: 3 months - 12 months.</li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="wrapQuestions">
                            <div className="row questionFAQ" onClick={clickQuestion5}>
                                <div className="col d-flex justify-content-start align-items-center">
                                    <div className="col">
                                        {changeLanguage
                                            ? "Bagaimana cara memulai dengan layanan kami?"
                                            : "How do you get started with our services?"}
                                    </div>
                                    <div className={`downArrow5 ${question5 ? "active" : ""}`}>˅</div>
                                </div>
                                <hr />
                            </div>
                            <div className={`row question5 ${question5 ? "active" : ""}`}>
                                {changeLanguage ? (
                                    <>
                                        <ul>
                                            <li>Konsultasi Gratis – Hubungi kami untuk mendiskusikan kebutuhan Anda.</li>
                                            <li>Assessment – Kami akan melakukan analisis terhadap sistem IT Anda.</li>
                                            <li>Proposal & Rekomendasi – Kami memberikan solusi yang sesuai.</li>
                                            <li>Implementasi & Support – Kami menjalankan solusi dengan dukungan 24/7.</li>
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <ul>
                                            <li>Free Consultation – Contact us to discuss your needs.</li>
                                            <li>Assessment – We will analyze your IT systems.</li>
                                            <li>Proposal & Recommendations – We provide tailored solutions.</li>
                                            <li>Implementation & Support – We execute solutions with 24/7 support.</li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="col">
                    <div className="col d-flex justify-content-center align-items-center anyFAQ">
                        {changeLanguage
                            ? "Ada pertanyaan lain?"
                            : "Any more questions?"}
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        {changeLanguage
                            ? "Hubungi kami untuk lebih lanjut."
                            : "If you still have questions, give us a shout!"}
                    </div>    <div className="col wrapButtonFAQRight d-flex justify-content-center align-items-center">
                        <button className="contactUsFAQ" onClick={sendEmail}>{changeLanguage ? "Kontak Kami" : "Contact Us"}</button>
                        <button className="getStartedFAQ">{changeLanguage ? "Memulai" : "Get Started"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FAQ;