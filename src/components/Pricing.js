import { useEffect } from "react";

import "../assets/style/pricing.css";

const PricingModal = ({ isOpen, onClose, service }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return (
        <div className="pricing-section">
            <div className="pricing-modal-overlay">
                <div className="pricing-modal-content">
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
    );
};

export default PricingModal;