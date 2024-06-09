import Page from "../core/design/Page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

import "./styles/OneYearAmerican.css";

const OneYearAmerican = () => {
  const { t } = useTranslation();

  // Array containing paths to your images
  const images = [
    "../assets/img/north_penn.jpg",
    "../assets/img/graduation.jpg",
    "../assets/img/gymnasium.jpg",
    "../assets/img/musicclass.jpg",
    "../assets/img/tenniscourts.jpg",
    "../assets/img/swimmingpool.jpg",
    "../assets/img/amphi.jpg",
  ];

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Page title={t("pages.programs")}>
      <section>
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-xl-8 text-center mx-auto">
              <h2 className="fw-bold">
                Une année scolaire dans un lycée américain
              </h2>
              <div className="margin-x-5 mt-5">
                <p className="text-muted" style={{ textAlign: "left" }}>
                  Notre lycée partenaire pour l'échange d'un an se situe parmi
                  les 10 meilleurs établissements américains à 50 km de
                  Philadelphie, berceau de la constitution américaine.
                  <br />
                  Il s'adresse à un élève français du lycée Ozenne, Toulouse qui
                  souhaiterait partir à la fin de la Seconde ou à la fin de la
                  Première.
                  <br />
                  L'élève français part fin août et revient fin juin.
                  <br />
                  Le suivi pédagogique est encadré à la fois par l'association
                  Hillcrest et par les responsables locaux américains.
                  <br />
                  L'élève est placé sur le niveau Terminale (Senior Year) avec
                  des cours obligatoires et d'autres en fonction des EDS
                  choisies dans le cursus français.
                  <br />
                  L'élève français fait donc un lycée en 4 ans. Cette année à
                  l'étranger comptera dans son dossier Parcoursup.
                  <br />
                  L'élève revient bilingue.
                  <br />
                  Le profil de l'élève pour ce programme est: son ouverture
                  d'esprit, son autonomie, sa curiosité, également les
                  appréciations de ses enseignants qui doivent refléter un élève
                  respectueux et acteur de ses apprentissages.
                  <br />
                  Il s'agit là d'une expérience unique pour le jeune, riche sur
                  le plan culturel, linguistique et personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="col-md-8 col-xl-6 text-center mx-auto mb-5">
        <Slider {...settings} className="carousel-container">
          {images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </section>
    </Page>
  );
};

export default OneYearAmerican;
