import { Link } from "react-scroll";
import { Special1, Special2 } from '../../utils/imageImport';
import { motion } from "framer-motion";

const SpecialMenuItems = () => {

    const menuItemLeftAnimate = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }
    const menuItemBottomAnimate = {
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
    const menuItemRightAnimate = {
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
        <motion.div
            className="menu-card"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >
            <motion.div
                className="menu-card__item menu-card__item--image"
                variants={menuItemLeftAnimate}
            >
                <img src={Special1} alt="Special" />
            </motion.div>
            <motion.div
                className="menu-card__item menu-card__item--flex menu-card__item--border"
                variants={ menuItemBottomAnimate }
            >
                <div className="menu-card__info">
                    <div className="menu-card__title">
                        Italian Pizza
                    </div>
                    <div className="menu-card__discount">
                        40% Off
                    </div>
                    <div className="menu-card__price">
                        <span className="discount">$40</span>
                        $20
                    </div>
                    <div className="menu-card__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, reiciendis quis! Nemo odit pariatur numquam neque, corporis ipsa maiores tenetur porro nam? Asperiores quo cum, reprehenderit ea incidunt aut illo nisi rerum libero, enim maiores!
                    </div>
                    <Link className="button" smooth spy to="delicious">
                        View Menu
                    </Link>
                </div>
            </motion.div>
            <motion.div className="menu-card__item menu-card__item--image"
                variants={menuItemRightAnimate}
            >
                <img src={Special2} alt="Special" />
            </motion.div>
        </motion.div>
    )
}

export default SpecialMenuItems