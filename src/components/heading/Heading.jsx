import { motion } from "framer-motion";

const Heading = ({ title, subtitle }) => {

    const headAnimate = {
        offscreen: { y: -100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }

    return (
        <motion.div
            className="heading"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
            variants={headAnimate}
        >
            <span>{subtitle}</span>
            <h3>{title}</h3>
        </motion.div>
    )
}

export default Heading