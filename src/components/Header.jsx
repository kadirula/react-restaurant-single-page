
import React from 'react'

/* Components */
import { Navbar, Topbar } from './index';

const Header = () => {
    return (
        <header className="header">
            
            <Topbar />
            <Navbar />
        </header>
    )
}

export default Header