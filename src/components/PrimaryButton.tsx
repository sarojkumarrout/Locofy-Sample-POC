import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrimaryButton.module.css";

export type PrimaryButtonType = {
  className?: string;
  searchFlights?: string;

  /** Style props */
  primaryButtonPadding?: CSSProperties["padding"];
  primaryButtonWidth?: CSSProperties["width"];
  primaryButtonHeight?: CSSProperties["height"];
  searchFlightsWidth?: CSSProperties["width"];
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  className = "",
  primaryButtonPadding,
  primaryButtonWidth,
  primaryButtonHeight,
  searchFlights,
  searchFlightsWidth,
}) => {
  const primaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: primaryButtonPadding,
      width: primaryButtonWidth,
      height: primaryButtonHeight,
    };
  }, [primaryButtonPadding, primaryButtonWidth, primaryButtonHeight]);

  const searchFlightsStyle: CSSProperties = useMemo(() => {
    return {
      width: searchFlightsWidth,
    };
  }, [searchFlightsWidth]);

  return (
    <button
      className={[styles.primaryButton, className].join(" ")}
      style={primaryButtonStyle}
    >
      <div className={styles.primaryButtonChild} />
      <div className={styles.searchFlights} style={searchFlightsStyle}>
        {searchFlights}
      </div>
    </button>
  );
};

export default PrimaryButton;
