import React from "react";
import styled from "styled-components";

const MenuContainer = styled.menu`
  width: 8vw;
  padding: 30px 30px;
  height: 100vh;
  position: fixed;
  left: 0;
  right: auto;
  top: 0;
  bottom: 0;
  background: #181818;
  color: #fff;
`;
function Menu() {
  console.log();
  return <MenuContainer>Menu</MenuContainer>;
}

export default Menu;
