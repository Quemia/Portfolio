import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

import {
  Container,
  ContentText,
  ContentContact,
  TextTitle,
  TextSubtitle,
  ContactCards,
  CardIcon,
  CardText,
  ButtonDownload,
  DivTextCopyright,
  TitleCopyright,
  SubtitleCopyright,
} from "./styled.js";

const PDF_FILE_URL = "../Quemia_Oliveira.pdf";

const Contact = () => {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");

    aTag.href = url;
    aTag.setAttribute("download", fileName);

    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <>
      <Container id="contact">
        <ContentText>
          <TextTitle>Vamos nos Conectar!</TextTitle>
          <TextSubtitle>
            Me envie um Email ou uma mensagem pelo LinkedIn.
          </TextSubtitle>

          <TextSubtitle>
            Para mais informações aqui está meu
            <ButtonDownload
              onClick={() => {
                downloadFileAtUrl(PDF_FILE_URL);
              }}
            >
              Currículo.
            </ButtonDownload>
          </TextSubtitle>
        </ContentText>
        <ContentContact>
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

          <ContactCards
            onClick={() => (window.location = "mailto:quemiac@gmail.com")}
          >
            <CardIcon style={{ color: "#edbc11" }}>
              <MdEmail />
            </CardIcon>
            <CardText>quemiac@gmail.com</CardText>
          </ContactCards>
        </ContentContact>
      </Container>
      <DivTextCopyright>
        <TitleCopyright>Copyright</TitleCopyright>
        <FaRegCopyright />
        <TitleCopyright>2024</TitleCopyright>

        <SubtitleCopyright>All rights reserved</SubtitleCopyright>
      </DivTextCopyright>
    </>
  );
};

export default Contact;
