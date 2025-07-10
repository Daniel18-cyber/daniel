import React from 'react';
import { Link } from 'react-scroll'; // Tambahkan ini
import '../index.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logod"></div>
        <div className="logo">Daniel</div>
        <ul className="nav-links">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
