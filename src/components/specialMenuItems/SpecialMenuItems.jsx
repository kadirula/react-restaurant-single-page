import { Fade } from 'react-reveal';
import { Link } from "react-scroll";
import { Special1, Special2 } from '../../utils/imageImport';

const SpecialMenuItems = () => {
    return (
        <div className="menu-card">
            <Fade left>
                <div className="menu-card__item menu-card__item--image">
                    <img src={Special1} alt="Special" />
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
                        <Link className="button" smooth spy to="delicious">
                            View Menu
                        </Link>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="menu-card__item menu-card__item--image">
                <img src={Special2} alt="Special" />
                </div>
            </Fade>
        </div>
    )
}

export default SpecialMenuItems