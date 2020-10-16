import React from "react";
import { Link } from "react-router-dom";
import creativeLogo from "../../../images/logos/creativeLogo.png"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
          <ul>
              <li>
                  <img style={{height:'40px'}} className="img-fluid" src={creativeLogo} alt=""/>
              </li>
          </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link mr-5" to="/"> Home</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link mr-5" to="/portfolio">Our Portfolio</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link mr-5" to="/team">Our Team</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link mr-5" to="contact">Contact Us</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link mr-5" to="/login"> <button className="btn btn-brand">Login</button> </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
