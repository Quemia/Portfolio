import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

import {
  Container,
  ContentText,
  ContentContact,
  TextTitle,
  TextSubtitle,
  ContactCards,
  CardIcon,
  CardText,
} from "./styled.js";

const Contact = () => {
  return (
    <Container id="contact">
      <ContentText>
        <TextTitle>Let's Connect</TextTitle>
        <TextSubtitle>Send me email</TextSubtitle>
        <TextSubtitle>
          For more info here's my{" "}
          <a href="www.com" target="_blank">
            resume
          </a>
        </TextSubtitle>
      </ContentText>
      <ContentContact>
        <ContactCards>
          <CardIcon>
            {" "}
            <MdEmail />
          </CardIcon>
          <CardText>quemiac@gmail.com</CardText>
        </ContactCards>
        <ContactCards>
          <CardIcon>
            {" "}
            <FaLinkedin />
          </CardIcon>
          <CardText>quemiaoliveira</CardText>
        </ContactCards>
      </ContentContact>
    </Container>
  );
};

export default Contact;
