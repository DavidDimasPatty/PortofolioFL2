import "../assets/style/pricing.css";

const PricingModal = ({ isOpen, onClose, service }) => {
    if (!isOpen || !service) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2 className="modal-title">{service.title}</h2>
                <p className="modal-desc">{service.desc}</p>

                <div className="modal-cards">
                    {service.details?.map((item, idx) => (
                        <div key={idx} className="modal-card">
                            <h3 className="modal-card-title">{item.cardTitle}</h3>
                            <ul className="modal-card-points">
                                {item.pointsTitle.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <p className="modal-card-price">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingModal;