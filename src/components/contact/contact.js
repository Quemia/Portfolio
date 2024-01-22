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
  const handleSend = () => {
    window.open =
      ("https://www.linkedin.com/in/quemia-caroline-alves-de-oliveira-635042209/",
      "_blank");
  };

  return (
    <Container id="contact">
      <ContentText>
        <TextTitle>Vamos nos Conectar!</TextTitle>
        <TextSubtitle>
          Me envie um email ou uma mensagem pelo LinkedIn.
        </TextSubtitle>

        {/* <TextSubtitle>
          Para mais informações aqui está meu currículo.
          <a href="www.com" target="_blank">
            resume
          </a>
        </TextSubtitle> */}
      </ContentText>
      <ContentContact>
        <ContactCards
          onClick={() => (window.location = "mailto:quemiac@gmail.com")}
        >
          <CardIcon style={{ color: "#edbc11" }}>
            <MdEmail />
          </CardIcon>
          <CardText>quemiac@gmail.com</CardText>
        </ContactCards>

        <ContactCards
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/quemia-caroline-alves-de-oliveira-635042209",
              "_blank"
            )
          }
        >
          <CardIcon style={{ color: "#126bc4" }}>
            <FaLinkedin />
          </CardIcon>
          <CardText>quemiaoliveira</CardText>
        </ContactCards>
      </ContentContact>
    </Container>
  );
};

export default Contact;
