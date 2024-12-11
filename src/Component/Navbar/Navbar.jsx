import React, { useState, useEffect, useRef } from 'react';
import logo from "/src/assets/Screenshot_20241211-112603 (1).png";
import { IoSearch } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isContactInfoVisible, setContactInfoVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const collapseRef = useRef(null);

  const toggleSearch = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setSearchVisible(!isSearchVisible);
  };

  const closeNavbar = () => {
    if (collapseRef.current && collapseRef.current.classList.contains('show')) {
      collapseRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      setContactInfoVisible(window.scrollY === 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} className='img-fluid' alt="Logo" width={300} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <SlMenu />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar" ref={collapseRef}>
            <div className="navbar-header mx-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/Home" className="nav-link nav-link1" onClick={closeNavbar}>HOME</a>
                </li>
                <li className="nav-item">
                  <a href="/Aboutus" className="nav-link nav-link1" onClick={closeNavbar}>ABOUT US</a>
                </li>
               
                <li className="nav-item dropdown">
  <a href="/Services" className="nav-link nav-link1" onClick={closeNavbar}>
    SERVICES
    <span className="dropdown-arrow"></span>
  </a>
  <ul className="dropdown-menu">
    <li><a href="/Service1" className="dropdown-item">Service 1</a></li>
    <li><a href="/Service2" className="dropdown-item">Service 2</a></li>
    <li><a href="/Service3" className="dropdown-item">Service 3</a></li>
  </ul>
</li>

<li className="nav-item dropdown">
  <a href="/Services" className="nav-link nav-link1" onClick={closeNavbar}>PROJECTS</a>
  <ul className="dropdown-menu">
    <li><a href="/Service1" className="dropdown-item">Project 1</a></li>
    <li><a href="/Service2" className="dropdown-item">Project 2</a></li>
    <li><a href="/Service3" className="dropdown-item">Project 3</a></li>
  </ul>
</li>
                <li className="nav-item">
                  <a href="/Contactus" className="nav-link nav-link1" onClick={closeNavbar}>CONTACT US</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link" to="/ContactUs" onClick={closeNavbar}>
                    <button className='btn btn-dark px-4 fw-bold rounded-pills'>Get A Quote</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-4 search-icon" href="#" onClick={toggleSearch}><IoSearch /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isSearchVisible && (
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      )}
    </div>
  );
}

export default Navbar;
