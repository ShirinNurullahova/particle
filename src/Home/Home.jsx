import React from "react";
import Contact from "./Contact";
import Header from "./Header";
import Main from "./Main";
import Inspiration from "./Inspiration/index";
import CardSlider from "./CardSlider";
import Chapter from "./Chapter";

const Home = () => {
  return (
    <>
   
      <Header />
      <Main />
      <Inspiration />
      <CardSlider />
      <Chapter />
      <Contact />
    </>
  );
};

export default Home;
