import Grid from '@mui/material/Grid';

const PopularMenu = () => {
    return (
        <div className='section section-popular-menu'>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <div className="heading">
                        <span>You love</span>
                        <h3>Popular Dishes</h3>
                    </div>
                    <div className="pm-card">
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
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default PopularMenu