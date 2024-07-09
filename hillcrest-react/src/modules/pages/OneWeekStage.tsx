import Page from "../core/design/Page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HillcrestSchedule from "../core/design/HillcrestSchedule";
import { useTranslation } from "react-i18next";
import SliderComponent from "../core/components/Slider";

const OneWeekStage = () => {
  const { t } = useTranslation();

  const images = [
    "../assets/img/workroom/breakroom.jpg",
    "../assets/img/workroom/hall1.jpg",
    "../assets/img/workroom/hall2.jpg",
    "../assets/img/workroom/room1.jpg",
    "../assets/img/workroom/room2.jpg",
    "../assets/img/workroom/room3.jpg",
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
                Préparation aux concours d'entrée des grandes écoles
              </h2>
              <br />
              <h3 className="fw-bold">
                Préparation intensive aux épreuves d'anglais
              </h3>
              <img
                src="../assets/img/flyer.png"
                alt="One Year Stage"
                className="img-fluid mt-5"
                style={{
                  width: window.innerWidth < 768 ? "100% " : "60%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-xl-8 text-center mx-auto">
              <h2 className="fw-bold">
                Programme de la préparation aux concours
              </h2>
              <HillcrestSchedule />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-xl-8 text-center mx-auto">
              <h2 className="fw-bold">Inscription à la préparation</h2>
              <p className="fw-bold">
                Pour vous inscrire à la préparation, veuillez remplir le
                formulaire ci-dessous. Nous vous contacterons dans les plus
                brefs délais. Vous pouvez également vous rendre sur le
                formulaire en cliquant{" "}
                <a
                  href="https://forms.gle/4KvaJSV4eD2j9m6e7"
                  target="_blank"
                  rel="noreferrer"
                >
                  ici
                </a>
              </p>
            </div>
          </div>
        </div>
        <section className="col-xl-4 text-center mx-auto mb-5">
          <SliderComponent settings={settings} images={images} />
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScuPgmATKHwk6pyuli18KPzjw7IWgxgL2gzXohU8Z4jb8KcxA/viewform?embedded=true"
            width={window.innerWidth < 768 ? "100%" : "640"}
            height="1000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </Page>
  );
};

export default OneWeekStage;
