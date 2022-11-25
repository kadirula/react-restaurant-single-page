import { Link } from "react-scroll";
import { Popular1, Popular2, Popular3 } from '../../utils/imageImport';
import { motion } from "framer-motion";

const PopularMenuItems = () => {

    const popularMenuItemAnimate = {
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

    return (
        <motion.div className="pm-card"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >

            <motion.div
                className="pm-card__item"
                variants={popularMenuItemAnimate}
            >
                <div className="pm-card__image">
                    <img src={Popular1} alt="Popular" />
                </div>
                <div className="pm-card__info">
                    <div className="pm-card__price">
                        $20
                    </div>
                    <div className="pm-card__title">
                        Italian Pizza
                    </div>
                    <div className="pm-card__desc">
                        Tomato, Fresh Milk, Potatos Lorem Ipsum Is Simply Dummy Text
                    </div>
                    <Link className="button button--dark" smooth spy to="delicious">
                        View Menu
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="pm-card__item"
                variants={popularMenuItemAnimate}
            >
                <div className="pm-card__image">
                    <img src={Popular2} alt="Popular" />
                </div>
                <div className="pm-card__info">
                    <div className="pm-card__price">
                        $20
                    </div>
                    <div className="pm-card__title">
                        Italian Pizza
                    </div>
                    <div className="pm-card__desc">
                        Tomato, Fresh Milk, Potatos Lorem Ipsum Is Simply Dummy Text
                    </div>
                    <Link className="button button--dark" smooth spy to="delicious">
                        View Menu
                    </Link>
                </div>

            </motion.div>

            <motion.div
                className="pm-card__item"
                variants={popularMenuItemAnimate}
            >
                <div className="pm-card__image">
                    <img src={Popular3} alt="Popular" />
                </div>
                <div className="pm-card__info">
                    <div className="pm-card__price">
                        $20
                    </div>
                    <div className="pm-card__title">
                        Italian Pizza
                    </div>
                    <div className="pm-card__desc">
                        Tomato, Fresh Milk, Potatos Lorem Ipsum Is Simply Dummy Text
                    </div>
                    <Link className="button button--dark" smooth spy to="delicious">
                        View Menu
                    </Link>
                </div>

            </motion.div>

        </motion.div>
    )
}

export default PopularMenuItems