import React, { useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { SectionContainer, LeftTextBox } from "../style/StyledComponents";

const AboutMe = styled.div`
  width: 450px;
  h2 {
    font-size: 25px;
    font-weight: bold;
    color: #e4ee89;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    line-height: 45px;
    color: #fff;
    span {
      font-weight: bold;
      color: #e4ee89;
    }
  }

  @media ${({ theme }) => theme.device.labtop} {
    width: 400px;
    h2 {
      font-size: 17px;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
      line-height: 38px;
    }
  }

  @media ${({ theme }) => theme.device.tabletL} {
    width: 350px;
    h2 {
      font-size: 13px;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
      line-height: 33px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    h2 {
      font-size: 17px;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
      line-height: 23px;
    }
  }
`;

const IntroImgBox = styled.div`
  width: 25vw;
  min-width: 400px;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  overflow: hidden;

  @media ${({ theme }) => theme.device.desktop} {
    top: 19vh;
    right: 5vw;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    min-width: 350px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 30vh;
    min-width: 30vh;
    top: auto;
    right: 50%;
    margin-right: -25%;
    bottom: 0;
  }
`;

const AboutImg = styled.img`
  width: 100%;
`;

function About() {
  const [loadingTime, setLoadingTime] = useState(true);
  function Loadingdelay() {
    setLoadingTime(false);
  }

  setTimeout(Loadingdelay, 1000);
  return loadingTime ? (
    <Loading />
  ) : (
    <SectionContainer text="About.">
      <LeftTextBox top="20vh" left="13vw">
        <AboutMe>
          <h2>나를 소개합니다.</h2>
          <p>
            안녕하세요 <span>프론트 엔드 개발자 박진모</span>입니다.
            <br />
            제가 처음 개발자에 관심을 가진 계기는 자기 계발 책을 읽던 중 개발에
            관한 내용에 대해 읽게 되었습니다. 저는 그 후 개발자는 어떻게
            프로그램을 만드는지 관심을 가지게 되었습니다. 개발 하는데 있어 많은
            언어가 사용되며 프론트 엔드와 백 엔드로 직업이 나눠지는걸 알게
            되었고 한번 배워보고 싶다는 생각을 가지게 되었으며 국비 지원을 받아
            학원을 다니게 되었습니다.
            <br />
            하지만 학원에서 배우는(html,css,javascript) 정도로는 회사에서 원하는
            프론트 엔드에 대한 수준을 맞추기 어렵다는걸 알았습니다. 그래서
            처음은 웹 퍼블리셔로 취직을 하여 프론트 엔드,백 엔드는 어떤 언어를
            많이 쓰며 어떻게 일을 하는지를 배우며 나중에 제가 공부를 해야 할
            방향을 정하게 되었으며, 근무가 끝나 퇴근을 하면 프론트 엔드에 대하여
            공부를 하게 되었습니다.
            <span>
              "저는 아직 많이 부족한걸 알지만 항상 처음 시작한다는 느낌으로 매일
              매일 발전을 하는 프론트 엔드 개발자가 되겠습니다."
            </span>
          </p>
        </AboutMe>
      </LeftTextBox>
      <IntroImgBox top="20vh" right="13vw">
        <AboutImg src="image/about.png" alt="about" />
      </IntroImgBox>
    </SectionContainer>
  );
}

export default About;
