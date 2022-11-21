import React from 'react'
import { About, DeliciousMenu, Slider, SpecialMenu } from '../components'

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <SpecialMenu />
            <DeliciousMenu />
        </>
    )
}

export default Home