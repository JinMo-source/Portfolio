import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const SectionContainer = styled.section`
  &:before {
    content: "${(props) => props.text}";
    position: absolute;
    top: 30px;
    left: 230px;
    font-size: 100px;
    color: #888;
    opacity: 0.2;
  }
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const LeftTextBox = styled.div`
  padding-left: 200px;
  position: absolute;
  top: 50vh;
  left: 6vw;
  margin-top: -12.5vh;
`;
const BigIntroMyself = styled.h1`
  font-size: 103px;
  font-weight: bold;
  outline: rgb(255, 255, 255) dashed 0px;
  color: #ccf381;
`;
const SmallIntroMyself = styled.h2`
  font-size: 20px;
  line-height: 50px;
  padding-left: 6px;
  outline: rgb(255, 255, 255) dashed 0px;
`;
const IntroImgBox = styled.div`
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 50vh;
  margin-top: -25vh;
  right: 10vw;
`;
const Line = styled.div`
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

function Home() {
  console.log();
  return (
    <MainContainer>
      <Menu />
      <Line
        circle="100px"
        circleLeft="-50px"
        top="20%"
        left="25%"
        colors="#ff0000"
      />
      <Line
        circle="200px"
        circleLeft="-100px"
        top="48%"
        left="50%"
        colors="#bfff00"
      />
      <Line
        circle="150px"
        circleLeft="-75px"
        top="80%"
        left="75%"
        colors="#0080ff"
      />
      <SectionContainer text="Intro.">
        <LeftTextBox>
          <BigIntroMyself>
            Frontend
            <br />
            Developer.
          </BigIntroMyself>
          <SmallIntroMyself>
            안녕하세요, 발전하는 프론트엔드 개발자 박진모입니다.
          </SmallIntroMyself>
        </LeftTextBox>
        <IntroImgBox></IntroImgBox>
      </SectionContainer>
      <SectionContainer text="About.">
        <LeftTextBox>
          <BigIntroMyself>
            Frontend
            <br />
            Developer.
          </BigIntroMyself>
          <SmallIntroMyself>
            안녕하세요, 발전하는 프론트엔드 개발자 박진모입니다.
          </SmallIntroMyself>
        </LeftTextBox>
      </SectionContainer>
      <SectionContainer></SectionContainer>
    </MainContainer>
  );
}

export default Home;
