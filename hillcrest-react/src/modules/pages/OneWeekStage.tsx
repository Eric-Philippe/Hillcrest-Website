import Page from "../core/design/Page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HillcrestSchedule from "../core/design/HillcrestSchedule";
import { useTranslation } from "react-i18next";

const OneWeekStage = () => {
  const { t } = useTranslation();

  return (
    <Page title={t("pages.programs")}>
      <section>
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-xl-8 text-center mx-auto">
              <h2 className="fw-bold">
                Préparation aux concours d'entrée des grandes écoles
              </h2>
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
    </Page>
  );
};

export default OneWeekStage;
