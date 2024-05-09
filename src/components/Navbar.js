import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/iona-logo.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Ensemble Iona" />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && 'is-active'}`}
            aria-expanded={isActive}
            aria-label="navigation"
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && 'is-active'
          }`}
        >
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="navbar-item" style={{ padding: '0px' }}>
            <Link className="navbar-item" to="/concerts">
              Concerts
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: '0px' }}>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: '0px' }}>
            <Link className="navbar-item" to="/media">
              Media
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: '0px' }}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: '0px' }}>
            <Link className="navbar-item" to="/give">
              Give
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
