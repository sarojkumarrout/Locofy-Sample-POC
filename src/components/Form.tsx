import { FunctionComponent } from "react";
import InputGroup from "./InputGroup";
import styles from "./Form.module.css";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  return (
    <section className={[styles.form, className].join(" ")}>
      <div className={styles.searchFormSection}>
        <div className={styles.searchContainer}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackgroundIcon}
            alt=""
            src="/banner-background1@2x.png"
          />
          <div className={styles.searchSection}>
            <div className={styles.title}>
              <h1 className={styles.whereAreYou}>Where are you off too?</h1>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.inputsRow}>
                <InputGroup
                  departure="Departure"
                  placeholder="Singapore (SIN)"
                />
                <InputGroup
                  departure="Arrival"
                  placeholder="Los Angeles (LA)"
                />
                <div className={styles.inputGroup}>
                  <div className={styles.dateField}>
                    <div className={styles.input}>
                      <div className={styles.labelContainer}>
                        <div className={styles.date}>Date</div>
                      </div>
                      <div className={styles.active}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img className={styles.cancelIcon} alt="" />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img className={styles.cancelIcon} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles.div}>01/05/2022</div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/date.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Search flights</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
