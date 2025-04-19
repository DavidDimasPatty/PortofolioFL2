import "../assets/style/slogan.css";

export default function Slogan() {
    return (
        <div className="slogan-section">
            {/* Baris 1: WE ARE STRONG BY CHOICE */}
            <div className="d-flex flex-wrap justify-content-between align-items-end slogan-line-1">
                <div className="d-flex flex-column justify-content-end me-3">
                    <div className="slogan-small-text">WE</div>
                    <div className="slogan-small-text">ARE</div>
                </div>

                <div className="slogan-strong-text">STRONG</div>

                <div className="slogan-small-text">BY CHOICE,</div>
            </div>

            {/* Baris 2: SECURE BY DESIGN */}
            <div className="d-flex justify-content-between align-items-end slogan-line-2 my-4">
                <div className="slogan-secure-text">SECURE</div>
                <div className="slogan-small-text">BY DESIGN</div>
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
