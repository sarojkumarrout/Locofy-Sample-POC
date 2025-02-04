import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HotelCard.module.css";

export type HotelCardType = {
  className?: string;
  matterhornSuitesImage?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  vector?: string;
  prop?: string;
  reviews?: string;

  /** Style props */
  hotelDescriptionWidth?: CSSProperties["width"];
  reviewsMinWidth?: CSSProperties["minWidth"];
  moreDetailsButtonBorder?: CSSProperties["border"];
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  className = "",
  matterhornSuitesImage,
  hotelDescriptionWidth,
  entireBungalow,
  matterhornSuites,
  night,
  vector,
  prop,
  reviews,
  reviewsMinWidth,
  moreDetailsButtonBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const reviewsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: reviewsMinWidth,
    };
  }, [reviewsMinWidth]);

  const moreDetailsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: moreDetailsButtonBorder,
    };
  }, [moreDetailsButtonBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.hotelCard1, className].join(" ")}>
        <div className={styles.hotelCard}>
          <img
            className={styles.matterhornSuitesImage}
            alt=""
            src={matterhornSuitesImage}
          />
          <div className={styles.stayDetails}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.entireBungalow}>{entireBungalow}</div>
              <b className={styles.matterhornSuites}>{matterhornSuites}</b>
              <div className={styles.night}>{night}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src="/video1.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.reviews} style={reviewsStyle}>
              {reviews}
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>{prop}</div>
              <img className={styles.vectorIcon} alt="" src={vector} />
            </div>
          </div>
          <button
            className={styles.moreDetailsButton}
            style={moreDetailsButtonStyle}
          >
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCard;
