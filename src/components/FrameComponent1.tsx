import { FunctionComponent } from "react";
import Pilldefault from "./Pilldefault";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.bannerWrapper, className].join(" ")}>
      <div className={styles.banner}>
        <img
          className={styles.bannerBackground}
          loading="lazy"
          alt=""
          src="/banner-background@2x.png"
        />
        <div className={styles.title}>
          <h1 className={styles.staysInLos}>Stays in Los Angeles</h1>
          <div className={styles.options}>
            <Pilldefault beds="Recommended" />
            <Pilldefault
              pilldefaultBackgroundColor="transparent"
              beds="Price"
              bedsColor="#fff"
            />
            <Pilldefault
              pilldefaultBackgroundColor="transparent"
              beds="Rating"
              bedsColor="#fff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
