import { FunctionComponent } from "react";
import TopHeader from "./TopHeader";
import Form from "./Form";
import Results from "./Results";
import Arrow from "./Arrow";
import UnstyledButton from "./UnstyledButton";
import Footer from "./Footer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  return (
    <div className={styles.resultsPage}>
      <TopHeader
        symbols="/symbols.svg"
        hamburgerMenu="/hamburgermenu@2x.png"
        exploreColor="#424242"
        searchColor="#1262af"
      />
      <Form />
      <Results />
      <section className={styles.newsletterFormSection}>
        <img
          className={styles.newsletterSectionBackground}
          alt=""
          src="/newsletter-section-background@2x.png"
        />
        <div className={styles.subscribeForm}>
          <div className={styles.formHeader}>
            <b className={styles.formTitleSubtext}>
              subscribe to our newsletter
            </b>
            <h2 className={styles.formTitle}>Get weekly updates</h2>
          </div>
          <form className={styles.form}>
            <div className={styles.formText}>
              <div className={styles.fillInYour}>
                Fill in your details to join the party!
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.destinationNameInput}>
                <div className={styles.input}>
                  <div className={styles.inactive}>
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
                    <input
                      className={styles.yourName}
                      placeholder="Your name"
                      type="text"
                    />
                    <div className={styles.muiAutocompleteIndicator}>
                      <div className={styles.iconbutton}>
                        <div className={styles.unstylediconbutton}>
                          <img className={styles.closeIcon} alt="" />
                        </div>
                      </div>
                    </div>
                    <Arrow arrowDropDown="pending_I1016:12773;6626:50985" />
                  </div>
                </div>
              </div>
              <div className={styles.destinationNameInput}>
                <div className={styles.input}>
                  <div className={styles.inactive}>
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
                    <input
                      className={styles.yourName}
                      placeholder="Email address"
                      type="text"
                    />
                    <div className={styles.muiAutocompleteIndicator}>
                      <div className={styles.iconbutton}>
                        <div className={styles.unstylediconbutton}>
                          <img className={styles.closeIcon1} alt="" />
                        </div>
                      </div>
                    </div>
                    <Arrow arrowDropDown="pending_I1016:12781;6626:50985" />
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <UnstyledButton
                iconLeft={false}
                iconRight={false}
                size="Large"
                variant="Contained"
              />
            </button>
          </form>
        </div>
      </section>
      <Footer
        logo="/logo2.svg"
        entypoSocialfacebookWithCircle="/facebook-icon1.svg"
        entypoSocialinstagramWithCircle="/instagram-icon1.svg"
        entypoSocialtwitterWithCircle="/twitter-icon1.svg"
        companyPadding="unset"
        aboutUsTextDecoration="unset"
        supportPadding="unset"
        accountTextDecoration="unset"
        fAQTextDecoration="unset"
        morePadding="unset"
      />
    </div>
  );
};

export default ResultsPage;
