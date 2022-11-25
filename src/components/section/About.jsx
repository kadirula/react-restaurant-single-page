import Grid from '@mui/material/Grid';
import { Hamburger } from '../../utils/imageImport';
import { Feature, Heading } from '../index';
import { motion } from "framer-motion";

const About = () => {

    const imageLeftAnimate = {
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
    const imageRightAnimate = {
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
    const aboutCardAnimate = {
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
        <>
            <motion.span
                className="left-image"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ staggerChildren: 0.3 }}
                variants={imageLeftAnimate}
            >
                <img src={Hamburger} alt="Hamburger" />
            </motion.span>
            <motion.span
                className="right-image"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ staggerChildren: 0.3 }}
                variants={imageRightAnimate}
            >
                <img src={Hamburger} alt="Hamburger" />
            </motion.span>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item xs={12}>
                    <Heading
                        subtitle="Our Story"
                        title="About Us"
                    />
                    <motion.div
                        className='about-card'
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ staggerChildren: 0.3 }}
                        variants={aboutCardAnimate}
                    >
                        <div className="about-card__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries simply dummy text of the printing standard dummy text eve and typesetting.
                        </div>
                    </motion.div>

                    <Feature />

                </Grid>
            </Grid>
        </>
    )
}

export default About