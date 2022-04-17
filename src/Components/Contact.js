import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Loading from "./Loading";
import { SectionContainer, LeftTextBox } from "../style/StyledComponents";

const ContactText = styled.div`
  text-align: center;
  line-height: 20px;
  h2 {
    font-weight: bold;
    font-size: 40px;
  }
  span {
    font-size: 16px;
  }
  p {
    margin-top: 10px;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    h2 {
      font-size: 40px;
    }
    span {
      font-size: 16px;
    }
    p {
      font-size: 17px;
    }
  }
`;

const Form = styled.form`
  width: 30vw;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  textarea {
    &::placeholder {
      color: #ccc;
    }
    margin-top: 10px;
    width: 30vw;
    height: 25vh;
    background: transparent;
    border: 1px solid #333;
    border-radius: 3px;
    padding: 10px;
    outline: none;
    color: #ccc;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    width: 45vw;
    padding: 0 10px;
    textarea {
      height: 200px;
      width: 45vw;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const EmailBox = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  right: 13vw;
  margin-top: ${(props) => props.margin};
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 30px;
    right: 8vw;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    font-size: 30px;
    right: 20px;
  }
`;

const Input = styled.input`
  &::placeholder {
    color: #ccc;
  }
  width: ${(props) => props.width};
  height: 20px;
  margin 3px 0;
  background: transparent;
  border-bottom: 1px solid #333;
  outline: none;
  color: #ccc;
  margin-right:${(props) => props.margin};
  padding:${(props) => props.padding};

  @media ${({ theme }) => theme.device.tabletS} {
    width:48%;
  }
`;
const SendInput = styled.input`
  &::placeholder {
    color: #ccc;
  }
  width: ${(props) => props.width};
  height: 20px;
  background: transparent;
  outline: none;
  color: #ccc;
  border: "1px solid #333";
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  padding: ${(props) => props.padding};

  @media ${({ theme }) => theme.device.tabletS} {
    right: 10px;
  }
`;

const Contact = () => {
  const form = useRef();
  const [loadingTime, setLoadingTime] = useState(true);
  function Loadingdelay() {
    setLoadingTime(false);
  }
  setTimeout(Loadingdelay, 1000);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gmct61k",
        "template_afty0bo",
        form.current,
        "iV0evr4u3QM9l-1hQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return loadingTime ? (
    <Loading />
  ) : (
    <SectionContainer text="Contact.">
      <LeftTextBox top="50vh" left="16vw" margin="-5vh">
        <ContactText>
          <h2>Contact</h2>
          <br />
          <span>소중한 시간을 저에게 사용을 해주셔서 봐주셔서 감사합니다.</span>
          <p>
            Phone : 010-2477-1240
            <br />
            Email : qkrwslah12342@gmail.com
          </p>
        </ContactText>
      </LeftTextBox>
      <EmailBox top="42vh" margin="-10vh">
        <Form ref={form} onSubmit={sendEmail}>
          <Input
            type="text"
            name="user_name"
            placeholder="Name"
            padding="5px 0"
            width="14.4vw"
            margin="10px"
          />
          <Input
            type="email"
            name="user_email"
            padding="5px 0"
            placeholder="Email"
            width="14.4vw"
          />
          <textarea name="message" placeholder="message" />
          <SendInput
            type="submit"
            value="Send"
            position="absolute"
            right="0"
            bottom="-30px"
            padding="2px 10px"
          />
        </Form>
      </EmailBox>
    </SectionContainer>
  );
};
export default Contact;
