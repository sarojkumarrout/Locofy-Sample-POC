import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard.module.css";

export type FlightCardType = {
  className?: string;
  singaporeAirlines?: string;
  aM?: string;
  flightIcon?: string;
  aM1?: string;
  h55MNonStop?: string;
  vector1?: string;
  s730?: string;

  /** Style props */
  flightCardAlignSelf?: CSSProperties["alignSelf"];
  flightCardHeight?: CSSProperties["height"];
  frameDivWidth?: CSSProperties["width"];
  airlineSectionPadding?: CSSProperties["padding"];
  airlineSectionAlignSelf?: CSSProperties["alignSelf"];
  singaporeAirlinesMinWidth?: CSSProperties["minWidth"];
  singaporeAirlinesDisplay?: CSSProperties["display"];
  hourWidth?: CSSProperties["width"];
  aMAlignSelf?: CSSProperties["alignSelf"];
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  className = "",
  flightCardAlignSelf,
  flightCardHeight,
  frameDivWidth,
  airlineSectionPadding,
  airlineSectionAlignSelf,
  singaporeAirlines,
  singaporeAirlinesMinWidth,
  singaporeAirlinesDisplay,
  hourWidth,
  aM,
  aMAlignSelf,
  flightIcon,
  aM1,
  h55MNonStop,
  vector1,
  s730,
}) => {
  const flightCardStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: flightCardAlignSelf,
      height: flightCardHeight,
    };
  }, [flightCardAlignSelf, flightCardHeight]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const airlineSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: airlineSectionPadding,
      alignSelf: airlineSectionAlignSelf,
    };
  }, [airlineSectionPadding, airlineSectionAlignSelf]);

  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: singaporeAirlinesMinWidth,
      display: singaporeAirlinesDisplay,
    };
  }, [singaporeAirlinesMinWidth, singaporeAirlinesDisplay]);

  const hourStyle: CSSProperties = useMemo(() => {
    return {
      width: hourWidth,
    };
  }, [hourWidth]);

  const aMStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: aMAlignSelf,
    };
  }, [aMAlignSelf]);

  return (
    <div
      className={[styles.flightCard, className].join(" ")}
      style={flightCardStyle}
    >
      <div className={styles.airlineSectionWrapper} style={frameDivStyle}>
        <div className={styles.airlineSection} style={airlineSectionStyle}>
          <img
            className={styles.turkishIcon}
            loading="lazy"
            alt=""
            src="/turkish.svg"
          />
          <div className={styles.logo}>
            <div
              className={styles.singaporeAirlines}
              style={singaporeAirlinesStyle}
            >
              {singaporeAirlines}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.flightDetailsSection}>
          <div className={styles.time}>
            <div className={styles.hour} style={hourStyle}>
              <div className={styles.am} style={aMStyle}>
                {aM}
              </div>
            </div>
            <img
              className={styles.flighticon}
              loading="lazy"
              alt=""
              src={flightIcon}
            />
            <div className={styles.arrival}>
              <div className={styles.am1}>{aM1}</div>
            </div>
          </div>
          <div className={styles.departure}>
            <div className={styles.sin}>SIN</div>
            <div className={styles.duration}>
              <div className={styles.h55mNonStop}>{h55MNonStop}</div>
            </div>
            <div className={styles.sin1}>LAX</div>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <img className={styles.iconChild} loading="lazy" alt="" src={vector1} />
        <div className={styles.status}>
          <b className={styles.s730}>{s730}</b>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
