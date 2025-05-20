import { useEffect, useState, useRef } from "react";

import "../assets/style/services.css";
import img1 from "../assets/image/services-ikon-1.png"
import img2 from "../assets/image/services-ikon-2.png"
import img3 from "../assets/image/services-ikon-3.png"
import img4 from "../assets/image/services-ikon-4.png"

import icon1 from "../assets/image/service-solution-1.png"
import icon2 from "../assets/image/service-solution-2.png"
import icon3 from "../assets/image/service-solution-3.png"

import img from "../assets/image/services-sol.png"

import Slogan from "./Slogan";
import PricingModal from "./Pricing";

export default function Services() {

    const detectDevice = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        if (/Win/i.test(userAgent)) {
            return "Windows";
        }

        return "Other";
    };

    const device = detectDevice();

    const servicesData = [
        {
            title: "SOFTWARE DEVELOPMENT",
            desc: "Aplikasi web dan mobile yang inovatif, aman, skalabel, responsif, user-friendly, dan efisien.",
            img: img1,
            details: [
                {
                    cardTitle: "MOBILE APPS",
                    pointsTitle: ["Full Cycle Development", "Testing", "Maintenance"],
                    price: "Rp 30.000.000"
                },
                {
                    cardTitle: "WEBSITE",
                    pointsTitle: ["Full Cycle Development", "Testing", "Maintenance"],
                    price: "Rp 1.400.000"
                },
                {
                    cardTitle: "ERP",
                    pointsTitle: ["Full Cycle Development", "Testing", "Maintenance", "Installation"],
                    price: "Rp 99.000.000"
                }
            ]
        },
        {
            title: "CYBER SECURITY",
            desc: "Perlindungan dari ancaman siber dengan layanan Vulnerability Assessment & Penetration Testing (Pentest) serta keamanan jaringan.",
            img: img2,
            details: [
                {
                    cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) Website",
                    pointsTitle: ["Simulasi serangan", "Evaluasi sistem", "Laporan detail risiko", "Retest"],
                    price: "Rp 5.000.000"
                },
                {
                    cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) API",
                    pointsTitle: ["Simulasi serangan", "Evaluasi sistem", "Laporan detail risiko", "Retest"],
                    price: "Rp 12.000.000"
                },
                {
                    cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) Mobile Application",
                    pointsTitle: ["Simulasi serangan", "Evaluasi sistem", "Laporan detail risiko", "Retest"],
                    price: "Rp 35.000.000"
                }
            ]
        },
        {
            title: "IT MANAGED & CONSULTING",
            desc: "Layanan perencanaan, implementasi, dan pemeliharaan yang andal. Dari strategi IT hingga pemantauan 24/7 dengan lancar dan efisien.",
            img: img3,
            details: [
                {
                    cardTitle: "IT Consulting & Manage Service",
                    pointsTitle: ["Perancangan & Perencanaan Sistem", "Audit IT", "Efisiensi operasional"],
                    price: "Rp 250.000.000"
                },
                {
                    cardTitle: "IT Support",
                    pointsTitle: ["Support teknis", "Pemantauan sistem", "Testing"],
                    price: "Rp 75.000.000"
                },
                {
                    cardTitle: "Procurement of Technology Solution",
                    pointsTitle: ["Pengadaan asset TI", "Pengadaan Software", "Implementasi & Set Up Sistem", "Pengadaan Cloud Service"],
                    price: "Rp 15.000.000"
                }
            ]
        },
        {
            title: "DATA ANALYTICS & AI SOLUTIONS",
            desc: "Layanan mengubah data menjadi wawasan berharga dengan solusi Data Analytics & Artificial Intelligence, menganalisa tren dan mengotomatisasi proses menggunakan teknologi AI.",
            img: img4,
            details: [
                {
                    cardTitle: "Business Intelligence",
                    pointsTitle: ["Dashboard", "Visualisasi data", "Insight bisnis real-time"],
                    price: "Rp 15.000.000"
                },
                {
                    cardTitle: "Predictive Analytics",
                    pointsTitle: ["Analisa tren historis", "Forecasting", "Dashboard", "Analisis customer Behaviour"],
                    price: "Rp 45.000.000"
                },
                {
                    cardTitle: "Artificial Intelegent Development",
                    pointsTitle: ["Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
                    price: "Rp 75.000.000"
                }
            ]
        },
        {
            title: "Internet of Things",
            desc: "Kami menghadirkan solusi IoT inovatif yang membantu bisnis Anda meningkatkan efisiensi, mengoptimalkan proses, dan mengambil keputusan cepat berdasarkan data real-time. Dengan teknologi terpercaya dan pendekatan yang disesuaikan, kami pastikan transformasi digital Anda berjalan aman, efisien, dan berdampak nyata.",
            img: img4,
            details: [
                {
                    cardTitle: "Smart Home",
                    pointsTitle: ["Smart Access Control", "CCTV", "Smart Lighting"],
                    price: "Rp 7.500.000"
                },
                {
                    cardTitle: "Industri",
                    pointsTitle: ["Industrial Automation", "Assets Tracking"],
                    price: "Rp 125.000.000"
                },
                {
                    cardTitle: "Transportasi",
                    pointsTitle: ["Smart Parking", "Vehicle Diagnostic"],
                    price: "Rp 45.000.000"
                }
            ]
        },
        {
            title: "Fraud Detection System",
            desc: "Kami menghadirkan solusi fraud detection berbasis teknologi mutakhir yang mampu mengidentifikasi dan mencegah potensi penipuan secara real-time.",
            img: img4,
            details: [
                {
                    cardTitle: "Fraud System",
                    pointsTitle: ["Fraud Risk Assessment & Advisory", "Fraud Detection System Implementation", "Data Analytics untuk Fraud Detection"],
                    price: "Rp 125.000.000"
                }
            ]
        }
    ];

    const icons = [
        icon1, icon2, icon3
    ];

    useEffect(() => {
        const matchHeight = () => {
            const descBoxes = document.querySelectorAll(".services-section-1-box-desc");
            let maxHeight = 0;

            descBoxes.forEach(box => {
                box.style.height = "auto";
            });

            descBoxes.forEach(box => {
                if (box.offsetHeight > maxHeight) {
                    maxHeight = box.offsetHeight;
                }
            });

            descBoxes.forEach(box => {
                box.style.height = `${maxHeight}px`;
            });
        };

        const timeout = setTimeout(() => {
            matchHeight();
        }, 500);

        window.addEventListener("resize", matchHeight);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("resize", matchHeight);
        };
    }, []);

    // const fullText1 = "Kami menyediakan solusi IT yang dirancang untuk memenuhi kebutuhan unik di berbagai industri. Baik di sektor perbankan, kesehatan, e-commerce, manufaktur, pemerintahan, dan lainnya, layanan kami memastikan keamanan, efisiensi, dan skalabilitas dalam operasional bisnis Anda.";
    // const fullText2 = "Dengan pendekatan berbasis best practices dan standar industri, solusi kami dapat dengan mudah diadaptasi untuk menghadapi tantangan spesifik. Di setiap sekt or, membantu meningkatkan produktivitas, kepatuhan regulasi, dan perlindungan terhadap ancaman digital.";

    const highlightWords = ["solusi", "memenuhi", "kebutuhan", "keamanan", "efisiensi", "skalabilitas", "best", "practices", "standar", "industri", "mudah", "diadaptasi", "meningkatkan", "produktivitas", "kepatuhan", "regulasi", "perlindungan"];

    const highlightText = (text, highlights) => {
        const parts = text.split(/(\s+)/);

        return parts.map((word, index) => {
            const cleanWord = word.toLowerCase().replace(/[.,]/g, "");
            if (highlights.includes(cleanWord)) {
                return (
                    <span key={index} className="services-section-2-card-text-largeText">
                        {word}
                    </span>
                );
            }
            return word;
        });
    };

    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleBoxServiceClick = (service) => {
        if (service.details) {
            setSelectedService(service);
            setIsModalOpen(true);
        }
    };


    const sectionRef = useRef(null);
    const [doneLook, setDoneLook] = useState(false)
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (device == "iOS") return;
        if (doneLook) return;

        const diagramEl = sectionRef.current;
        if (!diagramEl) return;

        const handleWindowScroll = () => {
            const rect = diagramEl.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                document.body.style.overflow = "hidden";

            } else {
                document.body.style.overflow = "";
            }
        };

        window.addEventListener("scroll", handleWindowScroll);
        window.addEventListener("resize", handleWindowScroll);

        return () => {
            window.removeEventListener("scroll", handleWindowScroll);
            window.removeEventListener("resize", handleWindowScroll);
            document.body.style.overflow = "";
        };
    }, [doneLook]);


    useEffect(() => {
        if (device == "iOS") return;
        if (doneLook) return;

        const diagramEl = sectionRef.current;
        if (!diagramEl) return;

        if (currentStep == arr.length) {
            setDoneLook(true);
        }

        const handleWheel = (e) => {
            e.preventDefault();
            nextStep();
        };

        diagramEl.addEventListener("wheel", handleWheel, { passive: false });
        diagramEl.addEventListener("touchstart", handleWheel, { passive: false });
        diagramEl.addEventListener("touchend", handleWheel, { passive: false });

        return () => {
            diagramEl.removeEventListener("wheel", handleWheel);
            diagramEl.removeEventListener("touchstart", handleWheel);
            diagramEl.removeEventListener("touchend", handleWheel);
        };
    }, [currentStep]);


    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };


    const arr = [
        "Kami menyediakan solusi IT yang dirancang untuk memenuhi kebutuhan unik di berbagai industri. ",
        "Baik di sektor perbankan, kesehatan, e-commerce, manufaktur, pemerintahan, dan lainnya, layanan kami memastikan keamanan, efisiensi, dan skalabilitas dalam operasional bisnis Anda. ",
        "Dengan pendekatan berbasis best practices dan standar industri, solusi kami dapat dengan mudah diadaptasi untuk menghadapi tantangan spesifik. ",
        "Di setiap sekt or, membantu meningkatkan produktivitas, kepatuhan regulasi, dan perlindungan terhadap ancaman digital. "
    ]
    return (
        <>
            <div className="sloganAndService">
                <Slogan />
                <div className="services-section">
                    <div className="services-section-1" id="ourPlan">
                        {servicesData.map((service, index) => (
                            <div className="services-section-1-box"
                                key={index}
                                onClick={() => handleBoxServiceClick(service)}>
                                <div className="services-section-1-box-img">
                                    <img src={service.img} alt={`${service.title} Icon`} />
                                </div>
                                <div className="services-section-1-box-desc">
                                    <h6>{service.title}</h6>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="services-section-2" ref={sectionRef}>
                        <div className="services-section-2-card">
                            <div className="services-section-2-card-icon">
                                {icons.map((icon, index) => (
                                    <img key={index} src={icon} />
                                ))}
                            </div>
                            <div className="services-section-2-card-text textSection">

                                {
                                    device != "iOS" ?
                                        arr.slice(0).map((text, index) => (
                                            <b key={index} className={`textLine ${currentStep > index ? "visible" : ""}`}>
                                                {highlightText(text, highlightWords)}
                                            </b>
                                        ))
                                        : arr.map((text, index) => (
                                            <b key={index} className={`textLine visible`}>
                                                {highlightText(text, highlightWords)}
                                            </b>
                                        ))
                                }

                            </div>
                        </div>
                        <div className="services-section-2-desc">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="waveService">
                <div className="circleHalfWave1"></div>
                <div className="circleHalfWave2"></div>
            </div>
            <PricingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
            />
        </>
    );
}
