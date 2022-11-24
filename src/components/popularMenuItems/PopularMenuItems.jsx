import { Fade } from 'react-reveal';

const PopularMenuItems = () => {
    return (
        <div className="pm-card">

            <Fade left>
                <div className="pm-card__item">
                    <div className="pm-card__image">
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img1.jpg" alt="" />
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
                        <a href='/' className="button button--dark">Order Now</a>
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className="pm-card__item">
                    <div className="pm-card__image">
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img1.jpg" alt="" />
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
                        <a href='/' className="button button--dark">Order Now</a>
                    </div>

                </div>
            </Fade>

            <Fade right>
                <div className="pm-card__item">
                    <div className="pm-card__image">
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img1.jpg" alt="" />
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
                        <a href='/' className="button button--dark">Order Now</a>
                    </div>

                </div>
            </Fade>
            
        </div>
    )
}

export default PopularMenuItems