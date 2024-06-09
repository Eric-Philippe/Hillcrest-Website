import { useTranslation } from "react-i18next";
import Page from "../core/design/Page";

const About = () => {
  const { t } = useTranslation();

  return (
    <Page title={t("pages.about")}>
      <section className="py-5">
        <div className="container py-5">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h3 className="fw-bold">{t("menu.about")}</h3>
            </div>
          </div>
          <div
            className="row mb-4 mb-lg-5"
            style={{
              marginTop: "-16px",
              marginBottom: "73px",
              paddingBottom: "31px",
            }}
          >
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <img
                src="../assets/img/HLS.png"
                width="210"
                height="210"
                alt="Logo"
              />
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div className="col mb-5">
              <img
                className="rounded img-fluid shadow"
                src="../assets/img/association-loi-1901.jpg"
                alt="association"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">Association 1901</h5>
                <p className="text-muted mb-4">{t("about.1901")}</p>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <div className="col order-md-last mb-5">
              <img
                className="rounded img-fluid shadow"
                src="../assets/img/selfie.jpg"
                alt="selfie"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">{t("about.mission_title")}</h5>

                <ul>
                  <p className="text-muted mb-4">
                    {t("about.mission_text")}
                    <br />
                    {t("about.list_title")}
                  </p>
                  <li className="text-muted">{t("about.values.sharing")}</li>
                  <li className="text-muted">{t("about.values.tolerance")}</li>
                  <li className="text-muted">{t("about.values.respect")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default About;
