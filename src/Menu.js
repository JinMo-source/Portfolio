import React from "react";
import styled from "styled-components";

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
const Navigation = styled.li`
  width: 100%;
  padding: 2vh 0;
  cursor: pointer;
  border-top: 1px solid #333;
  border-bottom: ${(props) => props.bottom};
`;

function Menu() {
  console.log();
  return (
    <MenuContainer>
      <LogoImgBox>
        <LogoImg src="image/logo.png" alt="logo"></LogoImg>
      </LogoImgBox>
      <NavigationBox>
        <Navigation>Intro</Navigation>
        <Navigation>About</Navigation>
        <Navigation>Portfolio</Navigation>
        <Navigation>Stack</Navigation>
        <Navigation bottom="1px solid #333">Contact</Navigation>
      </NavigationBox>
    </MenuContainer>
  );
}

export default Menu;
