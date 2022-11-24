import { Fade } from 'react-reveal';

const SpecialMenuItems = () => {
    return (
        <div className="menu-card">
            <Fade left>
                <div className="menu-card__item">
                    <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img1.jpg" alt="" />
                </div>
            </Fade>
            <Fade top>
                <div className="menu-card__item menu-card__item--flex menu-card__item--border">
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
                        <a href="/" className="button">
                            Order Now
                        </a>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="menu-card__item">
                    <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img2.jpg" alt="" />
                </div>
            </Fade>
        </div>
    )
}

export default SpecialMenuItems