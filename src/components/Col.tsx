import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Col.module.css";

export type ColType = {
  className?: string;
  parisImage?: string;
  paris?: string;
  priceValues?: string;

  /** Style props */
  parisMinWidth?: CSSProperties["minWidth"];
  priceValuesDisplay?: CSSProperties["display"];
  priceValuesMinWidth?: CSSProperties["minWidth"];
};

const Col: FunctionComponent<ColType> = ({
  className = "",
  parisImage,
  paris,
  parisMinWidth,
  priceValues,
  priceValuesDisplay,
  priceValuesMinWidth,
}) => {
  const parisStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: parisMinWidth,
    };
  }, [parisMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: priceValuesDisplay,
      minWidth: priceValuesMinWidth,
    };
  }, [priceValuesDisplay, priceValuesMinWidth]);

  return (
    <button className={[styles.col1, className].join(" ")}>
      <div className={styles.pariscard}>
        <img className={styles.parisimageIcon} alt="" src={parisImage} />
        <div className={styles.destinationDetails}>
          <b className={styles.paris} style={parisStyle}>
            {paris}
          </b>
          <div className={styles.details}>
            <div className={styles.div} style={divStyle}>
              {priceValues}
            </div>
            <div className={styles.from}>from</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Col;
