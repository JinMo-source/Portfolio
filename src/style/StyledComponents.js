import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const SectionContainer = styled.section`
  &:before {
    content: "${(props) => props.text}";
    position: absolute;
    top: 20px;
    left: 9vw;
    font-size: 100px;
    color: #888;
    opacity: 0.2;
  }
  width: 100vw;
  height: 100vh;
  position: relative;
  right: 0;
`;
export const LeftTextBox = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin-top: ${(props) => props.margin};
`;

// Line
export const Line = styled.div`
  &:before {
    content: "";
    display: block;
    width: ${(props) => props.circle};
    height: ${(props) => props.circle};
    background: #333;
    opacity: 0.2;
    background: ${(props) => props.colors};
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.circleLeft};
    border-radius: 50%;
  }
  position: relative;
  width: 1px;
  height: 100vh;
  position: fixed;
  background: #333;
  top: 0;
  left: ${(props) => props.left};
`;
