import { FunctionComponent } from "react";
import styles from "./InputGroup.module.css";

export type InputGroupType = {
  className?: string;
  departure?: string;
  placeholder?: string;
};

const InputGroup: FunctionComponent<InputGroupType> = ({
  className = "",
  departure,
  placeholder,
}) => {
  return (
    <div className={[styles.inputGroup, className].join(" ")}>
      <div className={styles.departureField}>
        <div className={styles.input}>
          <div className={styles.labelContainer}>
            <div className={styles.departure}>{departure}</div>
          </div>
          <input
            className={styles.active}
            placeholder={placeholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
