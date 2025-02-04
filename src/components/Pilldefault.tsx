import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pilldefault.module.css";

export type PilldefaultType = {
  className?: string;
  beds?: string;

  /** Style props */
  pilldefaultBackgroundColor?: CSSProperties["backgroundColor"];
  bedsColor?: CSSProperties["color"];
};

const Pilldefault: FunctionComponent<PilldefaultType> = ({
  className = "",
  pilldefaultBackgroundColor,
  beds,
  bedsColor,
}) => {
  const pilldefaultStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: pilldefaultBackgroundColor,
    };
  }, [pilldefaultBackgroundColor]);

  const bedsStyle: CSSProperties = useMemo(() => {
    return {
      color: bedsColor,
    };
  }, [bedsColor]);

  return (
    <button
      className={[styles.pilldefault, className].join(" ")}
      style={pilldefaultStyle}
    >
      <div className={styles.beds} style={bedsStyle}>
        {beds}
      </div>
    </button>
  );
};

export default Pilldefault;
