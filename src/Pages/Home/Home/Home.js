import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
