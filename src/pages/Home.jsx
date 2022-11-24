import React from 'react'
import { About, DeliciousMenu, Slider, SpecialMenu, PopularMenu, Gallery } from '../components'

const Home = () => {
    return (
        <>
            <section id='home'>
                <Slider />
            </section>
            <section className='section section-about' id='about'>
                <About />
            </section>
            <section className='section section-special' id='special'>
                <SpecialMenu />
            </section>
            <section className='section section-delicious-menu' id='delicious'>
                <DeliciousMenu />
            </section>
            <section className='section section-popular-menu' id='popular'>
                <PopularMenu />
            </section>
            <section className='section section-gallery' id='gallery'>
                <Gallery />
            </section>
        </>
    )
}

export default Home