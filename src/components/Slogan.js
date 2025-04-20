import "../assets/style/slogan.css";

export default function Slogan() {
    return (
        <div className="slogan-section">
            {/* Baris 1: WE ARE STRONG BY CHOICE */}
            <div className="d-flex justify-content-start align-items-stretch slogan-line-1">
                <div className="d-flex flex-column justify-content-center me-3">
                    <div className="slogan-small-text">WE</div>
                    <div className="slogan-small-text">ARE</div>
                </div>

                <div className="slogan-strong-text">STRONG<span className="slogan-small-text"> BY CHOICE,</span></div>
            </div>

            {/* Baris 2: SECURE BY DESIGN */}
            <div className="d-flex justify-content-start align-items-stretch slogan-line-2">
                <div className="slogan-secure-text">SECURE <span className="slogan-small-text">BY DESIGN</span></div>
            </div>

            {/* Baris 3: CTA */}
            <div className="d-flex align-items-center slogan-cta">
                <div className="slogan-arrow me-2">--{'>'}</div>
                <div className="slogan-blue-text slogan-small-text-2 me-1">See</div>
                <div className="slogan-small-text-2">our services.</div>
            </div>
        </div>
    );
}
