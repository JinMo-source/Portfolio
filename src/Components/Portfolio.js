import React, { useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { SectionContainer } from "../style/StyledComponents";

const PortfolioBox = styled.div`
  width: 92vw;
  height: 70vh;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: ${(props) => props.margin};
  display: inline-flex;
  flex-wrap: wrap;
  overflow: hidden;
  @media ${({ theme }) => theme.device.tabletS} {
    width: 100%;
  }
`;
const PortfolioList = styled.div`
  width: 23vw;
  height: 35vh;
  cursor: pointer;
  box-shadow: 0 0 100px 100px rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.device.tabletS} {
    width: 33.333%;
  }
`;

function Portfolio() {
  const [loadingTime, setLoadingTime] = useState(true);
  function Loadingdelay() {
    setLoadingTime(false);
  }

  setTimeout(Loadingdelay, 1000);
  return loadingTime ? (
    <Loading />
  ) : (
    <SectionContainer text="My Portfolio">
      <PortfolioBox>
        <PortfolioList>1</PortfolioList>
        <PortfolioList>2</PortfolioList>
        <PortfolioList>3</PortfolioList>
        <PortfolioList>4</PortfolioList>
        <PortfolioList>5</PortfolioList>
        <PortfolioList>6</PortfolioList>
        <PortfolioList>7</PortfolioList>
        <PortfolioList>8</PortfolioList>
      </PortfolioBox>
    </SectionContainer>
  );
}

export default Portfolio;
