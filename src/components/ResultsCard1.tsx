import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./ResultsCard1.module.css";

export type ResultsCard1Type = {
  className?: string;
  resultsImage?: string;
  bedInQuad?: string;
  freehandLosAngeles?: string;
  prop?: string;
  reviews?: string;
  s198?: string;
};

const ResultsCard1: FunctionComponent<ResultsCard1Type> = ({
  className = "",
  resultsImage,
  bedInQuad,
  freehandLosAngeles,
  prop,
  reviews,
  s198,
}) => {
  return (
    <div className={[styles.resultsCard, className].join(" ")}>
      <img className={styles.resultsImageIcon} alt="" src={resultsImage} />
      <div className={styles.resultsCardInner}>
        <div className={styles.frameParent}>
          <div className={styles.bedInQuadParent}>
            <div className={styles.bedInQuad}>{bedInQuad}</div>
            <h3 className={styles.freehandLosAngeles}>{freehandLosAngeles}</h3>
            <div className={styles.videoDetails}>
              <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              <div className={styles.div}>{prop}</div>
              <div className={styles.reviews}>{reviews}</div>
            </div>
          </div>
          <div className={styles.featureStayParent}>
            <div className={styles.featureStay}>
              <b className={styles.s198}>{s198}</b>
              <div className={styles.featurePriceContainer}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <PrimaryButton
              primaryButtonPadding="12.5px 27.5px"
              primaryButtonWidth="164px"
              primaryButtonHeight="46px"
              searchFlights="View Details"
              searchFlightsWidth="109px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard1;
