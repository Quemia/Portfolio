import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

import {
  Container,
  ContainerAbout,
  ContentText,
  ContentContact,
  TextTitle,
  TextSubtitle,
  TextTitleAbout,
  ContactCards,
  CardIcon,
  CardText,
} from "./styed";

const About = () => {
  return (
    <>
      <ContainerAbout>
        <TextTitleAbout>About Me</TextTitleAbout>
        <p>
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.u
        </p>
      </ContainerAbout>
      <Container>
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
    </>
  );
};

export default About;
