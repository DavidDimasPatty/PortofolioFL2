import { useEffect, useState, useRef } from "react";

import "../assets/style/pricing.css";

const PricingModal = ({ isOpen, onClose, service, changeLanguage }) => {

    const [shouldRender, setShouldRender] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const titleRefs = useRef([]);
    const pointsRefs = useRef([]);

    const updateHeights = () => {
        setTimeout(() => {
            const titleHeights = titleRefs.current.map(el => el?.offsetHeight || 0);
            const pointsHeights = pointsRefs.current.map(el => el?.offsetHeight || 0);

            const maxTitleHeight = Math.max(...titleHeights);
            const maxPointsHeight = Math.max(...pointsHeights);

            // Apply minHeight via inline style
            titleRefs.current.forEach(el => {
                if (el) el.style.minHeight = `${maxTitleHeight}px`;
            });

            pointsRefs.current.forEach(el => {
                if (el) el.style.minHeight = `${maxPointsHeight}px`;
            });
        }, 100); // jeda agar layout stabil
    };

    useEffect(() => {
        if (isOpen && service) {
            setShouldRender(true);
            setTimeout(() => setIsVisible(true), 200);

            // Hitung scrollbar width
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.classList.add("modal-open");

            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }

            // Jalankan update height setelah layout muncul
            setTimeout(() => {
                updateHeights();
            }, 300);

            // Resize handler
            window.addEventListener("resize", updateHeights);

        } else {
            setIsVisible(false);

            const timeout = setTimeout(() => {
                setShouldRender(false);
                document.body.classList.remove("modal-open");
                document.body.style.paddingRight = ""; // Reset padding
            }, 300);

            return () => clearTimeout(timeout);
        }

        // Cleanup saat komponen unmount
        return () => {
            window.removeEventListener("resize", updateHeights);
            document.body.classList.remove("modal-open");
            document.body.style.paddingRight = "";
        };
    }, [isOpen, service]);

    if (!shouldRender) return null;

    return (
        <div className="pricing-section">
            <div
                className={`pricing-modal-overlay ${isVisible ? "show" : ""}`}
                onClick={onClose}
            >
                <div
                    className="pricing-modal-content"
                    onClick={(e) => e.stopPropagation()} // <-- mencegah modal tertutup saat klik di dalam
                >

                    <div className="pricing-modal-scroll">
                        <button className="pricing-modal-close" onClick={onClose}>
                            <span className="pricing-modal-close-arrow-left"></span>
                            <span className="pricing-modal-close-category-text">{service.title}</span>
                        </button>
                        <h2 className="pricing-modal-title">{changeLanguage ? "Pilih paket Anda" : "choose your plan"}</h2>

                        <div className="pricing-modal-cards">
                            {service.details?.map((item, idx) => (
                                <div key={idx} className="pricing-modal-card">
                                    <p className="pricing-modal-card-number">{String(idx + 1).padStart(2, "0")}</p>
                                    <h3
                                        className="pricing-modal-card-title"
                                        ref={(el) => (titleRefs.current[idx] = el)}
                                    >
                                        {item.cardTitle}
                                    </h3>
                                    <ul
                                        className="pricing-modal-card-points"
                                        ref={(el) => (pointsRefs.current[idx] = el)}
                                    >
                                        {item.pointsTitle.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="pricing-modal-card-line"></div>
                                    <div className="pricing-modal-card-desc1">{changeLanguage ? "Mulai dari" : "START FROM"}</div>
                                    <p className="pricing-modal-card-price">
                                        {item.discount === "y" ? (
                                            <>
                                                <span className="price-strike">{item.price}</span>
                                                <span className="price-discount">{item.priceDiscount}</span>
                                            </>
                                        ) : (
                                            item.price
                                        )}
                                    </p>
                                    <div className="pricing-modal-card-desc2">{changeLanguage ? "Silakan berdiskusi dengan tim kami untuk informasi lebih lanjut dan konsultasi ide Anda." : "Start to chat with our team for more detail or to consult your ideas!"}</div>
                                    <a
                                        href={`https://wa.me/62859106795228?text=${encodeURIComponent(
                                            `Halo, saya tertarik dengan paket "${item.cardTitle}" dari kategori ${service.title}. Bisa dibantu untuk informasi lebih lanjut?`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pricing-modal-card-btn"
                                    >
                                        <div className="pricing-modal-card-btn-text">{changeLanguage ? "Pilih Paket" : "Choose Plan"}</div>
                                    </a>

                                </div>
                            ))}
                        </div>
                        <div className="pricing-modal-footer">{changeLanguage ? "SEMUA YANG ANDA BUTUHKAN ADA DI DISINI!" : "EVERYTHING YOU NEED IS IN ONE PLACE!"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingModal;