import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={`${import.meta.env.BASE_URL}`}>
          <img
            src={`${import.meta.env.BASE_URL}/nutriconmeal_logo.png`}
            alt="logotipo"
          />
          Nutriconmeal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href={`${import.meta.env.BASE_URL}`}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`${import.meta.env.BASE_URL}#about`}
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`${import.meta.env.BASE_URL}#contact`}
              >
                Contáctenos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`${import.meta.env.BASE_URL}blog`}
                id="blog"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
