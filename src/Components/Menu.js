import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

  @media ${({ theme }) => theme.device.tabletS} {
    width: 100%;
  }
`;
const MenuBtn = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
  display: none;
  color: #fff;
  background: #1d1d1d;
  z-index: 999;
  @media ${({ theme }) => theme.device.tabletS} {
    display: block;
  }
`;
const LogoImgBox = styled.div`
  width: 100%;
  max-width: 100px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.tabletS} {
    max-width: 150px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -75px;
    display: block;
  }
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
  @media ${({ theme }) => theme.device.tabletS} {
    width: 100%;
  }
`;
const NavigationLink = styled(Link)`
  &:hover {
    transition: 0.5s;
    color: #aaff00;
  }
  width: 100%;
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
  @media ${({ theme }) => theme.device.tabletS} {
    padding: 5vh 0;
    font-size: 20px;
  }
`;
const GitBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

function Menu() {
  const [toggle, setToggle] = useState(false);
  const [menuLeft, setMenuLeft] = useState("-8vw");

  const handleResize = () => {
    window.innerWidth < 1024 ? setToggle(true) : setToggle(false);
  };
  const handleClose = () => {
    window.innerWidth < 1024 ? setToggle(true) : setToggle(false);
  };
  function handleOnClick() {
    setToggle(false);
    setMenuLeft("8vw");
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth < 1024 ? setToggle(true) : setToggle(false);
  }, []);

  return toggle ? (
    <MenuBtn onClick={handleOnClick}>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </MenuBtn>
  ) : (
    <MenuContainer>
      <LogoImgBox>
        <NavigationLink to={"/"} onClick={handleClose}>
          <LogoImg src="image/logo.png" alt="logo"></LogoImg>
        </NavigationLink>
      </LogoImgBox>
      <NavigationBox>
        {/* <NavigationLink to="/intro">
            <Navigation>Intro</Navigation>
          </NavigationLink> */}
        <NavigationLink to="/about" onClick={handleClose}>
          <Navigation>About</Navigation>
        </NavigationLink>
        <NavigationLink to="/portfolio" onClick={handleClose}>
          <Navigation>Portfolio</Navigation>
        </NavigationLink>
        <NavigationLink to="/stack" onClick={handleClose}>
          <Navigation>Stack</Navigation>
        </NavigationLink>
        <NavigationLink to="/contact" onClick={handleClose}>
          <Navigation bottom="1px solid #333">Contact</Navigation>
        </NavigationLink>
      </NavigationBox>
      <GitBox>
        <a href="https://github.com/JinMo-source">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </GitBox>
    </MenuContainer>
  );
}

export default Menu;
