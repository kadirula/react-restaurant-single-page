import React from 'react'
import { About, DeliciousMenu, Slider, SpecialMenu, PopularMenu } from '../components'

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <SpecialMenu />
            <DeliciousMenu />
            <PopularMenu />
        </>
    )
}

export default Home