import { Feature1, Feature2, Feature3 } from '../../utils/imageImport';
import { Fade } from 'react-reveal';


const Feature = () => {
    return (
        <div className="feature-card">
            <Fade left>
                <div className="feature-card__item">
                    <div className="feature-card__image">
                        <img src={Feature1} alt="Free Delivery" />
                    </div>
                    <div className="feature-card__text">
                        Free Delivery
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="feature-card__item">
                    <div className="feature-card__image">
                        <img src={Feature2} alt="Freshly Cooked" />
                    </div>
                    <div className="feature-card__text">
                        Freshly Cooked
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="feature-card__item">
                    <div className="feature-card__image">
                        <img src={Feature3} alt="24 Hours Support" />
                    </div>
                    <div className="feature-card__text">
                        24 Hours Support
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Feature