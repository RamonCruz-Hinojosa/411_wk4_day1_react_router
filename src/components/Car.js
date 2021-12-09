import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  let id = props.match.params.id - 1;
  console.log(cars[id].Name);
  return (
    <Container className="car-container">
      <Paper className="car-paper">
        <h2 className="carName">{cars[id].Name}</h2>
        <Chip label={"id: " + cars[id].id} />
        <Chip label={"Name: " + cars[id].Name} />
        <Chip label={"Miles_per_Gallon: " + cars[id].Miles_per_Gallon} />
        <Chip label={"Cylinders: " + cars[id].Cylinders} />
        <Chip label={"Displacement: " + cars[id].Displacement} />
        <Chip label={"Horsepower: " + cars[id].Horsepower} />
        <Chip label={"Weight_in_lbs: " + cars[id].Weight_in_lbs} />
        <Chip label={"Acceleration: " + cars[id].Acceleration} />
        <Chip label={"Year: " + cars[id].Year} />
        <Chip label={"Origin: " + cars[id].Origin} />
      </Paper>
    </Container>
  );
};

export default Car;
