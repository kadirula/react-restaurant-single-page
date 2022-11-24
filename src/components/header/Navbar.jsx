import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setSticky(true);
      }
      else {
        setSticky(false)
      }
    });
  }, [])

  return (
    <div className={`navbar ${sticky ? 'sticky' : ''}`}>
      <Container maxWidth='lg'>
        <div className="navbar__wrapper">
          <Link className='navbar__logo' activeClass="active" smooth spy to="home">
            Restaurant
          </Link>
          <div className="navbar__menu">
            <Link className='navbar__menu-item' activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link className='navbar__menu-item' activeClass="active" smooth spy to="about">
              About Us
            </Link>
            <Link className='navbar__menu-item' activeClass="active" smooth spy to="special">
              Special
            </Link>
            <Link className='navbar__menu-item' activeClass="active" smooth spy to="delicious">
              Delicious
            </Link>
            <Link className='navbar__menu-item' activeClass="active" smooth spy to="popular">
              Popular
            </Link>
            <Link className='navbar__menu-item' activeClass="active" smooth spy to="gallery">
              Gallery
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar