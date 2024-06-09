import { useTranslation } from "react-i18next";
import Page from "../core/design/Page";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <header className="dark-blue">
        <div className="container pt-4" id="header">
          <div className="row pt-5">
            <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
              <div className="text-center">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                  <img
                    src="assets/img/HLS.png"
                    width="210"
                    height="210"
                    alt="Logo"
                  />
                </div>
                <h1 className="fw-bold">Hillcrest</h1>
                <h3 className="fw-bold">{t("home.title")}</h3>
                <p
                  className="fw-bold text-gold mb-2"
                  style={{ fontSize: "17px" }}
                >
                  {t("home.subtitle")}
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div
                className="position-relative"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 45%",
                    transform: "translate3d(-15%, 65%, 0)",
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.8"
                    src="assets/img/globe.jpg"
                    style={{ margin: "0 16px" }}
                    alt="globe"
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 45%",
                    transform: "translate3d(-5%, 20%, 0)",
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.4"
                    src="assets/img/ny.png"
                    alt="ny"
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 80%",
                    transform: "translate3d(0, 10%, 0)",
                  }}
                >
                  <img
                    className="img-fluid"
                    id="stade-img"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.25"
                    src="assets/img/stade.jpg"
                    style={{ marginTop: "10px", width: "80%" }}
                    alt="stade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="assets/js/bold-and-dark.js"></script>
      </header>
      <section className="py-5"></section>
    </Page>
  );
};

export default Home;
