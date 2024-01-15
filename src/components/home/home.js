import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import {
  Container,
  Imagem,
  ContentAbout,
  ContentText,
  ButtonIcon,
  IconB,
  ButtonEmail,
  IconDot,
  OptionDiv,
  Line,
} from "./styled";
// import { IconBase } from "react-icons/lib";

const Home = () => {
  return (
    <>
      <Container>
        <ContentAbout>
          <h1>Hello, I am Quemia Oliveira</h1>
          <ContentText>
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </ContentText>
          <OptionDiv>
            <ButtonEmail>
              CONTACT ME{" "}
              <IconDot>
                {" "}
                <GoDotFill />{" "}
              </IconDot>
            </ButtonEmail>
            <ButtonIcon>
              <IconB>
                {" "}
                <FaLinkedinIn />{" "}
              </IconB>
            </ButtonIcon>
            <ButtonIcon>
              <IconB>
                {" "}
                <FaGithub />{" "}
              </IconB>
            </ButtonIcon>
          </OptionDiv>
        </ContentAbout>
        <div>
          <Imagem alt="img-dev" src="eu.jpeg" />
        </div>
      </Container>
      <Line />
    </>
  );
};

export default Home;
