import React, { useState } from "react";
import styled from "styled-components";

import { SectionContainer, LeftTextBox } from "../style/StyledComponents";

const BigIntroMyself = styled.h1`
  font-size: 103px;
  font-weight: bold;
  color: #ccf381;
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 90px;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    font-size: 70px;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    font-size: 70px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 90px;
  }
`;
const SmallIntroMyself = styled.h2`
  font-size: 20px;
  line-height: 50px;
  padding-left: 6px;
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 17px;
    line-height: 30px;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    font-size: 15px;
    line-height: 15px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
    line-height: 7px;
  }
`;

const IntroImgBox = styled.div`
  width: 30vw;
  min-width: 350px;
  text-align: center;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  margin-top: -22vh;
  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.labtop} {
    width: 35vw;
    top: 45vh;
    right: 5vw;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

function Intro() {
  const [loadingTime, setLoadingTime] = useState(true);
  function Loadingdelay() {
    setLoadingTime(false);
  }

  setTimeout(Loadingdelay, 1000);
  return (
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
      <IntroImgBox top="50vh" right="13vw">
        <img src="image/intro.png" alt="intro" />
      </IntroImgBox>
    </SectionContainer>
  );
}

export default Intro;
