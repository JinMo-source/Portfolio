import React from "react";
import styled from "styled-components";

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
const LeftTextBox = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin-top: ${(props) => props.margin};
`;
const BigIntroMyself = styled.h1`
  font-size: 103px;
  font-weight: bold;
  color: #ccf381;
`;
const SmallIntroMyself = styled.h2`
  font-size: 20px;
  line-height: 50px;
  padding-left: 6px;
`;
const IntroImgBox = styled.div`
  max-width: ${(props) => props.max};
  max-height: ${(props) => props.max};
  width: 30vw;
  height: 30vw;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  margin-top: -25vh;
`;

function Intro() {
  return (
    <MainContainer>
      <SectionContainer text="Intro.">
        <LeftTextBox top="50vh" left="13vw" margin="-12.5vh">
          <BigIntroMyself>
            Frontend
            <br />
            Developer.
          </BigIntroMyself>
          <SmallIntroMyself>
            안녕하세요, 발전하는 프론트엔드 개발자 박진모입니다.
          </SmallIntroMyself>
        </LeftTextBox>
        <IntroImgBox max="500px" top="50vh" right="13vw">
          <img src="image/intro.png" alt="intro" />
        </IntroImgBox>
      </SectionContainer>
    </MainContainer>
  );
}

export default Intro;
