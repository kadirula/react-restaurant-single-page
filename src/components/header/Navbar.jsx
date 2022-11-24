import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)
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
          <div className={`navbar__menu ${isMobile ? 'show' : ''}`}>
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
          <div className="navbar__hamburger" onClick={() => setIsMobile(!isMobile)}>
            {
              isMobile ?
                <CloseOutlinedIcon className='navbar__hamburger-icon' />
                :
                <MenuOutlinedIcon className='navbar__hamburger-icon' />
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar