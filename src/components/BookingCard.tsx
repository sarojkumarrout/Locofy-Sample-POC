import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BookingCard.module.css";

export type BookingCardType = {
  className?: string;
  singaporeAirlines?: string;
  price?: string;
  depCode?: string;
  depName?: string;
  arrCode?: string;
  arrName?: string;
  flightClass?: string;
  numPeople?: string;
  expedia?: string;
  timeAgo?: string;

  /** Style props */
  bookingCardFlex?: CSSProperties["flex"];
  singaporeAirlinesMinWidth?: CSSProperties["minWidth"];
  priceMinWidth?: CSSProperties["minWidth"];
  departureFlex?: CSSProperties["flex"];
  depCodeDisplay?: CSSProperties["display"];
  depCodeMinWidth?: CSSProperties["minWidth"];
  depNameMinWidth?: CSSProperties["minWidth"];
  arrivalFlex?: CSSProperties["flex"];
  arrCodeDisplay?: CSSProperties["display"];
  arrCodeMinWidth?: CSSProperties["minWidth"];
  arrNameDisplay?: CSSProperties["display"];
  arrNameMinWidth?: CSSProperties["minWidth"];
  arrNameAlignSelf?: CSSProperties["alignSelf"];
  arrNameTextAlign?: CSSProperties["textAlign"];
  flightClassMinWidth?: CSSProperties["minWidth"];
  timeAgoDisplay?: CSSProperties["display"];
  timeAgoMinWidth?: CSSProperties["minWidth"];
};

const BookingCard: FunctionComponent<BookingCardType> = ({
  className = "",
  bookingCardFlex,
  singaporeAirlines,
  singaporeAirlinesMinWidth,
  price,
  priceMinWidth,
  departureFlex,
  depCode,
  depCodeDisplay,
  depCodeMinWidth,
  depName,
  depNameMinWidth,
  arrivalFlex,
  arrCode,
  arrCodeDisplay,
  arrCodeMinWidth,
  arrName,
  arrNameDisplay,
  arrNameMinWidth,
  arrNameAlignSelf,
  arrNameTextAlign,
  flightClass,
  flightClassMinWidth,
  numPeople,
  expedia,
  timeAgo,
  timeAgoDisplay,
  timeAgoMinWidth,
}) => {
  const bookingCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: bookingCardFlex,
    };
  }, [bookingCardFlex]);

  const singaporeAirlines2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: singaporeAirlinesMinWidth,
    };
  }, [singaporeAirlinesMinWidth]);

  const priceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: priceMinWidth,
    };
  }, [priceMinWidth]);

  const departureStyle: CSSProperties = useMemo(() => {
    return {
      flex: departureFlex,
    };
  }, [departureFlex]);

  const depCodeStyle: CSSProperties = useMemo(() => {
    return {
      display: depCodeDisplay,
      minWidth: depCodeMinWidth,
    };
  }, [depCodeDisplay, depCodeMinWidth]);

  const depNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: depNameMinWidth,
    };
  }, [depNameMinWidth]);

  const arrivalStyle: CSSProperties = useMemo(() => {
    return {
      flex: arrivalFlex,
    };
  }, [arrivalFlex]);

  const arrCodeStyle: CSSProperties = useMemo(() => {
    return {
      display: arrCodeDisplay,
      minWidth: arrCodeMinWidth,
    };
  }, [arrCodeDisplay, arrCodeMinWidth]);

  const arrNameStyle: CSSProperties = useMemo(() => {
    return {
      display: arrNameDisplay,
      minWidth: arrNameMinWidth,
      alignSelf: arrNameAlignSelf,
      textAlign: arrNameTextAlign,
    };
  }, [arrNameDisplay, arrNameMinWidth, arrNameAlignSelf, arrNameTextAlign]);

  const flightClassStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: flightClassMinWidth,
    };
  }, [flightClassMinWidth]);

  const timeAgoStyle: CSSProperties = useMemo(() => {
    return {
      display: timeAgoDisplay,
      minWidth: timeAgoMinWidth,
    };
  }, [timeAgoDisplay, timeAgoMinWidth]);

  return (
    <div
      className={[styles.bookingCard, className].join(" ")}
      style={bookingCardStyle}
    >
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img
            className={styles.airlinelogoIcon}
            loading="lazy"
            alt=""
            src="/airlinelogo@2x.png"
          />
          <div
            className={styles.singaporeAirlines}
            style={singaporeAirlines2Style}
          >
            {singaporeAirlines}
          </div>
        </div>
        <div className={styles.price} style={priceStyle}>
          {price}
        </div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure} style={departureStyle}>
          <div className={styles.depcode} style={depCodeStyle}>
            {depCode}
          </div>
          <div className={styles.depname} style={depNameStyle}>
            {depName}
          </div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival} style={arrivalStyle}>
          <div className={styles.arrcode} style={arrCodeStyle}>
            {arrCode}
          </div>
          <div className={styles.arrname} style={arrNameStyle}>
            {arrName}
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.flightclass} style={flightClassStyle}>
            {flightClass}
          </div>
        </div>
        <div className={styles.bookingInfo}>
          <img className={styles.classIcon} alt="" src="/calender.svg" />
          <div className={styles.numpeople}>{numPeople}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.numpeople}>
          <span>{`Booked on `}</span>
          <span className={styles.expedia}>{expedia}</span>
        </div>
        <div className={styles.timeago} style={timeAgoStyle}>
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
