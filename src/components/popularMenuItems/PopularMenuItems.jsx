import { Fade } from 'react-reveal';
import { Link } from "react-scroll";
import { Popular1, Popular2, Popular3 } from '../../utils/imageImport';

const PopularMenuItems = () => {
    return (
        <div className="pm-card">

            <Fade left>
                <div className="pm-card__item">
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
                </div>
            </Fade>

            <Fade bottom>
                <div className="pm-card__item">
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

                </div>
            </Fade>

            <Fade right>
                <div className="pm-card__item">
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

                </div>
            </Fade>

        </div>
    )
}

export default PopularMenuItems