import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./ResultsCard.module.css";

export type ResultsCardType = {
  className?: string;
  resultsImage?: string;
  kingBedStandard?: string;
  holidayInnExpre?: string;

  /** Style props */
  kingBedStandardWidth?: CSSProperties["width"];
  kingBedStandardDisplay?: CSSProperties["display"];
};

const ResultsCard: FunctionComponent<ResultsCardType> = ({
  className = "",
  resultsImage,
  kingBedStandard,
  kingBedStandardWidth,
  kingBedStandardDisplay,
  holidayInnExpre,
}) => {
  const kingBedStandardStyle: CSSProperties = useMemo(() => {
    return {
      width: kingBedStandardWidth,
      display: kingBedStandardDisplay,
    };
  }, [kingBedStandardWidth, kingBedStandardDisplay]);

  return (
    <div className={[styles.resultsCard, className].join(" ")}>
      <img
        className={styles.resultsImageIcon}
        loading="lazy"
        alt=""
        src={resultsImage}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardDetailsParent}>
          <div className={styles.cardDetails}>
            <div className={styles.attributes}>
              <div
                className={styles.kingBedStandard}
                style={kingBedStandardStyle}
              >
                {kingBedStandard}
              </div>
              <h3 className={styles.holidayInnExpre}>{holidayInnExpre}</h3>
              <div className={styles.reviewsContainer}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.div}>4.7</div>
                <div className={styles.reviews}>(1,136 reviews)</div>
              </div>
            </div>
            <div className={styles.locationDetails}>
              <div className={styles.stayDetails}>
                <b className={styles.s286}>$S 286</b>
                <div className={styles.priceContainer}>
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
          <img
            className={styles.videoIcon}
            loading="lazy"
            alt=""
            src="/video.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
