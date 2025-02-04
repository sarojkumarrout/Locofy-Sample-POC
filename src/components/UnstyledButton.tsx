import { FunctionComponent } from "react";
import styles from "./UnstyledButton.module.css";

export type UnstyledButtonType = {
  className?: string;

  /** Variant props */
  iconLeft?: boolean;
  iconRight?: boolean;
  size?: string;
  variant?: string;
};

const UnstyledButton: FunctionComponent<UnstyledButtonType> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  size = "Large",
  variant = "Outlined",
}) => {
  return (
    <div
      className={[styles.unstyledbutton, className].join(" ")}
      data-iconLeft={iconLeft}
      data-iconRight={iconRight}
      data-size={size}
      data-variant={variant}
    >
      <div className={styles.button}>submit</div>
    </div>
  );
};

export default UnstyledButton;
