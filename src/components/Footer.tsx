import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  logo?: string;
  entypoSocialfacebookWithCircle?: string;
  entypoSocialinstagramWithCircle?: string;
  entypoSocialtwitterWithCircle?: string;

  /** Style props */
  companyPadding?: CSSProperties["padding"];
  aboutUsTextDecoration?: CSSProperties["textDecoration"];
  supportPadding?: CSSProperties["padding"];
  accountTextDecoration?: CSSProperties["textDecoration"];
  fAQTextDecoration?: CSSProperties["textDecoration"];
  morePadding?: CSSProperties["padding"];
  quarantineRulesTextDecoration?: CSSProperties["textDecoration"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  logo,
  entypoSocialfacebookWithCircle,
  entypoSocialinstagramWithCircle,
  entypoSocialtwitterWithCircle,
  companyPadding,
  aboutUsTextDecoration,
  supportPadding,
  accountTextDecoration,
  fAQTextDecoration,
  morePadding,
  quarantineRulesTextDecoration,
}) => {
  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      padding: companyPadding,
    };
  }, [companyPadding]);

  const careersStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: aboutUsTextDecoration,
    };
  }, [aboutUsTextDecoration]);

  const supportStyle: CSSProperties = useMemo(() => {
    return {
      padding: supportPadding,
    };
  }, [supportPadding]);

  const accessibilityStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: accountTextDecoration,
    };
  }, [accountTextDecoration]);

  const covidAdvisoryStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: fAQTextDecoration,
    };
  }, [fAQTextDecoration]);

  const airlineFeesStyle: CSSProperties = useMemo(() => {
    return {
      padding: morePadding,
    };
  }, [morePadding]);

  const quarantineRulesStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: quarantineRulesTextDecoration,
    };
  }, [quarantineRulesTextDecoration]);

  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.fickleflightBio}>
        <img className={styles.logoIcon} alt="" src={logo} />
        <div className={styles.fickleFlightIs}>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className={styles.socialIcons}>
          <img
            className={styles.entypoSocialfacebookWithCiIcon}
            alt=""
            src={entypoSocialfacebookWithCircle}
          />
          <img
            className={styles.entypoSocialtwitterWithCirIcon}
            alt=""
            src={entypoSocialtwitterWithCircle}
          />
          <img
            className={styles.entypoSocialinstagramWithCIcon}
            alt=""
            src={entypoSocialinstagramWithCircle}
          />
        </div>
      </div>
      <div className={styles.footerChild} />
      <div className={styles.footerLinks}>
        <div className={styles.company} style={companyStyle}>
          <div className={styles.aboutUs} style={aboutUsStyle}>
            About Us
          </div>
          <div className={styles.company1}>Company</div>
          <div className={styles.news}>News</div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.howWeWork}>How we work</div>
        </div>
        <div className={styles.company} style={supportStyle}>
          <div className={styles.account} style={accountStyle}>
            Account
          </div>
          <div className={styles.support1}>Support</div>
          <div className={styles.supportCenter}>Support Center</div>
          <div className={styles.faq} style={fAQStyle}>
            FAQ
          </div>
          <div className={styles.accessibility}>Accessibility</div>
        </div>
        <div className={styles.more} style={moreStyle}>
          <div className={styles.covidAdvisory}>Covid Advisory</div>
          <div className={styles.more1}>More</div>
          <div className={styles.airlineFees}>Airline Fees</div>
          <div className={styles.tips}>Tips</div>
          <div className={styles.howWeWork} style={quarantineRulesStyle}>
            Quarantine Rules
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
