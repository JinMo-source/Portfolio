import React, { useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { SectionContainer, LeftTextBox } from "../style/StyledComponents";

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
  @media ${({ theme }) => theme.device.labtop} {
    h2 {
      padding: 10px 3vh;
    }
  }

  @media ${({ theme }) => theme.device.tabletS} {
    width: 100vw;
    h2 {
      font-size: 13px;
      margin-bottom: 5px;
    }
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

  @media ${({ theme }) => theme.device.labtop} {
    height: 15vh;
    font-size: 24px;
    div {
      p {
        font-size: 20px;
        padding: 20px 0;
      }
    }
  }
  @media ${({ theme }) => theme.device.tabletS} {
    width: 100vw;
    font-size: 15px;
    div {
      p {
        font-size: 16px;
        padding: 20px 0;
      }
    }
  }
`;

const Skill = styled.div`
  width: 92vw;
  height: 9vh;
  display: flex;
  position: relative;
  @media ${({ theme }) => theme.device.tabletS} {
    width: 100vw;
  }
`;
const SkillName = styled.div`
  width: 10vw;
  height: 10vh;
  font-weight: bold;
  line-height: 10vh;
  text-align: center;
  @media ${({ theme }) => theme.device.tabletS} {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 13vw;
  }
`;
const SkillPerscent = styled.div`
  width: ${(props) => props.width};
  height: 2px;
  background: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 10vw;
  margin-top: 1px;
  @media ${({ theme }) => theme.device.tablet} {
    left: 13vw;
  }
`;

function Stack() {
  const [loadingTime, setLoadingTime] = useState(true);
  function Loadingdelay() {
    setLoadingTime(false);
  }

  setTimeout(Loadingdelay, 1000);
  return loadingTime ? (
    <Loading />
  ) : (
    <SectionContainer text="Stack">
      <StackCotainer>
        <SkillMyself>
          <div>
            <p>??????</p>
            <span>?????????</span>
          </div>
          <div>
            <p>??????</p>
            <span>1998.01.30 (25???)</span>
          </div>
          <div>
            <p>??????</p>
            <span>??? ???????????? 1???</span>
          </div>
        </SkillMyself>
        <div>
          <h2>?????? ?????????</h2>
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
  );
}

export default Stack;
