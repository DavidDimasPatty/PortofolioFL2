import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../assets/style/services.css";
import img1 from "../assets/image/services-ikon-1.png"
import img2 from "../assets/image/services-ikon-2.png"
import img3 from "../assets/image/services-ikon-3.png"
import img4 from "../assets/image/services-ikon-4.png"
import img5 from "../assets/image/services-ikon-5.png"
import img6 from "../assets/image/services-ikon-6.png"

import icon1 from "../assets/image/service-solution-1.png"
import icon2 from "../assets/image/service-solution-2.png"
import icon3 from "../assets/image/service-solution-3.png"

import imgIndo from "../assets/image/services-sol.png"
import imgInggris from "../assets/image/service-sol-1.png"

import Slogan from "./Slogan";
import PricingModal from "./Pricing";

export default function Services({ changeLanguage }) {

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

    let servicesData;

    if (changeLanguage) {
        servicesData = [
            {
                title: "PENGEMBANGAN PERANGKAT LUNAK",
                desc: "Pengembangan aplikasi web dan mobile yang inovatif, aman, skalabel, responsif, mudah digunakan, dan efisien.",
                img: img1,
                details: [
                    {
                        cardTitle: "APLIKASI MOBILE",
                        pointsTitle: ["Pengembangan Sistem Secara Menyeluruh", "Pengujian", "Revisi"],
                        price: "Rp 30.000.000",
                        discount: "y",
                        priceDiscount: "Rp 27.000.000"
                    },
                    {
                        cardTitle: "SITUS WEB",
                        pointsTitle: ["Pengembangan Sistem Secara Menyeluruh", "Pengujian", "Revisi"],
                        price: "Rp 1.400.000",
                        discount: "y",
                        priceDiscount: "Rp 1.260.000"
                    },
                    {
                        cardTitle: "ERP",
                        pointsTitle: ["Pengembangan Sistem Secara Menyeluruh", "Pengujian", "Revisi", "Instalasi"],
                        price: "Rp 99.000.000",
                        discount: "y",
                        priceDiscount: "Rp 89.100.000"
                    }
                ]
            },
            {
                title: "KEAMANAN SIBER",
                desc: "Solusi perlindungan terhadap ancaman siber melalui layanan Penilaian Kerentanan dan Pengujian Penetrasi (Pentest), serta keamanan jaringan yang komprehensif.",
                img: img2,
                details: [
                    {
                        cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) Situs Web",
                        pointsTitle: ["Simulasi Serangan", "Evaluasi Sistem", "Laporan Detail Risiko", "Retest"],
                        price: "Rp 5.000.000",
                        discount: "y",
                        priceDiscount: "Rp 3.500.000"
                    },
                    {
                        cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) API",
                        pointsTitle: ["Simulasi Serangan", "Evaluasi Sistem", "Laporan Detail Risiko", "Retest"],
                        price: "Rp 12.000.000",
                        discount: "y",
                        priceDiscount: "Rp 6.000.000"
                    },
                    {
                        cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) Aplikasi Mobile",
                        pointsTitle: ["Simulasi Serangan", "Evaluasi Sistem", "Laporan Detail Risiko", "Retest"],
                        price: "Rp 35.000.000",
                        discount: "y",
                        priceDiscount: "Rp 25.000.000"
                    }
                ]
            },
            {
                title: "MANAJEMEN & KONSULTASI IT",
                desc: "Layanan perencanaan, implementasi, dan pemeliharaan TI yang handal, mulai dari pengembangan strategi hingga pemantauan sistem 24/7 yang efektif dan efisien.",
                img: img3,
                details: [
                    {
                        cardTitle: "Konsultasi & Manajemen IT",
                        pointsTitle: ["Perancangan & Perencanaan Sistem", "Audit IT", "Efisiensi Operasional"],
                        price: "Rp 250.000.000",
                        discount: "y",
                        priceDiscount: "Rp 225.000.000"
                    },
                    {
                        cardTitle: "Dukungan IT",
                        pointsTitle: ["Dukungan Teknis", "Pemantauan Sistem", "Pengujian"],
                        price: "Rp 75.000.000",
                        discount: "y",
                        priceDiscount: "Rp 67.500.000"
                    },
                    {
                        cardTitle: "Pengadaan Solusi Teknologi",
                        pointsTitle: ["Pengadaan Aset TI", "Pengadaan Perangkat Lunak", "Implementasi & Setup Sistem", "Pengadaan Layanan Cloud"],
                        price: "Rp 15.000.000",
                        discount: "y",
                        priceDiscount: "Rp 13.500.000"
                    }
                ]
            },
            {
                title: "ANALITIK DATA & SOLUSI AI",
                desc: "Layanan yang mengubah data menjadi wawasan berharga melalui solusi Analitik Data dan Kecerdasan Buatan, menganalisis tren, dan mengotomatisasi proses bisnis dengan teknologi AI.",
                img: img4,
                details: [
                    {
                        cardTitle: "Business Intelligence",
                        pointsTitle: ["Dashboard", "Visualisasi Data", "Wawasan Bisnis Secara Real-Time"],
                        price: "Rp 15.000.000",
                        discount: "y",
                        priceDiscount: "Rp 13.500.000"
                    },
                    {
                        cardTitle: "Analitik Prediktif",
                        pointsTitle: ["Analisis Tren Historis", "Peramalan", "Dashboard", "Analisis Perilaku Pelanggan"],
                        price: "Rp 45.000.000",
                        discount: "y",
                        priceDiscount: "Rp 40.500.000"
                    },
                    {
                        cardTitle: "Pengembangan Kecerdasan Buatan",
                        pointsTitle: ["Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
                        price: "Rp 75.000.000",
                        discount: "y",
                        priceDiscount: "Rp 67.500.000"
                    }
                ]
            },
            {
                title: "INTERNET OF THINGS",
                desc: "Menyediakan solusi IoT inovatif yang membantu bisnis Anda meningkatkan efisiensi, mengoptimalkan proses, dan mendukung pengambilan keputusan cepat berbasis data real-time.",
                img: img5,
                details: [
                    {
                        cardTitle: "Smart Home",
                        pointsTitle: ["Kontrol Akses Pintar", "CCTV", "Pencahayaan Pintar"],
                        price: "Rp 7.500.000",
                        discount: "y",
                        priceDiscount: "Rp 6.750.000"
                    },
                    {
                        cardTitle: "Industri",
                        pointsTitle: ["Otomasi Industri", "Pelacakan Aset"],
                        price: "Rp 125.000.000",
                        discount: "y",
                        priceDiscount: "Rp 112.500.000"
                    },
                    {
                        cardTitle: "Transportasi",
                        pointsTitle: ["Parkir Pintar", "Diagnostik Kendaraan"],
                        price: "Rp 45.000.000",
                        discount: "y",
                        priceDiscount: "Rp 40.500.000"
                    }
                ]
            },
            {
                title: "SISTEM DETEKSI PENIPUAN",
                desc: "Solusi deteksi penipuan terkini yang mampu mengidentifikasi dan mencegah potensi penipuan secara real-time.",
                img: img6,
                details: [
                    {
                        cardTitle: "Sistem Deteksi Penipuan",
                        pointsTitle: ["Penilaian Risiko & Konsultasi Penipuan", "Implementasi Sistem Deteksi Penipuan", "Analitik Data untuk Deteksi Penipuan"],
                        price: "Rp 125.000.000",
                        discount: "y",
                        priceDiscount: "Rp 112.500.000"
                    }
                ]
            }
        ];
    } else {
        servicesData = [
            {
                title: "SOFTWARE DEVELOPMENT",
                desc: "Innovative, secure, scalable, responsive, user-friendly, and efficient web and mobile applications.",
                img: img1,
                details: [
                    {
                        cardTitle: "MOBILE APPS",
                        pointsTitle: ["Full Cycle Development", "Testing", "Revision"],
                        price: "Rp 30.000.000",
                        discount: "y",
                        priceDiscount: "Rp 27.000.000"
                    },
                    {
                        cardTitle: "WEBSITE",
                        pointsTitle: ["Full Cycle Development", "Testing", "Revision"],
                        price: "Rp 1.400.000",
                        discount: "y",
                        priceDiscount: "Rp 1.260.000"
                    },
                    {
                        cardTitle: "ERP",
                        pointsTitle: ["Full Cycle Development", "Testing", "Revision", "Installation"],
                        price: "Rp 99.000.000",
                        discount: "y",
                        priceDiscount: "Rp 89.100.000"
                    }
                ]
            },
            {
                title: "CYBER SECURITY",
                desc: "Protection against cyber threats through Vulnerability Assessment & Penetration Testing (Pentest) services and network security solutions.",
                img: img2,
                details: [
                    {
                        cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) Website",
                        pointsTitle: ["Attack Simulation", "System Evaluation", "Detailed Risk Report", "Detailed Risk Report"],
                        price: "Rp 5.000.000",
                        discount: "y",
                        priceDiscount: "Rp 3.500.000"
                    },
                    {
                        cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) API",
                        pointsTitle: ["Attack Simulation", "System Evaluation", "Detailed Risk Report", "Detailed Risk Report"],
                        price: "Rp 12.000.000",
                        discount: "y",
                        priceDiscount: "Rp 6.000.000"
                    },
                    {
                        cardTitle: "VAPT (Vulnerability Assessment & Penetration Testing) Mobile Application",
                        pointsTitle: ["Attack Simulation", "System Evaluation", "Detailed Risk Report", "Detailed Risk Report"],
                        price: "Rp 35.000.000",
                        discount: "y",
                        priceDiscount: "Rp 25.000.000"
                    }
                ]
            },
            {
                title: "IT MANAGED & CONSULTING",
                desc: "Reliable planning, implementation, and maintenance services from IT strategy development to seamless 24/7 monitoring with efficiency.",
                img: img3,
                details: [
                    {
                        cardTitle: "IT Consulting & Manage Service",
                        pointsTitle: ["System Design & Planning", "IT Audit", "Operational Efficiency"],
                        price: "Rp 250.000.000",
                        discount: "y",
                        priceDiscount: "Rp 225.000.000"
                    },
                    {
                        cardTitle: "IT Support",
                        pointsTitle: ["Technical Support", "System Monitoring", "Testing"],
                        price: "Rp 75.000.000",
                        discount: "y",
                        priceDiscount: "Rp 67.500.000"
                    },
                    {
                        cardTitle: "Procurement of Technology Solution",
                        pointsTitle: ["IT Asset Procurement", "Software Procurement", "System Implementation & Setup", "Cloud Service Procurement"],
                        price: "Rp 15.000.000",
                        discount: "y",
                        priceDiscount: "Rp 13.500.000"
                    }
                ]
            },
            {
                title: "DATA ANALYTICS & AI SOLUTIONS",
                desc: "Services that transform data into valuable insights with Data Analytics and Artificial Intelligence solutions, analyzing trends and automating processes using AI technology.",
                img: img4,
                details: [
                    {
                        cardTitle: "Business Intelligence",
                        pointsTitle: ["Dashboard", "Data Visualization", "Real-Time Business Insights"],
                        price: "Rp 15.000.000",
                        discount: "y",
                        priceDiscount: "Rp 13.500.000"
                    },
                    {
                        cardTitle: "Predictive Analytics",
                        pointsTitle: ["Historical Trend Analysis", "Forecasting", "Dashboard", "Customer Behavior Analysis"],
                        price: "Rp 45.000.000",
                        discount: "y",
                        priceDiscount: "Rp 40.500.000"
                    },
                    {
                        cardTitle: "Artificial Intelegent Development",
                        pointsTitle: ["Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
                        price: "Rp 75.000.000",
                        discount: "y",
                        priceDiscount: "Rp 67.500.000"
                    }
                ]
            },
            {
                title: "Internet of Things",
                desc: "We deliver innovative IoT solutions that help your business improve efficiency, optimize processes, and make swift decisions based on real-time data.",
                img: img5,
                details: [
                    {
                        cardTitle: "Smart Home",
                        pointsTitle: ["Smart Access Control", "CCTV", "Smart Lighting"],
                        price: "Rp 7.500.000",
                        discount: "y",
                        priceDiscount: "Rp 6.750.000"
                    },
                    {
                        cardTitle: "Industri",
                        pointsTitle: ["Industrial Automation", "Assets Tracking"],
                        price: "Rp 125.000.000",
                        discount: "y",
                        priceDiscount: "Rp 112.500.000"
                    },
                    {
                        cardTitle: "Transportasi",
                        pointsTitle: ["Smart Parking", "Vehicle Diagnostic"],
                        price: "Rp 45.000.000",
                        discount: "y",
                        priceDiscount: "Rp 40.500.000"
                    }
                ]
            },
            {
                title: "Fraud Detection System",
                desc: "We provide state-of-the-art fraud detection solutions capable of identifying and preventing potential fraud in real-time.",
                img: img6,
                details: [
                    {
                        cardTitle: "Fraud System",
                        pointsTitle: ["Fraud Risk Assessment & Advisory", "Fraud Detection System Implementation", "Data Analytics untuk Fraud Detection"],
                        price: "Rp 125.000.000",
                        discount: "y",
                        priceDiscount: "Rp 112.500.000"
                    }
                ]
            }
        ];
    }

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

    let highlightWords;

    if (changeLanguage) {
        highlightWords = ["solusi", "memenuhi", "kebutuhan", "keamanan", "efisiensi", "skalabilitas", "best", "practices", "standar", "industri", "mudah", "diadaptasi", "meningkatkan", "produktivitas", "kepatuhan", "regulasi", "perlindungan"];
    } else {
        highlightWords = ["it", "solutions", "unique", "needs", "industries", "security", "efficiency", "scalability", "best", "practices", "industry", "standards", "offerings", "adaptable", "productivity", "compliance", "protection"];
    }

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

    let arr;
    if (changeLanguage) {
        arr = [
            "Kami menyediakan solusi IT yang dirancang untuk memenuhi kebutuhan unik di berbagai industri. ",
            "Baik di sektor perbankan, kesehatan, e-commerce, manufaktur, pemerintahan, dan lainnya, layanan kami memastikan keamanan, efisiensi, dan skalabilitas dalam operasional bisnis Anda. ",
            "Dengan pendekatan berbasis best practices dan standar industri, solusi kami dapat dengan mudah diadaptasi untuk menghadapi tantangan spesifik. ",
            "Di setiap sektor, membantu meningkatkan produktivitas, kepatuhan regulasi, dan perlindungan terhadap ancaman digital. "
        ]
    } else {
        arr = [
            "We provide IT solutions designed to meet unique needs across various industries. ",
            "Whether in banking, healthcare, e-commerce, manufacturing, government sectors, or others, our services ensure security, efficiency, and scalability in your business operations. ",
            "Using best practices and industry standards, our offerings are easily adaptable to address specific challenges. ",
            "In every sector, we help improve productivity, regulatory compliance, and protection against digital threats. "
        ]
    }

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <>
            <div className="sloganAndService">
                <Slogan />
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
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
                                <img src={changeLanguage ? imgIndo : imgInggris} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="waveService">
                <div className="circleHalfWave1"></div>
                <div className="circleHalfWave2"></div>
            </div>
            <PricingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
                changeLanguage={changeLanguage}
            />
        </>
    );
}
