import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Myportfolio from "./Myportfolio";

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
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 50vh;
  right: 10vw;
  margin-top: -25vh;
`;

// About
const AboutMe = styled.div`
  width: 30vw;
  height: 70vh;
  border-radius: 5px;
  h2 {
    font-size: 25px;
    font-weight: bold;
    color: #e4ee89;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 50px;
    color: #fff;
    span {
      font-weight: bold;
      color: #e4ee89;
    }
  }
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

const StackCotainer = styled.div`
  width: 92vw;
  height: 83vh;
  position: absolute;
  bottom: 0;
  right: 0;
  h2 {
    padding: 30px 5vh;
    font-size: 23px;
    font-weight: bold;
  }
`;

const SkillMyself = styled.div`
  width: 92vw;
  height: 20vh;
  display: inline-flex;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 7vh;
  div {
    width: 30.9999vw;
    p {
      font-size: 24px;
      padding: 20px 0;
    }
  }
`;

const Skill = styled.div`
  width: 92vw;
  height: 9vh;
  display: flex;
  position: relative;
`;
const SkillName = styled.div`
  width: 10vw;
  height: 10vh;
  font-weight: bold;
  line-height: 10vh;
  text-align: center;
`;
const SkillPerscent = styled.div`
  width: ${(props) => props.width};
  height: 2px;
  background: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 10vw;
  margin-top: 1px;
`;

function Home() {
  return (
    <MainContainer>
      <Menu />
      <Line
        circle="150px"
        circleLeft="-130px"
        top="18%"
        left="25%"
        colors="#ff0000"
      />
      <Line
        circle="300px"
        circleLeft="-210px"
        top="53%"
        left="50%"
        colors="#bfff00"
      />
      <Line
        circle="200px"
        circleLeft="100px"
        top="80%"
        left="75%"
        colors="#0080ff"
      />
      <Line
        circle="200px"
        circleLeft="-250px"
        top="10%"
        left="75%"
        colors="#f5f5dc"
      />
      <SectionContainer text="Intro.">
        <LeftTextBox top="50vh" left="12vw" margin="-12.5vh">
          <BigIntroMyself>
            Frontend
            <br />
            Developer.
          </BigIntroMyself>
          <SmallIntroMyself>
            안녕하세요, 발전하는 프론트엔드 개발자 박진모입니다.
          </SmallIntroMyself>
        </LeftTextBox>
        <IntroImgBox>123</IntroImgBox>
      </SectionContainer>
      <SectionContainer text="About.">
        <LeftTextBox top="30vh" left="12vw" margin="-10vh">
          <AboutMe>
            <h2>나를 소개합니다.</h2>
            <p>
              안녕하세요 <span>프론트 엔드 개발자 박진모</span>입니다.
              <br />
              제가 처음 개발자에 관심을 가진 계기는 자기 계발 책을 읽던 중
              개발에 관한 내용에 대해 읽게 되었습니다. 저는 그 후 개발자는
              어떻게 프로그램을 만드는지 관심을 가지게 되었습니다.
              <br />
              개발 하는데 있어 많은 언어가 사용되며 프론트 엔드와 백 엔드로
              직업이 나눠지는걸 알게 되었고 한번 배워보고 싶다는 생각을 가지게
              되었으며 국비 지원을 받아 학원을 다니게 되었습니다.
              <br />
              하지만 학원에서 배우는(html,css,javascript) 정도로는 회사에서
              원하는 프론트 엔드에 대한 수준을 맞추기 어렵다는걸 알았습니다.
              <br />
              그래서 처음은 웹 퍼블리셔로 취직을 하여 프론트 엔드,백 엔드는 어떤
              언어를 많이 쓰며 어떻게 일을 하는지를 배우며 나중에 제가 공부를
              해야 할 방향을 정하게 되었으며, 근무가 끝나 퇴근을 하면 프론트
              엔드에 대하여 공부를 하게 되었습니다.
              <br />
              <span>
                "저는 아직 많이 부족한걸 알지만 항상 처음 시작한다는 느낌으로
                매일 매일 발전을 하는 프론트 엔드 개발자가 되겠습니다."
              </span>
            </p>
          </AboutMe>
        </LeftTextBox>
      </SectionContainer>
      <SectionContainer text="My Portfolio">
        <Myportfolio />
      </SectionContainer>
      <SectionContainer text="STACK">
        <StackCotainer>
          <SkillMyself>
            <div>
              <p>이름</p>
              <span>박진모</span>
            </div>
            <div>
              <p>나이</p>
              <span>25세</span>
            </div>
            <div>
              <p>경력</p>
              <span>웹 퍼블리셔 1년</span>
            </div>
          </SkillMyself>
          <div>
            <h2>스킬 숙련도</h2>
            <Skill>
              <SkillName>HTML</SkillName>
              <SkillPerscent width="80%" color="#ff7f00"></SkillPerscent>
            </Skill>
            <Skill>
              <SkillName>CSS</SkillName>
              <SkillPerscent width="80%" color="#00beff"></SkillPerscent>
            </Skill>
            <Skill>
              <SkillName>Javascript</SkillName>
              <SkillPerscent width="70%" color="#ffcf00"></SkillPerscent>
            </Skill>
            <Skill>
              <SkillName>Typescript</SkillName>
              <SkillPerscent width="40%" color="#1700ff"></SkillPerscent>
            </Skill>
            <Skill>
              <SkillName>React</SkillName>
              <SkillPerscent width="60%" color="#00ff68"></SkillPerscent>
            </Skill>
          </div>
        </StackCotainer>
      </SectionContainer>
    </MainContainer>
  );
}

export default Home;
