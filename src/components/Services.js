import { useEffect } from "react";

import "../assets/style/services.css";
import img1 from "../assets/image/logoPT.png"
import img2 from "../assets/image/logoPT.png"
import img3 from "../assets/image/logoPT.png"
import img4 from "../assets/image/logoPT.png"

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

    useEffect(() => {
        const matchHeight = () => {
            const descBoxes = document.querySelectorAll(".services-box-desc");
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

        matchHeight();

        window.addEventListener("resize", matchHeight);

        return () => {
            window.removeEventListener("resize", matchHeight);
        };
    }, []);

    return (
        <div className="services-section">
            {servicesData.map((service, index) => (
                <div className="services-box" key={index}>
                    <div className="services-box-img">
                        <img src={service.img} alt={`${service.title} Icon`} width={100} />
                        <h6>{service.title}</h6>
                    </div>
                    <div className="services-box-desc">
                        <h6>{service.title}</h6>
                        <p>{service.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
