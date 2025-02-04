import { FunctionComponent } from "react";
import ResultsCard from "./ResultsCard";
import ResultsCard1 from "./ResultsCard1";
import styles from "./ResultsList.module.css";

export type ResultsListType = {
  className?: string;
};

const ResultsList: FunctionComponent<ResultsListType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.resultsList, className].join(" ")}>
      <div className={styles.resultCards}>
        <ResultsCard
          resultsImage="/results-image@2x.png"
          kingBedStandard="1 king bed standard"
          holidayInnExpre="Holiday Inn Expre..."
        />
        <ResultsCard1
          resultsImage="/results-image@2x.png"
          bedInQuad="Bed in Quad"
          freehandLosAngeles="Freehand Los Angeles"
          prop="4.2"
          reviews="(1,941 reviews)"
          s198="$S 198"
        />
        <ResultsCard1
          resultsImage="/results-image@2x.png"
          bedInQuad="1 King, City view"
          freehandLosAngeles="The Westin Bonavent..."
          prop="4.1"
          reviews="(1,002 reviews)"
          s198="$S 289"
        />
        <ResultsCard
          resultsImage="/results-image@2x.png"
          kingBedStandard="Deluxe King"
          kingBedStandardWidth="147.9px"
          kingBedStandardDisplay="inline-block"
          holidayInnExpre="The Ritz-Carlton, L..."
        />
      </div>
      <div className={styles.map}>
        <img className={styles.mapIcon} alt="" src="/map-1@2x.png" />
        <img className={styles.dotsIcon} alt="" src="/dots-1.svg" />
        <img className={styles.zoomIcon} alt="" src="/zoom-1@2x.png" />
      </div>
    </div>
  );
};

export default ResultsList;
