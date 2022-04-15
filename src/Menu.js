import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.menu`
  width: 8vw;
  padding: 10px 20px;
  height: 100vh;
  position: fixed;
  z-index: 999;
  left: 0;
  right: auto;
  top: 0;
  bottom: 0;
  background: #181818;
  color: #fff;
`;
const LogoImgBox = styled.div`
  width: 100%;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 100%;
  display: block;
`;
const NavigationBox = styled.ul`
  width: 8vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  position: absolute;
  top: 50vh;
  margin-top: -15vh;
  left: 0;
`;
const NavigationLink = styled(Link)`
  &:hover {
    transition: 0.5s;
    color: #aaff00;
  }
  text-decoration: none;
  color: #fff;
`;

const Navigation = styled.li`
  width: 100%;
  font-weight: bold;
  padding: 2vh 0;
  cursor: pointer;
  border-top: 1px solid #333;
  border-bottom: ${(props) => props.bottom};
`;

function Menu() {
  return (
    <MenuContainer>
      <LogoImgBox>
        <NavigationLink to={"/"}>
          <LogoImg src="image/logo.png" alt="logo"></LogoImg>
        </NavigationLink>
      </LogoImgBox>
      <NavigationBox>
        <NavigationLink to="/intro">
          <Navigation>Intro</Navigation>
        </NavigationLink>
        <NavigationLink to="/about">
          <Navigation>About</Navigation>
        </NavigationLink>
        <Navigation>
          <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        </Navigation>
        <Navigation>
          <NavigationLink to="/stack">Stack</NavigationLink>
        </Navigation>
        <Navigation bottom="1px solid #333">
          <NavigationLink to="/contact">Contact</NavigationLink>
        </Navigation>
      </NavigationBox>
    </MenuContainer>
  );
}

export default Menu;
