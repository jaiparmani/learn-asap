import React from "react";
import NavComponent from "../components/NavComponent";
import CarouselComponent from "../components/CarouselComponent";
import CardComponent from "./CardComponent";

function HomePageComponent() {
  return (
    <div className="App">
      <NavComponent />
      <CarouselComponent />
      <br />
      <CardComponent />
      {/* <CardComponent /> */}
    </div>
  );
}

export default HomePageComponent;
