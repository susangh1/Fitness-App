import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import Home from "../../Container/Home/Home";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Rotate } from "react-awesome-reveal";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <Rotate>
      <div className="app__navbar-logo">
        <Link to ="/"><img src={images.Gym} alt="app logo" /></Link>
        
      </div>
      </Rotate>
      <ul className="app__navbar-links">
        <li className="p__opensans">
        <Link to="/features">Features</Link>
        </li>
        <li className="p__opensans">
        <Link to="/pricing">Pricing</Link>
        </li>
        <li className="p__opensans">
        <Link to="/class">Class</Link>
        </li>

        <li className="p__opensans">
          <Link to="/lifestyle">Lifestyle</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/login" className="p__opensans">
          Log In / Register
        </Link>
      </div>
      <div className="app__navbar-login">
        <Link to ="/booktable" className="p__opensans">
          Book Table
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center ">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#Features">Features</a>
              </li>
              <li className="p__opensans">
                <a href="#Pricing">Pricing</a>
              </li>
              <li className="p__opensans">
                <a href="#Download">Download</a>
              </li>
              <li className="p__opensans">
                <a href="#Class">Class</a>
              </li>
              <li className="p__opensans">
                <a href="#LIfestyle">Lifestyle</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
