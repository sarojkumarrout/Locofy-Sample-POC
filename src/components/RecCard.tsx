import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RecCard.module.css";

export type RecCardType = {
  className?: string;
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  holidayPrice?: string;

  /** Style props */
  holidayPriceDisplay?: CSSProperties["display"];
  holidayPriceMinWidth?: CSSProperties["minWidth"];
};

const RecCard: FunctionComponent<RecCardType> = ({
  className = "",
  unsplash5MV818tzxeo,
  bali,
  d3N,
  holidayPrice,
  holidayPriceDisplay,
  holidayPriceMinWidth,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      display: holidayPriceDisplay,
      minWidth: holidayPriceMinWidth,
    };
  }, [holidayPriceDisplay, holidayPriceMinWidth]);

  return (
    <button className={[styles.recCard1, className].join(" ")}>
      <img
        className={styles.unsplash5mv818tzxeoIcon}
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.baliParent}>
            <div className={styles.bali}>{bali}</div>
            <div className={styles.d3n}>{d3N}</div>
          </div>
          <div className={styles.div} style={div1Style}>
            {holidayPrice}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecCard;
