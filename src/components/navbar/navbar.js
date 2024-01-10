import React from "react";
import { Container, Logo, Content, Options } from "./styled.js";

const Navbar = () => {
  return (
    <Container>
      <Logo src="../2.png" alt="logo.png"/>
      <Content>
        <Options>Inicio</Options>
        <Options>Sobre</Options>
        <Options>Projetos</Options>
        <Options>Contato</Options>
      </Content>
    </Container>
  );
};

export default Navbar;
