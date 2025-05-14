import { useEffect, useState } from "react";

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
    const servicesData = [
        {
            title: "SOFTWARE DEVELOPMENT",
            desc: "Aplikasi web dan mobile yang inovatif, aman, skalabel, responsif, user-friendly, dan efisien.",
            img: img1,
            details: [
                {
                    cardTitle: "MOBILE APPS",
                    pointsTitle: ["Akses fitur dasar", "Support Email", "Diskon 5%"],
                    price: "Rp 100.000"
                },
                {
                    cardTitle: "WEBSITE",
                    pointsTitle: ["Akses fitur dasar", "Support Email", "Diskon 5%"],
                    price: "Rp 100.000"
                },
                {
                    cardTitle: "ERP",
                    pointsTitle: ["Akses fitur dasar", "Support Email", "Diskon 5%"],
                    price: "Rp 100.000"
                },
                {
                    cardTitle: "PROFILLING",
                    pointsTitle: ["Akses fitur dasar", "Support Email", "Diskon 5%"],
                    price: "Rp 100.000"
                }
            ]
        },
        {
            title: "CYBER SECURITY",
            desc: "Perlindungan dari ancaman siber dengan layanan Vulnerability Assessment & Penetration Testing (Pentest) serta keamanan jaringan.",
            img: img2,
            details: [
                {
                    cardTitle: "Vulnerability Assessment",
                    pointsTitle: ["Pemindaian celah keamanan", "Laporan kerentanan", "Saran perbaikan"],
                    price: "Rp 150.000"
                },
                {
                    cardTitle: "Penetration Testing (Pentest)",
                    pointsTitle: ["Simulasi serangan", "Evaluasi sistem", "Laporan detail risiko"],
                    price: "Rp 300.000"
                },
                {
                    cardTitle: "Network Security",
                    pointsTitle: ["Firewall setup", "Intrusion Detection", "Keamanan VPN"],
                    price: "Rp 200.000"
                }
            ]
        },
        {
            title: "IT MANAGED & CONSULTING",
            desc: "Layanan perencanaan, implementasi, dan pemeliharaan yang andal. Dari strategi IT hingga pemantauan 24/7 dengan lancar dan efisien.",
            img: img3,
            details: [
                {
                    cardTitle: "IT Strategy Consulting",
                    pointsTitle: ["Perencanaan jangka panjang", "Audit IT", "Efisiensi operasional"],
                    price: "Rp 250.000"
                },
                {
                    cardTitle: "24/7 IT Support",
                    pointsTitle: ["Support teknis nonstop", "Pemantauan sistem", "Respons cepat masalah"],
                    price: "Rp 350.000"
                },
                {
                    cardTitle: "Infrastructure Management",
                    pointsTitle: ["Manajemen server & jaringan", "Backup rutin", "Skalabilitas tinggi"],
                    price: "Rp 300.000"
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
                    pointsTitle: ["Dashboard interaktif", "Visualisasi data", "Insight bisnis real-time"],
                    price: "Rp 200.000"
                },
                {
                    cardTitle: "Predictive Analytics",
                    pointsTitle: ["Model prediktif", "Analisa tren historis", "Forecasting akurat"],
                    price: "Rp 300.000"
                },
                {
                    cardTitle: "AI Automation",
                    pointsTitle: ["Otomatisasi proses", "Chatbot cerdas", "Machine learning pipeline"],
                    price: "Rp 400.000"
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

    const fullText1 = "Kami menyediakan solusi IT yang dirancang untuk memenuhi kebutuhan unik di berbagai industri. Baik di sektor perbankan, kesehatan, e-commerce, manufaktur, pemerintahan, dan lainnya, layanan kami memastikan keamanan, efisiensi, dan skalabilitas dalam operasional bisnis Anda.";
    const fullText2 = "Dengan pendekatan berbasis best practices dan standar industri, solusi kami dapat dengan mudah diadaptasi untuk menghadapi tantangan spesifik. Di setiap sekt or, membantu meningkatkan produktivitas, kepatuhan regulasi, dan perlindungan terhadap ancaman digital.";

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

    return (
        <>
            <div className="sloganAndService">
                <Slogan />
                <div className="services-section">
                    <div className="services-section-1">
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
                    <div className="services-section-2">
                        <div className="services-section-2-card">
                            <div className="services-section-2-card-icon">
                                {icons.map((icon, index) => (
                                    <img key={index} src={icon} />
                                ))}
                            </div>
                            <span className="services-section-2-card-text">
                                {highlightText(fullText1, highlightWords)}
                                <br />
                                {highlightText(fullText2, highlightWords)}
                            </span>
                        </div>
                        <div className="services-section-2-desc">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </div>
            
            <PricingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
            />
        </>
    );
}
