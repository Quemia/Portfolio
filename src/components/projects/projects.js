import React from "react";

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
} from "./styled.js";

const Projects = () => {
  return (
    <Container>
      <Content>
        <ContentTitle>Featured Projects</ContentTitle>
        <ContentSubtitle>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </ContentSubtitle>
      </Content>
      <CardContainer>
        <ImageDiv>
          <ImageProject src="../1.png" alt="image" />
        </ImageDiv>
        <ProjectAbout>
          <ProjectTitle>Movie List</ProjectTitle>
          <ProjectDescription>
            Successfully crafted an engaging product page featuring a dynamic
            lightbox gallery and seamless cart functionality, showcasing
            proficiency in JavaScript development.
          </ProjectDescription>
          <div>
            <ProjectTable>
              <ProjectTableTr>
                <ProjectTableTd>
                  <ProjectTableTh>Project Info</ProjectTableTh>
                </ProjectTableTd>
                <ProjectTableTd></ProjectTableTd>
              </ProjectTableTr>
              <ProjectTableTr>
                <ProjectTableTd>Year</ProjectTableTd>
                <ProjectTableTd>2022</ProjectTableTd>
              </ProjectTableTr>
              <ProjectTableTr>
                <ProjectTableTd>Role</ProjectTableTd>
                <ProjectTableTd>Front-End Developer</ProjectTableTd>
              </ProjectTableTr>
            </ProjectTable>
          </div>
          <div>
            <p>
              <a
                href="https://movie-ghibli-list-xi.vercel.app/"
                target="_blank"
              >
                {" "}
                Live Demo
              </a>
            </p>
            <p>See on GitHub</p>
          </div>
        </ProjectAbout>
      </CardContainer>

      <CardContainer>
        <ImageDiv>
          <ImageProject src="../1.png" alt="image" />
        </ImageDiv>
        <ProjectAbout>
          <ProjectTitle>Weather Map</ProjectTitle>
          <ProjectDescription>
            Successfully crafted an engaging product page featuring a dynamic
            lightbox gallery and seamless cart functionality, showcasing
            proficiency in JavaScript development.
          </ProjectDescription>
          <div>
            <ProjectTable>
              <ProjectTableTr>
                <ProjectTableTd>
                  <ProjectTableTh>Project Info</ProjectTableTh>
                </ProjectTableTd>
                <ProjectTableTd></ProjectTableTd>
              </ProjectTableTr>
              <ProjectTableTr>
                <ProjectTableTd>Year</ProjectTableTd>
                <ProjectTableTd>2022</ProjectTableTd>
              </ProjectTableTr>
              <ProjectTableTr>
                <ProjectTableTd>Role</ProjectTableTd>
                <ProjectTableTd>Front-End Developer</ProjectTableTd>
              </ProjectTableTr>
            </ProjectTable>
          </div>
          <div>
            <p>
              <a
                href="https://weather-report-9nfy1ujzf-quemias-projects.vercel.app/"
                target="_blank"
              >
                {" "}
                Live Demo
              </a>
            </p>
            <p>See on GitHub</p>
          </div>
        </ProjectAbout>
      </CardContainer>
    </Container>
  );
};

export default Projects;
