import React from "react";
import { FullPage, Slide } from "react-full-page";

import Intro from "./Intro";
import About from "./About";
import Portfolio from "./Portfolio";
import Stack from "./Stack";
import Contact from "./Contact";

import { MainContainer, Line } from "../style/StyledComponents";

function Home() {
  return (
    <MainContainer>
      <Line
        circle="150px"
        circleLeft="-130px"
        top="18%"
        left="25%"
        colors="#ff0000"
      />
      <Line
        circle="300px"
        circleLeft="-210px"
        top="53%"
        left="50%"
        colors="#bfff00"
      />
      <Line
        circle="200px"
        circleLeft="100px"
        top="80%"
        left="75%"
        colors="#0080ff"
      />
      <Line
        circle="200px"
        circleLeft="-250px"
        top="10%"
        left="75%"
        colors="#f5f5dc"
      />
      <FullPage duration={"1000"}>
        <Slide>
          <Intro />
        </Slide>
        <Slide>
          <About />
        </Slide>
        <Slide>
          <Portfolio />
        </Slide>
        <Slide>
          <Stack />
        </Slide>
        <Slide>
          <Contact />
        </Slide>
      </FullPage>
    </MainContainer>
  );
}

export default Home;
