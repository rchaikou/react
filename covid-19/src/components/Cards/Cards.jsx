import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
import GridItem from "../GridItem/GridItem";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <GridItem
          title="Infected"
          countValue={confirmed.value}
          date={lastUpdate}
          bodyText="Number of active cases of COVID-19"
          gridStyle={styles.infected}
        />
        <GridItem
          title="Recovered"
          countValue={recovered.value}
          date={lastUpdate}
          bodyText="Number of recoveries cases of COVID-19"
          gridStyle={styles.recovered}
        />
        <GridItem
          title="Deaths"
          countValue={deaths.value}
          date={lastUpdate}
          bodyText="Number of deaths caused by COVID-19"
          gridStyle={styles.deaths}
        />
      </Grid>
    </div>
  );
};

export default Cards;
