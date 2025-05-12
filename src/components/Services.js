import { useEffect } from "react";

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

export default function Services() {
    const servicesData = [
        {
            title: "SOFTWARE DEVELOPMENT",
            desc: "Aplikasi web dan mobile yang inovatif, aman, skalabel, responsif, user-friendly, dan efisien.",
            img: img1
        },
        {
            title: "CYBER SECURITY",
            desc: "Perlindungan dari ancaman siber dengan layanan Vulnerability Assessment & Penetration Testing (Pentest) serta keamanan jaringan.",
            img: img2
        },
        {
            title: "IT MANAGED & CONSULTING",
            desc: "Layanan perencanaan, implementasi, dan pemeliharaan yang andal. Dari strategi IT hingga pemantauan 24/7 dengan lancar dan efisien.",
            img: img3
        },
        {
            title: "DATA ANALYTICS & AI SOLUTIONS",
            desc: "Layanan mengubah data menjadi wawasan berharga dengan solusi Data Analytics & Artificial Intelligence, menganalisa tren dan mengotomatisasi proses menggunakan teknologi AI.",
            img: img4
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
                console.log(maxHeight);
            });
        };

        matchHeight();

        window.addEventListener("resize", matchHeight);

        return () => {
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

    return (
        <>
            <div className="sloganAndService">
                <Slogan />
                <div className="services-section">
                    <div className="services-section-1">
                        {servicesData.map((service, index) => (
                            <div className="services-section-1-box" key={index}>
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
        </>
    );
}
