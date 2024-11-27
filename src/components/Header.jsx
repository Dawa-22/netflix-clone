import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import logo1 from './images/logo1.png'; // Desktop logo
import logo2 from './images/logo2.png'; // Mobile logo

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo1} alt="Netflix logo" className="logo-desktop" />
          <img src={logo2} alt="Netflix mobile logo" className="logo-mobile" />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <KeyboardArrowDownIcon />
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TvShows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Latest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MyList</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Browse by Languages</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><SearchIcon /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><NotificationsNoneIcon /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><PermIdentityIcon /></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#"><KeyboardArrowDownIcon /></a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
