import Grid from '@mui/material/Grid';
import { Feature1, Feature2, Feature3, Chef, Hamburger, Pizza } from '../../utils/imageImport';

const About = () => {
    return (
        <div className='section section-about'>
            <span className="left-image">
                <img src={Hamburger} alt="Hamburger" />
            </span>
            <span className="right-image">
                <img src={Hamburger} alt="Hamburger" />
            </span>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <div className="heading">
                        <span>Our Story</span>
                        <h3>About Us</h3>
                    </div>
                    <div className='about-card'>
                        <div className="about-card__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries simply dummy text of the printing standard dummy text eve and typesetting.
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card__item">
                            <div className="feature-card__image">
                                <img src={Feature1} alt="Free Delivery" />
                            </div>
                            <div className="feature-card__text">
                                Free Delivery
                            </div>
                        </div>
                        <div className="feature-card__item">
                            <div className="feature-card__image">
                                <img src={Feature2} alt="Freshly Cooked" />
                            </div>
                            <div className="feature-card__text">
                                Freshly Cooked
                            </div>
                        </div>
                        <div className="feature-card__item">
                            <div className="feature-card__image">
                                <img src={Feature3} alt="24 Hours Support" />
                            </div>
                            <div className="feature-card__text">
                                24 Hours Support
                            </div>
                        </div>
                    </div>
                </Grid>
                {/* <Grid item md={5}>
                    <img src={Chef} alt="" style={{
                        width: '100%'
                    }} />
                </Grid> */}
            </Grid>
        </div>
    )
}

export default About