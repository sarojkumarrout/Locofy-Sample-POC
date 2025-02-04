import { FunctionComponent } from "react";
import styles from "./MenuItem1.module.css";

export type MenuItem1Type = {
  className?: string;

  /** Variant props */
  contentType?: string;
  state?: boolean;
};

const MenuItem1: FunctionComponent<MenuItem1Type> = ({
  className = "",
  contentType = "W. Icon",
  state = "Hover",
}) => {
  return (
    <div
      className={[styles.menuItem, className].join(" ")}
      data-contentType={contentType}
    >
      <div className={styles.option1}>
        Ninoy Aquiono International Airport (NAIA
      </div>
    </div>
  );
};

export default MenuItem1;
