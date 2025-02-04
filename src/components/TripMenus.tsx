import { FunctionComponent } from "react";
import styles from "./TripMenus.module.css";

export type TripMenusType = {
  className?: string;
};

const TripMenus: FunctionComponent<TripMenusType> = ({ className = "" }) => {
  return (
    <div className={[styles.tripMenus, className].join(" ")}>
      <div className={styles.hotel}>
        <img className={styles.hotelIcon} alt="" src="/hotel-icon.svg" />
        <div className={styles.hotel1}>Hotel</div>
      </div>
      <div className={styles.attractions}>
        <div className={styles.hotelIcon}>
          <div className={styles.background} />
          <img className={styles.ticketIcon} alt="" src="/ticket.svg" />
        </div>
        <div className={styles.hotel1}>Attractions</div>
      </div>
      <div className={styles.attractions}>
        <img className={styles.hotelIcon} alt="" src="/eats-icon.svg" />
        <div className={styles.hotel1}>Eats</div>
      </div>
      <div className={styles.attractions}>
        <div className={styles.hotelIcon}>
          <div className={styles.background1} />
          <img className={styles.trainIcon} alt="" src="/train.svg" />
        </div>
        <div className={styles.hotel1}>Commute</div>
      </div>
      <div className={styles.attractions}>
        <div className={styles.taxiIcon}>
          <div className={styles.background2} />
          <img className={styles.taxiIcon1} alt="" src="/taxi.svg" />
        </div>
        <div className={styles.taxi1}>Taxi</div>
      </div>
      <div className={styles.attractions}>
        <div className={styles.hotelIcon}>
          <div className={styles.background3} />
          <img className={styles.movieIcon} alt="" src="/movie.svg" />
        </div>
        <div className={styles.hotel1}>Movies</div>
      </div>
    </div>
  );
};

export default TripMenus;
