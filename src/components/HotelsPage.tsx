import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import ResultsList from "./ResultsList";
import Arrow from "./Arrow";
import UnstyledButton from "./UnstyledButton";
import Footer from "./Footer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={styles.hotelsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <div className={styles.fickleflightLogoWrapper}>
            <div
              className={styles.fickleflightLogo}
              onClick={onFickleflightLogoContainerClick}
            >
              <img
                className={styles.webScreenIcon}
                loading="lazy"
                alt=""
                src="/webscreen.svg"
                onClick={onFickleflightLogoContainerClick}
              />
            </div>
          </div>
          <img
            className={styles.hamburgerMenuIcon}
            alt=""
            src="/hamburgermenu@2x.png"
          />
          <div className={styles.frameParent}>
            <div className={styles.exploreWrapper}>
              <a
                className={styles.explore}
                onClick={onFickleflightLogoContainerClick}
              >
                Explore
              </a>
            </div>
            <div className={styles.exploreWrapper}>
              <a className={styles.search} onClick={onSearchTextClick}>
                Search
              </a>
            </div>
            <div className={styles.hotelsWrapper}>
              <a className={styles.hotels}>Hotels</a>
            </div>
            <div className={styles.offersWrapper}>
              <a className={styles.hotels}>Offers</a>
            </div>
            <div className={styles.notificationsParent}>
              <div className={styles.notifications}>
                <img
                  className={styles.notificationBellIcon}
                  loading="lazy"
                  alt=""
                  src="/notification-bell@2x.png"
                />
              </div>
              <img
                className={styles.unsplashd1upkifd04aIcon}
                loading="lazy"
                alt=""
                src="/unsplashd1upkifd04a@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <FrameComponent1 />
      <div className={styles.map}>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <img className={styles.dotsIcon} alt="" src="/dots.svg" />
        <img className={styles.zoomIcon} alt="" src="/zoom@2x.png" />
      </div>
      <section className={styles.hotelsPageInner}>
        <div className={styles.resultsHeaderParent}>
          <div className={styles.resultsHeader}>
            <div className={styles.results}>200+ results</div>
            <div className={styles.frameGroup}>
              <div className={styles.filtersWrapper}>
                <a className={styles.filters}>Filters</a>
              </div>
              <img
                className={styles.filtersIcon}
                loading="lazy"
                alt=""
                src="/filters.svg"
              />
            </div>
          </div>
          <ResultsList />
        </div>
      </section>
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
                          <img className={styles.filtersIcon} alt="" />
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
                    <Arrow arrowDropDown="pending_I1003:25287;6626:50985" />
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
                          <img className={styles.filtersIcon} alt="" />
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
                          <img className={styles.filtersIcon} alt="" />
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
                    <Arrow arrowDropDown="pending_I1003:25295;6626:50985" />
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
        logo="/logo.svg"
        entypoSocialfacebookWithCircle="/facebook-icon.svg"
        entypoSocialinstagramWithCircle="/instagram-icon.svg"
        entypoSocialtwitterWithCircle="/twitter-icon.svg"
        companyPadding="unset"
        aboutUsTextDecoration="none"
        supportPadding="unset"
        accountTextDecoration="none"
        fAQTextDecoration="none"
        morePadding="unset"
        quarantineRulesTextDecoration="none"
      />
    </div>
  );
};

export default HotelsPage;
