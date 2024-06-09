import React, { useState } from "react";
import Page from "../core/design/Page";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/Testimony.css";

const Testimony = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const { t } = useTranslation();

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <Page title={t("pages.testiomonials")}>
      <section className="py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="fw-bold">Ils témoignent</h2>
              <p className="text-muted">
                Après des voyages éducatifs enrichissants, les étudiants sont de
                retour et impatients de partager leurs témoignages inspirants
              </p>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div className="col mb-4">
              <div>
                <Link to="/testimony">
                  <img
                    className="rounded img-fluid shadow w-100 fit-cover"
                    src="../assets/img/sophie4.jpg"
                    style={{ height: "482px" }}
                    alt=""
                  />
                </Link>
                <div className="py-4"></div>
              </div>
            </div>
            <div className="col mb-4">
              <div>
                <div className="py-4">
                  <h4 className="fw-bold">Sophie&nbsp;</h4>
                  <h5>Période du 01/01/1234 au 02/02/2345</h5>
                  <h6>North School Penn High School</h6>
                  <p className="text-muted">
                    "En participant au programme d'échange de l'association
                    Hillcrest, j'ai eu l'opportunité de suivre une scolarité
                    atypique: en effet, grâce au lycée américainn j'ai pu
                    choisir de suivre des cours de Théatre, de Cuisine ou encore
                    d'Art Plastique. En finissant les cours à 14h30, j'ai
                    participé à de nombreuses activités au sein du lycée: nous
                    pouvions notamment intégrer des clubs, faire du sport ou
                    encore participer à la création de représentations
                    théâtrales et de spectacles en intégrant le Stage Crew, le
                    Cast ou le Costume Crew (j'ai personnellement adoré
                    participé au Stage Crew). Certaines ...
                  </p>
                  <button
                    id="openPopupButton"
                    className="btn btn-primary"
                    onClick={togglePopup}
                  >
                    Lire l'intégralité du texte
                  </button>
                  {popupVisible && (
                    <div id="popupOverlay" onClick={togglePopup}>
                      <div id="popupContent">
                        "En participant au programme d'échange de l'association
                        Hillcrest, j'ai eu l'opportunité de suivre une scolarité
                        atypique: en effet, grâce au lycée américainn j'ai pu
                        choisir de suivre des cours de Théatre, de Cuisine ou
                        encore d'Art Plastique. En finissant les cours à 14h30,
                        j'ai participé à de nombreuses activités au sein du
                        lycée: nous pouvions notamment intégrer des clubs, faire
                        du sport ou encore participer à la création de
                        représentations théâtrales et de spectacles en intégrant
                        le Stage Crew, le Cast ou le Costume Crew (j'ai
                        personnellement adoré participé au Stage Crew).
                        Certaines expériences inoubliables de cette année au
                        lycée furent le bal de fin d'année (Prom), ainsi que la
                        remise des diplômes (Graduation). A l'issue de mon année
                        je suis devenue bilingue.
                        <br />
                        Les élèves ont été très accueillants et je me suis fait
                        des amis sans aucune difficulté. Par ailleurs,
                        s'immerger dans une famille d'accueil est aussi une
                        expérience inédite et incroyable. J'ai beaucoup aimé
                        apprendre à connaître la mienne et je les considère
                        aujourd'hui comme ma deuxième famille.
                        <br />
                        D'autre part, en plus de m'immerger dans la culture
                        américaine j'ai également découvert d'autres cultures
                        via des clubs proposés au sein du lycée tels que les
                        German, Japanese, Spanish clubs et je me suis fait de
                        très bonne amies allemandes qui faisaient, elles aussi,
                        parti du programme d'échange.
                        <br />
                        En outre, je souhaite à chacun d'avoir la chance de
                        suivre une aussi belle et enrichissante expérience."
                        <br />
                        Sophie J.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Testimony;
