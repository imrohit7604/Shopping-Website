import React from "react";
//import Logo from "/images/logo.png";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <div className="brand" tabIndex="0">
          <img style={{ width: "9rem" }} src="/images/logo.png" />
        </div>

        <nav>
          <div className="auth-container">
            <ul className="nav-links">
              <li>
                <Link to="/login">SignIn</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="navg-container">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
            <Cart />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
