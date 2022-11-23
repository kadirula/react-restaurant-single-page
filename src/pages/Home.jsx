import React from 'react'
import { About, DeliciousMenu, Slider, SpecialMenu, PopularMenu, Gallery } from '../components'

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <SpecialMenu />
            <DeliciousMenu />
            <PopularMenu />
            <Gallery />
        </>
    )
}

export default Home