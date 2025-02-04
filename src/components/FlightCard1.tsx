import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard1.module.css";

export type FlightCard1Type = {
  className?: string;
  singaporeAirlines?: string;
  aM?: string;
  flightIcon?: string;
  aM1?: string;
  h55MNonStop?: string;
  vector1?: string;
  s730?: string;

  /** Style props */
  singaporeAirlinesRight?: CSSProperties["right"];
  frameDivWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
  h55MNonStopDisplay?: CSSProperties["display"];
  h55MNonStopMinWidth?: CSSProperties["minWidth"];
};

const FlightCard1: FunctionComponent<FlightCard1Type> = ({
  className = "",
  singaporeAirlines,
  singaporeAirlinesRight,
  frameDivWidth,
  aM,
  flightIcon,
  aM1,
  frameDivGap,
  h55MNonStop,
  h55MNonStopDisplay,
  h55MNonStopMinWidth,
  vector1,
  s730,
}) => {
  const singaporeAirlines1Style: CSSProperties = useMemo(() => {
    return {
      right: singaporeAirlinesRight,
    };
  }, [singaporeAirlinesRight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const h55MNonStopStyle: CSSProperties = useMemo(() => {
    return {
      display: h55MNonStopDisplay,
      minWidth: h55MNonStopMinWidth,
    };
  }, [h55MNonStopDisplay, h55MNonStopMinWidth]);

  return (
    <div className={[styles.flightCard, className].join(" ")}>
      <div className={styles.airlineSectionWrapper}>
        <div className={styles.airlineSection}>
          <img
            className={styles.siaIcon}
            loading="lazy"
            alt=""
            src="/sia.svg"
          />
          <div
            className={styles.singaporeAirlines}
            style={singaporeAirlines1Style}
          >
            {singaporeAirlines}
          </div>
        </div>
      </div>
      <div
        className={styles.flightDetailsSectionWrapper}
        style={frameDiv1Style}
      >
        <div className={styles.flightDetailsSection}>
          <div className={styles.frameParent}>
            <div className={styles.amWrapper}>
              <div className={styles.am}>{aM}</div>
            </div>
            <img className={styles.flighticon} alt="" src={flightIcon} />
            <div className={styles.amContainer}>
              <div className={styles.am}>{aM1}</div>
            </div>
          </div>
          <div className={styles.sinParent} style={frameDiv2Style}>
            <div className={styles.sin}>SIN</div>
            <div className={styles.h55mNonStopWrapper}>
              <div className={styles.h55mNonStop} style={h55MNonStopStyle}>
                {h55MNonStop}
              </div>
            </div>
            <div className={styles.sin1}>LAX</div>
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src={vector1} />
        <div className={styles.s730Wrapper}>
          <b className={styles.s730}>{s730}</b>
        </div>
      </div>
    </div>
  );
};

export default FlightCard1;
