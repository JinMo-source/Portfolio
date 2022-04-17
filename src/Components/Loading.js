import React from "react";
import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const SectionContainer = styled.section`
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
const LoadingContainer = styled.div`
  width: 30vw;
  min-height: 50px;
  position: absolute;
  top: 50vh;
  left: 50%;
  margin-top: -15vh;
  margin-left: -15%;
`;
const LoadingImgBox = styled.div`
  width: 30vw;
  min-height: 200px;
  position: relative;
  div {
    width: 10vw;
    position: absolute;
    left: 10vw;
    top: 0;
    img {
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.device.tabletS} {
    div {
      width: 300px;
      min-height: 300px;
      left: 0;
    }
  }
`;
const boxFade = keyframes`
  from {
    width:0;
  }
  to{
    width:100%;
  }
`;

const LoadingPercent = styled.div`
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background-image: linear-gradient(
      45deg,
      #ff9a9e 0%,
      #fad0c4 99%,
      #fad0c4 100%
    );
    animation: ${boxFade} 1s 0s 1 linear;
  }

  margin-top: 30px;
  width: 30vw;
  height: 3px;
  border: 1px solid #222;
  @media ${({ theme }) => theme.device.tabletS} {
    width: 400px;
    margin-top: 100px;
    margin-left: -50px;
  }
`;
function Loading() {
  return (
    <MainContainer>
      <SectionContainer>
        <LoadingContainer>
          <LoadingImgBox>
            <div>
              <img src="image/logo.png" />
            </div>
          </LoadingImgBox>
          <LoadingPercent></LoadingPercent>
        </LoadingContainer>
      </SectionContainer>
    </MainContainer>
  );
}

export default Loading;
