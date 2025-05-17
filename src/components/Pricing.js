import { useEffect, useState } from "react";

import "../assets/style/pricing.css";

const PricingModal = ({ isOpen, onClose, service }) => {

    const [shouldRender, setShouldRender] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen && service) {
            setShouldRender(true);
            // biar transition bisa jalan
            setTimeout(() => setIsVisible(true), 200);
            document.body.classList.add("modal-open");
        } else {
            setIsVisible(false);
            // tunggu efek keluar selesai baru hapus
            const timeout = setTimeout(() => {
                setShouldRender(false);
                document.body.classList.remove("modal-open");
            }, 300); // sesuaikan dengan transition CSS

            return () => clearTimeout(timeout);
        }
    }, [isOpen, service]);

    if (!shouldRender) return null;

    return (
        <div className="pricing-section">
            <div className={`pricing-modal-overlay ${isVisible ? "show" : ""}`}>
                <div className="pricing-modal-content">
                    <div className="pricing-modal-scroll">
                        <button className="pricing-modal-close" onClick={onClose}>
                            <span className="pricing-modal-close-arrow-left"></span>
                            <span className="pricing-modal-close-category-text">{service.title}</span>
                        </button>
                        <h2 className="pricing-modal-title">choose your plan</h2>

                        <div className="pricing-modal-cards">
                            {service.details?.map((item, idx) => (
                                <div key={idx} className="pricing-modal-card">
                                    <p className="pricing-modal-card-number">{String(idx + 1).padStart(2, "0")}</p>
                                    <h3 className="pricing-modal-card-title">{item.cardTitle}</h3>
                                    <ul className="pricing-modal-card-points">
                                        {item.pointsTitle.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="pricing-modal-card-line"></div>
                                    <div className="pricing-modal-card-desc1">START FROM</div>
                                    <p className="pricing-modal-card-price">{item.price}</p>
                                    <div className="pricing-modal-card-desc2">Start to chat with our team for more detail or to consult your ideas!</div>
                                    <div className="pricing-modal-card-btn">
                                        <div className="pricing-modal-card-btn-text">Choose Plan</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pricing-modal-footer">EVERYTHING YOU NEED IS IN ONE PLACE!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingModal;