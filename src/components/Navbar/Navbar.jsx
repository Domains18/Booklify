import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="fw-7 fs-24 ls-1">Booklify</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <AiOutlineMenuFold
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                <BiUserCircle className="login-btn" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
