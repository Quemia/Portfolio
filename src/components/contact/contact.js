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
        <TextTitle>Vamos nos Conectar!</TextTitle>
        <TextSubtitle>
          Me envie um email ou uma mensagem pelo LinkedIn.
        </TextSubtitle>

        <TextSubtitle>
          Para mais informações aqui está meu currículo.    
         
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
