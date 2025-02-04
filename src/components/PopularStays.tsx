import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCard from "./HotelCard";
import styles from "./PopularStays.module.css";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: FunctionComponent<PopularStaysType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={[styles.popularStays, className].join(" ")}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-4.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          vector="/vector1.svg"
          prop="4.9"
          reviews="(60 reviews)"
        />
        <HotelCard
          matterhornSuitesImage="/discovery-shores-image@2x.png"
          entireBungalow="2-Story beachfront suite"
          matterhornSuites="Discovery Shores"
          night="$360/night"
          vector="/vector-11.svg"
          prop="4.8"
          reviews="(116 reviews)"
          reviewsMinWidth="unset"
          moreDetailsButtonBorder="1px solid #ccdcec"
        />
        <HotelCard
          matterhornSuitesImage="/arctic-hut-image@2x.png"
          entireBungalow="Single deluxe hut"
          matterhornSuites="Arctic Hut "
          night="$420/night"
          vector="/vector-21.svg"
          prop="4.7"
          reviews="(78 reviews)"
          reviewsMinWidth="unset"
          moreDetailsButtonBorder="1px solid #ccdcec"
        />
        <HotelCard
          matterhornSuitesImage="/lake-louise-image@2x.png"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          vector="/vector-31.svg"
          prop="4.6"
          reviews="(63 reviews)"
          reviewsMinWidth="unset"
          moreDetailsButtonBorder="1px solid #cdddec"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright-5.svg" />
      </div>
    </div>
  );
};

export default PopularStays;
