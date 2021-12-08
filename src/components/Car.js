import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  let id = props.match.params.id - 1;
  console.log(cars[id].Name);
  return (
    <Container maxWidth="sm">
      <Paper>
        <Chip label={cars[id].id} />
        <Chip label={cars[id].Name} />
        <Chip label={cars[id].Miles_per_Gallon} />
        <Chip label={cars[id].Cylinders} />
        <Chip label={cars[id].Displacement} />
        <Chip label={cars[id].Horsepower} />
        <Chip label={cars[id].Weight_in_lbs} />
        <Chip label={cars[id].Acceleration} />
        <Chip label={cars[id].Year} />
        <Chip label={cars[id].Origin} />
      </Paper>
    </Container>
  );
};

export default Car;
