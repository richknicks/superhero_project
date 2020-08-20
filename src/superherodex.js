import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";

const useStyles = makeStyles({
  superherodexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
});

const Superherodex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [superheroData, setSuperheroData] = useState(mockData);
  const getSuperheroCard = (superheroId) => {
    console.log(superheroData[`${superheroId}`]);
    const { id, name } = superheroData[`${superheroId}`];
    const sprite = `https://www.superherodb.com/pictures2/portraits/10/100/${id}.jpg`;
    return (
      <Grid item xs={12} sm={4} key={superheroId}>
        <Card onClick={() => history.push(`/${superheroId}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "auto", height: "350px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${name}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {superheroData ? (
        <Grid container spacing={2} className={classes.superherodexContainer}>
          {Object.keys(superheroData).map((superheroId) =>
            getSuperheroCard(superheroId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Superherodex;
