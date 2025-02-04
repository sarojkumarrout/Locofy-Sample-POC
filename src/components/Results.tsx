import { FunctionComponent } from "react";
import FlightCard from "./FlightCard";
import FlightCard1 from "./FlightCard1";
import PrimaryButton from "./PrimaryButton";
import BookingCard from "./BookingCard";
import styles from "./Results.module.css";

export type ResultsType = {
  className?: string;
};

const Results: FunctionComponent<ResultsType> = ({ className = "" }) => {
  return (
    <section className={[styles.results, className].join(" ")}>
      <div className={styles.gridParent}>
        <div className={styles.grid}>
          <div className={styles.heading}>
            <div className={styles.results1}>10 out of 177 Results</div>
            <img
              className={styles.headingChild}
              loading="lazy"
              alt=""
              src="/vector-22.svg"
            />
          </div>
          <div className={styles.row}>
            <h3 className={styles.results2}>Stops</h3>
            <div className={styles.content}>
              <div className={styles.items}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results3}>1 Stop</div>
              </div>
              <div className={styles.elements}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results4}>2 Stops</div>
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <h3 className={styles.results5}>Booking Options</h3>
            <div className={styles.frameParent}>
              <div className={styles.component1Parent}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results3}>Book on Fickleflight</div>
              </div>
              <div className={styles.component1Group}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results3}>Official Airline Websites</div>
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <h3 className={styles.results8}>Flight Experience</h3>
            <div className={styles.frameGroup}>
              <div className={styles.component1Container}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results4}>No overnight flights</div>
              </div>
              <div className={styles.elements}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results4}>No long stop-overs</div>
              </div>
            </div>
          </div>
          <img className={styles.seperatorIcon} alt="" src="/vector-22.svg" />
          <div className={styles.row1}>
            <h3 className={styles.results11}>Airlines</h3>
            <div className={styles.frameParent}>
              <div className={styles.component1Parent}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results3}>Singapore Airlines</div>
              </div>
              <div className={styles.component1Parent}>
                <input className={styles.component1} type="checkbox" />
                <div className={styles.results3}>Qatar Airways</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.flightCards}>
            <div className={styles.results14}>10 out of 177 Results</div>
            <FlightCard
              singaporeAirlines="Turkish Airlines"
              aM="11:35 PM"
              flightIcon="/flighticon.svg"
              aM1="4:45 PM"
              h55MNonStop="33H 10M, 1-stop"
              vector1="/vector-12.svg"
              s730="S$ 723"
            />
            <FlightCard1
              singaporeAirlines="Singapore Airlines"
              aM="8:45 PM"
              flightIcon="/flighticon.svg"
              aM1="7:55 PM"
              h55MNonStop="15H 10M, 2-stops"
              vector1="/vector-12.svg"
              s730="S$ 900"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              frameDivWidth="unset"
              airlineSectionPadding="0px 9px 0px 0px"
              airlineSectionAlignSelf="unset"
              singaporeAirlines="Japan Airlines"
              singaporeAirlinesMinWidth="106px"
              singaporeAirlinesDisplay="inline-block"
              hourWidth="93px"
              aM="8:20 PM"
              aMAlignSelf="stretch"
              flightIcon="/flighticon.svg"
              aM1="9:50 PM"
              h55MNonStop="17H 30M, 1-stop"
              vector1="/vector-12.svg"
              s730="S$ 859"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              frameDivWidth="155.8px"
              airlineSectionPadding="unset"
              airlineSectionAlignSelf="stretch"
              singaporeAirlines="ANA"
              singaporeAirlinesMinWidth="unset"
              singaporeAirlinesDisplay="unset"
              hourWidth="93px"
              aM="6:35 PM"
              aMAlignSelf="stretch"
              flightIcon="/flighticon.svg"
              aM1="9:50 PM"
              h55MNonStop="19H 15M, 1-stop"
              vector1="/vector-12.svg"
              s730="S$ 936"
            />
            <FlightCard1
              singaporeAirlines="American Airlines"
              singaporeAirlinesRight="-16px"
              frameDivWidth="331.2px"
              aM="8:20 PM"
              flightIcon="/flighticon.svg"
              aM1="9:50 PM"
              frameDivGap="30.7px"
              h55MNonStop="17H 30M, 1-stop"
              h55MNonStopDisplay="inline-block"
              h55MNonStopMinWidth="122px"
              vector1="/vector-12.svg"
              s730="S$ 936"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              frameDivWidth="unset"
              airlineSectionPadding="unset"
              airlineSectionAlignSelf="unset"
              singaporeAirlines="Turkish Airlines"
              singaporeAirlinesMinWidth="115px"
              singaporeAirlinesDisplay="inline-block"
              hourWidth="unset"
              aM="11:35 PM"
              aMAlignSelf="unset"
              flightIcon="/flighticon.svg"
              aM1="4:45 PM"
              h55MNonStop="33H 10M, 1-stop"
              vector1="/vector-12.svg"
              s730="S$ 673"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              frameDivWidth="unset"
              airlineSectionPadding="0px 9px 0px 0px"
              airlineSectionAlignSelf="unset"
              singaporeAirlines="Japan Airlines"
              singaporeAirlinesMinWidth="106px"
              singaporeAirlinesDisplay="inline-block"
              hourWidth="unset"
              aM="10:25 PM"
              aMAlignSelf="unset"
              flightIcon="/flighticon.svg"
              aM1="9:10 AM"
              h55MNonStop="26H 45M, 1-stop"
              vector1="/vector-12.svg"
              s730="S$ 859"
            />
            <PrimaryButton searchFlights="Show more results" />
          </div>
        </div>
        <div className={styles.recentlyBooked}>
          <div className={styles.recentlyBookedTitle}>
            <b className={styles.results15}>Recently booked</b>
            <img className={styles.headingChild} alt="" src="/vector-2-1.svg" />
          </div>
          <div className={styles.bookingCards}>
            <BookingCard
              singaporeAirlines="Singapore Airlines"
              price="$1128"
              depCode="SIN"
              depName="Singapore"
              arrCode="LAX"
              arrName="Los Angeles"
              flightClass="Economy"
              numPeople="2 Adults"
              expedia="Expedia"
              timeAgo="1s ago!"
            />
            <BookingCard
              bookingCardFlex="unset"
              singaporeAirlines="American Airlines"
              singaporeAirlinesMinWidth="100px"
              price="$1024"
              priceMinWidth="51px"
              departureFlex="unset"
              depCode="SFO"
              depCodeDisplay="inline-block"
              depCodeMinWidth="34px"
              depName="San Francisco"
              depNameMinWidth="81px"
              arrivalFlex="1"
              arrCode="SIN"
              arrCodeDisplay="unset"
              arrCodeMinWidth="unset"
              arrName="Singapore"
              arrNameDisplay="inline-block"
              arrNameMinWidth="59px"
              arrNameAlignSelf="stretch"
              arrNameTextAlign="right"
              flightClass="First Class"
              flightClassMinWidth="61px"
              numPeople="1 Adults"
              expedia="Kayak"
              timeAgo="2s ago!"
              timeAgoDisplay="inline-block"
              timeAgoMinWidth="44px"
            />
            <BookingCard
              bookingCardFlex="unset"
              singaporeAirlines="Japan Airlines"
              singaporeAirlinesMinWidth="81px"
              price="$2996"
              priceMinWidth="53px"
              departureFlex="1"
              depCode="PHX"
              depCodeDisplay="inline-block"
              depCodeMinWidth="35px"
              depName="Phoenix"
              depNameMinWidth="47px"
              arrivalFlex="unset"
              arrCode="DXB"
              arrCodeDisplay="unset"
              arrCodeMinWidth="unset"
              arrName="Dubai"
              arrNameDisplay="unset"
              arrNameMinWidth="unset"
              arrNameAlignSelf="unset"
              arrNameTextAlign="left"
              flightClass="Economy"
              flightClassMinWidth="54px"
              numPeople="3 Adults"
              expedia="Skyscanner"
              timeAgo="3s ago!"
              timeAgoDisplay="unset"
              timeAgoMinWidth="unset"
            />
            <div className={styles.showMore}>
              <div className={styles.showMore1}>Show more</div>
              <img
                className={styles.iconBack}
                alt=""
                src="/icon--back@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
