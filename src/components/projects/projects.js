import React, { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { RiReactjsFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";

import {
  Container,
  CardContainer,
  ImageDiv,
  ImageProject,
  ProjectAbout,
  ProjectTitle,
  ProjectDescription,
  ProjectTable,
  ProjectTableTh,
  ProjectTableTr,
  ProjectTableTd,
  Content,
  ContentTitle,
  ContentSubtitle,
  DemoContainer,
  LiveDemo,
} from "./styled.js";
import { Line } from "../contact/styled.js";

const Projects = () => {
  return (
    <>
      <Container id="projects">
        <Content>
          <ContentTitle>Projetos</ContentTitle>
          <ContentSubtitle>
            Aqui estão alguns dos projetos que mostram meu trabalho e paixão
            pelo desenvolvimento Front-End.
          </ContentSubtitle>
        </Content>

        <CardContainer>
          <ImageDiv>
            <ImageProject src="../4.png" alt="image" />
          </ImageDiv>
          <ProjectAbout>
            <ProjectTitle>Arcane</ProjectTitle>
            <ProjectDescription>
              Página no estilo Landing Page, onde mostra a promoção da nova
              temporada da serie Arcane.
            </ProjectDescription>
            <div>
              <ProjectTableTh>Informações do Projeto</ProjectTableTh>
              <ProjectTable>
                <ProjectTableTr>
                  <ProjectTableTd></ProjectTableTd>
                  <ProjectTableTd></ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Ano</ProjectTableTd>
                  <ProjectTableTd>2024</ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Role</ProjectTableTd>
                  <ProjectTableTd>Front-End Developer</ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Stack</ProjectTableTd>{" "}
                  <ProjectTableTd>HTML, CSS</ProjectTableTd>
                </ProjectTableTr>
              </ProjectTable>
            </div>
            <DemoContainer>
              <p>
                <LiveDemo
                  href="https://landing-page-arcane.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  Live Demo <GoArrowUpRight />
                </LiveDemo>
              </p>
              <LiveDemo
                href="https://github.com/Quemia/Landing_Page_Arcane"
                target="_blank"
              >
                Veja no GitHub <FaGithub />
              </LiveDemo>
            </DemoContainer>
          </ProjectAbout>
        </CardContainer>

        <CardContainer>
          <ImageDiv>
            <ImageProject src="../1.png" alt="image" />
          </ImageDiv>
          <ProjectAbout>
            <ProjectTitle>Movie List</ProjectTitle>
            <ProjectDescription>
              Esta é uma aplicação que lista todos os filmes do Studio Ghibli
              lançados até hoje.
              <br />A aplicação fornece informações sobre os filmes, como
              descrição e título original.
            </ProjectDescription>
            <div>
              <ProjectTableTh>Informações do Projeto</ProjectTableTh>
              <ProjectTable>
                <ProjectTableTr>
                  <ProjectTableTd></ProjectTableTd>
                  <ProjectTableTd></ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Ano</ProjectTableTd>
                  <ProjectTableTd>2023</ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Role</ProjectTableTd>
                  <ProjectTableTd>Front-End Developer</ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Stack</ProjectTableTd>{" "}
                  <ProjectTableTd>ReactJs, Styled-Componets</ProjectTableTd>
                </ProjectTableTr>
              </ProjectTable>
            </div>
            <DemoContainer>
              <p>
                <LiveDemo
                  href="https://movie-ghibli-list-xi.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  Live Demo <GoArrowUpRight />
                </LiveDemo>
              </p>
              <LiveDemo
                href=" https://github.com/Quemia/Movies-List/"
                target="_blank"
              >
                Veja no GitHub <FaGithub />
              </LiveDemo>
            </DemoContainer>
          </ProjectAbout>
        </CardContainer>

        <CardContainer>
          <ImageDiv>
            <ImageProject src="../3.png" alt="image" />
          </ImageDiv>
          <ProjectAbout>
            <ProjectTitle>Weather Map</ProjectTitle>
            <ProjectDescription>
              Essa aplicação mostra o clima na sua região. Ela funciona
              utilizando a localização do navegador para buscar o clima da
              região na API do Weather Map.
              <br />
              Ela retorna a temperatura, sensação térmica, umidade e etc.
            </ProjectDescription>
            <div>
              <ProjectTableTh>Informações do Projeto</ProjectTableTh>
              <ProjectTable>
                <ProjectTableTr>
                  <ProjectTableTd></ProjectTableTd>
                  <ProjectTableTd></ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Ano</ProjectTableTd>
                  <ProjectTableTd>2022</ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Role</ProjectTableTd>
                  <ProjectTableTd>Front-End Developer</ProjectTableTd>
                </ProjectTableTr>
                <ProjectTableTr>
                  <ProjectTableTd>Stack</ProjectTableTd>{" "}
                  <ProjectTableTd>ReactJs, Material UI</ProjectTableTd>
                </ProjectTableTr>
              </ProjectTable>
            </div>
            <DemoContainer>
              <p>
                <LiveDemo
                  href="https://weather-report-iota-pink.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  Live Demo <GoArrowUpRight />
                </LiveDemo>
              </p>
              <LiveDemo
                href="https://github.com/Quemia/Weather-Map/"
                target="_blank"
              >
                Veja no GitHub <FaGithub />
              </LiveDemo>
            </DemoContainer>
          </ProjectAbout>
        </CardContainer>
      </Container>
      <Line />
    </>
  );
};

export default forwardRef(Projects);
