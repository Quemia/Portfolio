import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Content, Options } from "./styled.js";

const Navbar = () => {
  return (
    <Container>
      <Logo src="../2.png" alt="logo.png" />
      <Content>
        <Options>Inicio</Options>
        <Options href="projects">Projetos</Options>
        <Options> Sobre</Options>
        <Options> Contato</Options>
      </Content>
    </Container>
  );
};

export default Navbar;
