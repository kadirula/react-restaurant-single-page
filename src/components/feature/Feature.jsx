import { Feature1, Feature2, Feature3 } from '../../utils/imageImport';
import { motion } from "framer-motion";


const Feature = () => {

    const featureItemAnimate = {
        offscreen: { x: 100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }

    return (
        <motion.div className="feature-card"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >
            <motion.div
                className="feature-card__item"
                variants={featureItemAnimate}
            >
                <div className="feature-card__image">
                    <img src={Feature1} alt="Free Delivery" />
                </div>
                <div className="feature-card__text">
                    Free Delivery
                </div>
            </motion.div>
            <motion.div
                className="feature-card__item"
                variants={featureItemAnimate}
            >
                <div className="feature-card__image">
                    <img src={Feature2} alt="Freshly Cooked" />
                </div>
                <div className="feature-card__text">
                    Freshly Cooked
                </div>
            </motion.div>
            <motion.div
                className="feature-card__item"
                variants={featureItemAnimate}
            >
                <div className="feature-card__image">
                    <img src={Feature3} alt="24 Hours Support" />
                </div>
                <div className="feature-card__text">
                    24 Hours Support
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Feature