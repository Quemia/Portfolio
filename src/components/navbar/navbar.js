import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Content, Options } from "./styled.js";

const Navbar = () => {
  return (
    <Container>
      <Logo src="../2.png" alt="logo.png" />
      <Content>
        <Options>
          <Link to="home" spy={true} smooth={true} offset={300} duration={500}>
            Inicio
          </Link>
        </Options>
        <Options>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={300}
            duration={500}
          >
            Projetos
          </Link>
        </Options>
        <Options> Sobre</Options>
        <Options> Contato</Options>
      </Content>
    </Container>
  );
};

export default Navbar;
