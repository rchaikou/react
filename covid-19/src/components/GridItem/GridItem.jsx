import React from "react";
import { Grid, CardContent, Typography, Card } from "@material-ui/core";
import CountUp from "react-countup";
import cx from 'classnames'

import styles from './GridItem.module.css'

const GridItem = ({ title, countValue, date, bodyText, gridStyle }) => {
  return (
    <Grid item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, gridStyle)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={countValue} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2">{bodyText}</Typography>
      </CardContent>
    </Grid>
  );
};

export default GridItem;
