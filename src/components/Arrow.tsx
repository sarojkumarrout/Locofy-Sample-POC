import { FunctionComponent } from "react";
import styles from "./Arrow.module.css";

export type ArrowType = {
  className?: string;
  arrowDropDown?: string;
};

const Arrow: FunctionComponent<ArrowType> = ({
  className = "",
  arrowDropDown,
}) => {
  return (
    <div className={[styles.arrow, className].join(" ")}>
      <img className={styles.arrowdropdownIcon} alt="" src={arrowDropDown} />
    </div>
  );
};

export default Arrow;
