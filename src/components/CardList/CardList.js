import CardItem from "../Card/Card";
import { Grid } from "@mui/material";

const CardList = () => {
  return (
    <Grid container>
      <Grid item md={3}>
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <CardItem />
      </Grid>
    </Grid>
  )
};

export default CardList

