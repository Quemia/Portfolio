import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-scroll";

import {
  Container,
  Imagem,
  ContentAbout,
  ContentText,
  ButtonIcon,
  IconB,
  ButtonEmail,
  TextHello,
  OptionDiv,
  Line,
} from "./styled";
// import { IconBase } from "react-icons/lib";

const Home = () => {
  return (
    <>
      <Container>
        <ContentAbout>
          <TextHello>Olá, eu sou a Quemia Oliveira</TextHello>
          <ContentText>Sou uma Desenvolvedora Front-End.</ContentText>
          <OptionDiv>
            <ButtonEmail>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={300}
                duration={500}
              >
                Contate-me
              </Link>
            </ButtonEmail>
            <ButtonIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/quemia-caroline-alves-de-oliveira-635042209",
                  "_blank"
                )
              }
            >
              <IconB>
                {" "}
                <FaLinkedinIn />{" "}
              </IconB>
            </ButtonIcon>
            <ButtonIcon
              onClick={() => window.open("https://github.com/Quemia", "_blank")}
            >
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
