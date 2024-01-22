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
          <TitleAbout>Sobre Mim</TitleAbout>
        </>
        <Content>
          <TextTitleAbout>
            {/* I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "} */}
            Sou uma Desenvolvedora Front-End :).
          </TextTitleAbout>
          <TextAbout>
            Tenho paixão por criar interfaces visuais atraentes e intuitivas,
            sempre visando proporcionar a melhor experiência possível ao
            usuário. Observar o código tomar vida na tela, com cada elemento se
            encaixando harmoniosamente, é o que mais me fascina na programação.
            O desafio que mais aprecio é a criação de código limpo e eficiente,
            resolvendo problemas de maneira elegante e proporcionando soluções
            inovadoras
          </TextAbout>

          <TextAbout>
            Além do meu ambiente profissional, tenho grande apreço pela natação
            e participo regularmente de competições nesse esporte. Acredito
            firmemente que a disciplina exigida pelo esporte contribui para o
            desenvolvimento do atleta em diversas áreas da vida. Além disso, sou
            uma entusiasta ávida da leitura, dedicando-me com entusiasmo a
            explorar universos incríveis por meio dos livros e desfrutando das
            viagens que a leitura proporciona.
          </TextAbout>
        </Content>
      </Container>
      <Line />
    </>
  );
};

export default About;
