import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Form = styled.form`
  width: 30vw;
  height: 38vh;
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
  position:${(props) => props.position};
  right:${(props) => props.right};
  bottom:${(props) => props.bottom};
  border:${(props) => props.border};
  border-radius:${(props) => props.radius};
  padding:${(props) => props.padding};
  cursor:${(props) => props.cursor};
`;
const Contact = () => {
  const form = useRef();

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

  return (
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
      <Input
        type="submit"
        value="Send"
        position="absolute"
        right="0"
        bottom="0"
        padding="2px 10px"
        border="1px solid #333"
        radius="3px"
        cursor="pointer"
      />
    </Form>
  );
};
export default Contact;
