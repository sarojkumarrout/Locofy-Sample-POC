import { FunctionComponent, useState } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TopHeader from "./TopHeader";
import FlightMainContainer from "./FlightMainContainer";
import TripMenus from "./TripMenus";
import Col from "./Col";
import RecommendedHolidaysContainer from "./RecommendedHolidaysContainer";
import PopularStays from "./PopularStays";
import Arrow from "./Arrow";
import UnstyledButton from "./UnstyledButton";
import Footer from "./Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.homepage}>
        <div className={styles.heroSection}>
          <TopHeader
            symbols="/symbols.svg"
            hamburgerMenu="/hamburgermenu1@2x.svg"
          />
          <div className={styles.searchSection}>
            <div className={styles.bannerGradient} />
            <img
              className={styles.bannerBackground}
              alt=""
              src="/banner--background@2x.png"
            />
            <div className={styles.searchContainer}>
              <div className={styles.title}>
                <div
                  className={styles.letsExplore}
                >{`Let’s explore & travel the world`}</div>
                <div className={styles.findTheBest}>
                  Find the best destinations and the most popular stays!
                </div>
              </div>
              <div className={styles.searchForm}>
                <div className={styles.formTitleGroup}>
                  <b className={styles.searchFlights}>Search flights</b>
                  <div className={styles.flightOptions}>
                    <div className={styles.flightType}>
                      <FormControlLabel
                        className={styles.radio}
                        label="Return"
                        labelPlacement="end"
                        control={<Radio size="medium" />}
                      />
                      <FormControlLabel
                        className={styles.radio1}
                        label="One-way"
                        labelPlacement="end"
                        control={
                          <Radio color="primary" checked size="medium" />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formInputsRow}>
                  <div className={styles.inputsRow}>
                    <Autocomplete
                      className={styles.departureField}
                      size="medium"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)",
                        "Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                    />
                    <div className={styles.arrivalField}>
                      <div className={styles.input}>
                        <div className={styles.labelContainer}>
                          <div className={styles.arrival}>Arrival</div>
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
                                <img
                                  className={styles.cancelIcon}
                                  alt=""
                                  src="/cancel.svg"
                                />
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
                                <img
                                  className={styles.cancelIcon}
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.losAngelesLa}>
                            Los Angeles (LA)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.departureField}>
                      <DatePicker
                        label="Date"
                        value={selectOutlinedDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setSelectOutlinedDateTimePickerValue(newValue);
                        }}
                        sx={{}}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Date",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.buttonGroup}>
                    <div className={styles.searchFlightsButton}>
                      <div className={styles.button}>Search flights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeContents}>
          <div className={styles.upcomingFlightSection}>
            <div className={styles.upcomingFlightSection1}>
              <b className={styles.recentSearches}>Recent Searches</b>
              <div className={styles.flightDetails}>
                <div className={styles.recentSearches1}>
                  <FlightMainContainer
                    sIN="SIN"
                    duration="/duration.svg"
                    lAX="LAX"
                    departOn="Depart on: "
                    sep2021="7 Sep 2021"
                  />
                  <FlightMainContainer
                    sIN="MY"
                    duration="/duration-1.svg"
                    lAX="DUB"
                    departOn="Depart on:"
                    sep2021=" 9 Sep 2021"
                  />
                </div>
                <div className={styles.prepareMenu}>
                  <div className={styles.recentSearches}>
                    Prepare for your trip
                  </div>
                  <TripMenus />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.popDestinationsMain}>
            <div className={styles.destinationsTitles}>
              <div className={styles.titleContainer}>
                <b className={styles.recentSearches}>Plan your next trip</b>
                <b className={styles.mostPopularDestinations}>
                  Most Popular Destinations
                </b>
              </div>
              <button className={styles.viewAllTop}>
                <div className={styles.viewAllDestinations}>
                  View all destinations
                </div>
                <img
                  className={styles.cancelIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </button>
            </div>
            <div className={styles.cardsContainer}>
              <Col
                parisImage="/parisimage@2x.png"
                paris="Paris"
                priceValues="$699"
              />
              <Col
                parisImage="/greeceimage@2x.png"
                paris="Greece"
                parisMinWidth="unset"
                priceValues="$1079"
                priceValuesDisplay="unset"
                priceValuesMinWidth="unset"
              />
              <Col
                parisImage="/norwayimage@2x.png"
                paris="Norway"
                parisMinWidth="unset"
                priceValues="$895"
                priceValuesDisplay="inline-block"
                priceValuesMinWidth="unset"
              />
              <Col
                parisImage="/tuscanyimage@2x.png"
                paris="Tuscany"
                parisMinWidth="unset"
                priceValues="$1245"
                priceValuesDisplay="inline-block"
                priceValuesMinWidth="unset"
              />
            </div>
            <div className={styles.viewAllBottom}>
              <div className={styles.viewAllDestinations1}>
                View all destinations
              </div>
              <img
                className={styles.cancelIcon}
                alt=""
                src="/arrowright-1.svg"
              />
            </div>
          </div>
          <RecommendedHolidaysContainer />
          <PopularStays />
        </div>
        <div className={styles.footerSection}>
          <div className={styles.subscribeSection}>
            <img
              className={styles.subscribeSectionBackground}
              alt=""
              src="/newsletter-section-background@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <b className={styles.recentSearches}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <form className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formText}>
                    <div className={styles.input1}>
                      <div className={styles.inactive}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op2}>F</div>
                              </div>
                              <div className={styles.typography2}>
                                <div className={styles.chip5}>Chip</div>
                              </div>
                              <img className={styles.cancelIcon} alt="" src />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op2}>F</div>
                              </div>
                              <div className={styles.typography2}>
                                <div className={styles.chip5}>Chip</div>
                              </div>
                              <img className={styles.cancelIcon} alt="" src />
                            </div>
                          </div>
                        </div>
                        <div className={styles.yourName}>Your name</div>
                        <div className={styles.muiAutocompleteIndicator}>
                          <div className={styles.iconbutton}>
                            <div className={styles.unstylediconbutton}>
                              <img className={styles.closeIcon} alt="" src />
                            </div>
                          </div>
                        </div>
                        <Arrow />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formText}>
                    <div className={styles.input1}>
                      <div className={styles.inactive}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op2}>F</div>
                              </div>
                              <div className={styles.typography2}>
                                <div className={styles.chip5}>Chip</div>
                              </div>
                              <img className={styles.cancelIcon} alt="" src />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op2}>F</div>
                              </div>
                              <div className={styles.typography2}>
                                <div className={styles.chip5}>Chip</div>
                              </div>
                              <img className={styles.cancelIcon} alt="" src />
                            </div>
                          </div>
                        </div>
                        <div className={styles.yourName}>Email address</div>
                        <div className={styles.muiAutocompleteIndicator}>
                          <div className={styles.iconbutton}>
                            <div className={styles.unstylediconbutton}>
                              <img className={styles.closeIcon} alt="" src />
                            </div>
                          </div>
                        </div>
                        <Arrow />
                      </div>
                    </div>
                  </div>
                </div>
                <button className={styles.button1}>
                  <UnstyledButton
                    iconLeft={false}
                    iconRight={false}
                    size="Large"
                    variant="Contained"
                  />
                </button>
              </form>
            </div>
          </div>
          <Footer
            logo="/logo1.svg"
            entypoSocialfacebookWithCircle="/entyposocialfacebookwithcircle.svg"
            entypoSocialinstagramWithCircle="/entyposocialinstagramwithcircle.svg"
            entypoSocialtwitterWithCircle="/entyposocialtwitterwithcircle.svg"
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Homepage;
