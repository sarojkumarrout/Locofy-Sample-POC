import { FunctionComponent } from "react";
import RecCard from "./RecCard";
import styles from "./RecommendedHolidaysContainer.module.css";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: FunctionComponent<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.recommendedHolidaysContainer, className].join(" ")}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-2.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          holidayPrice="$899"
        />
        <RecCard
          unsplash5MV818tzxeo="/switzerlandimage@2x.png"
          bali="Swiss"
          d3N="6D5N"
          holidayPrice="$900"
          holidayPriceDisplay="unset"
          holidayPriceMinWidth="unset"
        />
        <RecCard
          unsplash5MV818tzxeo="/boracayimage@2x.png"
          bali="Boracay"
          d3N="5D4N"
          holidayPrice="$699"
          holidayPriceDisplay="unset"
          holidayPriceMinWidth="unset"
        />
        <RecCard
          unsplash5MV818tzxeo="/palawanimage@2x.png"
          bali="Palawan"
          d3N="4D3N"
          holidayPrice="$789"
          holidayPriceDisplay="unset"
          holidayPriceMinWidth="unset"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright-3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
