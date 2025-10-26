import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import TitleCards from '../../components/TitleCards/TitleCards';
import logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_icon from '../../assets/profile_icon.png'
import dropdown_icon from '../../assets/dropdown_icon.png'

const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark') }
        else{
          navRef.current.classList.remove('nav-dark');
        }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
       <div className='navbar-left'>
          <img src={logo} alt='Logo' className='logo' />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li className="nav-item new-popular">
            New &amp; Popular
            <div className="new-popular-dropdown">
              <p>BlockBuster Movies</p>
              <p>TopRated Movies</p>
              <p>Upcoming Movies</p>
              <p>Top Picks For You</p>
            </div>
          </li>


            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
       </div>
       <div className='navbar-right'>
        <img src={search_icon} alt='Search Icon' className='icons' />
        <p>Kids</p>
        <img src={bell_icon} alt='Bell Icon' className='icons' />
        <div className="navbar-profile">
            <img src={profile_icon} alt='Profile Icon' className='profile' />
            <img src={dropdown_icon} alt='Dropdown Icon' className='dropdown-icon' />
            <div className="dropdown">
                <p>Sign Out</p>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar

