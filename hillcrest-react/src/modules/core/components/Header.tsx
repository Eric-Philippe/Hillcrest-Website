import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../design/LanguageSelector";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const currentPath = window.location.pathname;

  return (
    <nav
      className="navbar dark-blue navbar-expand-md sticky-top py-3"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-bezier"
            >
              <path
                fillRule="evenodd"
                d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
              ></path>
              <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
            </svg>
            <img
              src="assets/img/HLS.png"
              width="50"
              height="50"
              alt="main-logo"
            />
          </span>
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                to="/"
              >
                {t("menu.home")}
              </Link>
            </li>
            <li className="nav-item">
              <div
                className="nav-item dropdown"
                style={{ padding: "8px 0px", height: 41 }}
              >
                {/* eslint-disable-next-line */}
                <a
                  className={`dropdown-toggle link-light ${
                    currentPath.startsWith("/one_year_american") ? "active" : ""
                  }`}
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                >
                  {t("menu.programs")}
                </a>
                <div className="dropdown-menu" style={{ fontWeight: "bold" }}>
                  <Link
                    className="dropdown-item"
                    to="/one_year_american"
                    style={{ color: "black" }}
                  >
                    {t("menu.programs_list.one_year")}
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/one_year_stage"
                    style={{ color: "black" }}
                  >
                    {t("menu.programs_list.prepa_eng")}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/testimony" ? "active" : ""
                }`}
                to="/testimony"
              >
                {t("menu.testiomonials")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                {t("menu.about")}
              </Link>
            </li>
            <li className="nav-item">
              <LanguageSelector />
            </li>
          </ul>

          <Link className="btn btn-primary shadow" role="button" to="/contact">
            {t("menu.contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
