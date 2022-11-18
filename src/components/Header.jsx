import { Container } from '@mui/material';
import React from 'react'

/* Components */
import { Navbar, Topbar } from './index';

const Header = () => {
    return (
        <header className="header">
            <Container maxWidth='lg'>
                <Topbar />
                <Navbar />
            </Container>
        </header>
    )
}

export default Header