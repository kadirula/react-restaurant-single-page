import Grid from '@mui/material/Grid';
import { Hamburger } from '../../utils/imageImport';
import { Feature, Heading } from '../index';
import { Fade } from 'react-reveal';

const About = () => {
    return (
        <>
            <Fade left>
                <span className="left-image">
                    <img src={Hamburger} alt="Hamburger" />
                </span>
            </Fade>
            <Fade right>
                <span className="right-image">
                    <img src={Hamburger} alt="Hamburger" />
                </span>
            </Fade>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item xs={12}>
                    <Fade top>
                        <Heading
                            subtitle="Our Story"
                            title="About Us"
                        />
                    </Fade>

                    <div className='about-card'>
                        <div className="about-card__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries simply dummy text of the printing standard dummy text eve and typesetting.
                        </div>
                    </div>

                    <Feature />

                </Grid>
            </Grid>
        </>
    )
}

export default About