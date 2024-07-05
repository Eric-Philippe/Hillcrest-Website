import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageToggle from "../design/LanguageToggle";
import "./styles/Header.css";
import { Container, Navbar } from "react-bootstrap";

const Header: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPath = window.location.pathname;

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      sticky="top"
      variant="dark-blue"
      className="navbar py-3"
      id="mainNav"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"
        >
          <img
            src="assets/img/HLS.png"
            width="50"
            height="50"
            alt="main-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggle"
          style={{ borderColor: "white" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <>
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
                    <div
                      className="dropdown-menu"
                      style={{ fontWeight: "bold" }}
                    >
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

            <Link
              className="btn btn-primary shadow"
              role="button"
              to="/contact"
            >
              {t("menu.contact")}
            </Link>
          </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
