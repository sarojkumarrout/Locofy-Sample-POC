import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopHeader.module.css";

export type TopHeaderType = {
  className?: string;
  symbols?: string;
  hamburgerMenu?: string;

  /** Style props */
  exploreColor?: CSSProperties["color"];
  searchColor?: CSSProperties["color"];
};

const TopHeader: FunctionComponent<TopHeaderType> = ({
  className = "",
  symbols,
  hamburgerMenu,
  exploreColor,
  searchColor,
}) => {
  const exploreStyle: CSSProperties = useMemo(() => {
    return {
      color: exploreColor,
    };
  }, [exploreColor]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      color: searchColor,
    };
  }, [searchColor]);

  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <header className={[styles.topHeader, className].join(" ")}>
      <div className={styles.topContainer}>
        <button className={styles.fickleflightLogo}>
          <img className={styles.symbolsIcon} alt="" src={symbols} />
        </button>
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <button className={styles.explore} style={exploreStyle}>
              Explore
            </button>
            <div
              className={styles.search}
              onClick={onSearchTextClick}
              style={searchStyle}
            >
              Search
            </div>
            <div className={styles.search} onClick={onHotelsTextClick}>
              Hotels
            </div>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src={hamburgerMenu}
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification-bell@2x.png"
            />
            <img
              className={styles.profilePictureIcon}
              alt=""
              src="/unsplashd1upkifd04a@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
