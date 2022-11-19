import Grid from '@mui/material/Grid';

const SpecialMenu = () => {
    return (
        <div className='section section-special'>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <div className="heading">
                        <span>Hot Offer</span>
                        <h3>Special For Today</h3>
                    </div>
                    <div className="menu-card menu-card--text">
                        <div className="menu-card__item">
                            <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img1.jpg" alt="" />
                        </div>
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
                        <div className="menu-card__item">
                            <img src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img2.jpg" alt="" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SpecialMenu