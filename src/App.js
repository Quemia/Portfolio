import React, { useRef } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import { AppContainer } from "./styled";
import { Link } from "react-scroll";
import {
  Container,
  Logo,
  Content,
  Options,
} from "../src/components/navbar/styled";
import projects from "./components/projects/projects";

function App() {
  return (
    <AppContainer id="home">
      <Container>
        <Logo src="../2.png" alt="logo.png" /> */}
        <Content>
          <Options>
            <Link to="home" spy={true} smooth={true} offset={10} duration={500}>
              Inicio
            </Link>
          </Options>
          <Options>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              Projetos
            </Link>
          </Options>
          <Options>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              Sobre
            </Link>
          </Options>
          <Options>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={300}
              duration={500}
            >
              Contato
            </Link>
          </Options>
        </Content>
      </Container>
      <div>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </AppContainer>
  );
}

export default App;
