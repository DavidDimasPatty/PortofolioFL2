import "../assets/style/slogan.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Slogan() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div className="slogan-section">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}>
                <span className="slogan-line">
                    <span className="slogan-we-are">
                        <span>WE</span>
                        <span>ARE</span>
                    </span>
                    <span className="slogan-large">STRONG</span>
                    <span className="slogan-small">BY</span>
                    <span className="slogan-small">CHOICE,</span>
                </span>
                
                <span className="slogan-line">
                    <span className="slogan-large">SECURE</span>
                    <span className="slogan-small">BY</span>
                    <span className="slogan-small">DESIGN</span>
                </span>
            </motion.div>
        </div>
    );
}
