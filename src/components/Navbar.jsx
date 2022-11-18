import { Container } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Container maxWidth='lg'>
        <div className="navbar__wrapper">
          <a href='/' className="navbar__logo">
            Restaurant
          </a>
          <div className="navbar__menu">
            <a href="/" className="navbar__menu-item">
              Home
            </a>
            <a href="/" className="navbar__menu-item">
              About Us
            </a>
            <a href="/" className="navbar__menu-item">
              Offer
            </a>
            <a href="/" className="navbar__menu-item">
              Menu
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar