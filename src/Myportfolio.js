import React from "react";
import styled from "styled-components";

const MainCotainer = styled.div`
  width: 92vw;
  height: 70vh;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: ${(props) => props.margin};
  display: inline-flex;
  flex-wrap: wrap;
`;
const PortfolioList = styled.div`
  width: 23vw;
  height: 35vh;
  cursor: pointer;
  box-shadow: 0 0 100px 100px rgba(0, 0, 0, 0.1);
`;

function Myportfolio() {
  return (
    <MainCotainer>
      <PortfolioList>1</PortfolioList>
      <PortfolioList>2</PortfolioList>
      <PortfolioList>3</PortfolioList>
      <PortfolioList>4</PortfolioList>
      <PortfolioList>5</PortfolioList>
      <PortfolioList>6</PortfolioList>
      <PortfolioList>7</PortfolioList>
      <PortfolioList>8</PortfolioList>
    </MainCotainer>
  );
}

export default Myportfolio;
