import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="/images/PairsAuto Logo Desktop.png"
              alt="PairsAuto Logo"
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/inventory"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Inventory&nbsp;<i className="fas fa-warehouse"></i>
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-items">
              <p>
                <i className="fas fa-phone"></i> : +1 (403) 800-1806
              </p>
            </li>
          </ul>
          {/* {button && (
            <Button buttonstyle="btn--outline">
              CarDeals4U&nbsp;<i className="fas fa-arrow-alt-circle-right"></i>
            </Button>
          )} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
