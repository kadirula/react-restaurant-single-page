import { sliders } from '../../data';

// Swiper
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Slider = () => {
    return (
        <Swiper
            className='slider'
            modules={[Pagination, Navigation, EffectFade]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect='fade'
        >
    {
        sliders.map((slider => (
            <SwiperSlide className='slider__item' key={slider.id}>
                <div className="slider__image">
                    <img src={slider.img} alt={slider.title} />
                </div>
                <div className="slider__info">
                    <span className="slider__subtitle">
                        {slider.subtitle}
                    </span>
                    <h3 className="slider__title">
                        {slider.title}
                    </h3>
                    <p className="slider__desc">
                        {
                            slider.desc
                        }
                    </p>
                    <div className="slider__buttons">
                        <a href="/" className='button'>
                            Book Table
                        </a>
                        <a href="/" className='button'>
                            View Menu
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        )))
    }
        </Swiper >
    )
}

export default Slider