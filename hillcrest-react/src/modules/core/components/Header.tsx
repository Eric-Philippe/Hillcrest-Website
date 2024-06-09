import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageToggle from "../design/LanguageToggle";
import "./styles/Header.css";

const Header: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    window.innerWidth < 992
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            {!isSmallScreen && (
              <li className="nav-item dropdown-hover">
                <div
                  className="nav-item dropdown"
                  style={{ padding: "8px 0px", height: 41 }}
                >
                  {/* eslint-disable-next-line */}
                  <a
                    className={`dropdown-toggle link-light ${
                      currentPath.startsWith("/one_year_american")
                        ? "active"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
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
                      to="/one_week_stage"
                      style={{ color: "black" }}
                    >
                      {t("menu.programs_list.prepa_eng")}
                    </Link>
                  </div>
                </div>
              </li>
            )}
            {isSmallScreen && (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      currentPath === "/one_year_american" ? "active" : ""
                    }`}
                    to="/one_year_american"
                  >
                    {t("menu.programs_list.one_year")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      currentPath === "/one_week_stage" ? "active" : ""
                    }`}
                    to="/one_week_stage"
                  >
                    {t("menu.programs_list.prepa_eng")}
                  </Link>
                </li>
              </>
            )}
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
            <li className="nav-item language-toggle">
              <LanguageToggle />
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
