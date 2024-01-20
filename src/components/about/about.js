import React from "react";
import { Line } from "../contact/styled";
import {
  Container,
  TextTitleAbout,
  TextAbout,
  Content,
  TitleAbout,
} from "./styed";

const About = () => {
  return (
    <>
      <Container id="about">
        <>
          <TitleAbout>About Me</TitleAbout>
        </>
        <Content>
          <TextTitleAbout>
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </TextTitleAbout>
          <TextAbout>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.u
          </TextAbout>

          <TextAbout>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.u
          </TextAbout>
        </Content>
      </Container>
      <Line />
    </>
  );
};

export default About;
