import React from "react";
import logo from "../../../images/logo.png";



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link me-4 active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-4" href="/doctors">
                Doctors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-4" href="services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-4" href="/admin">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-4" href="blogs">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-4" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-4" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
