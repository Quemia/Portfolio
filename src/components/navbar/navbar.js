import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Content, Options } from "./styled.js";

const Navbar = () => {
  return (
    <Container>
      <Logo src="../2.png" alt="logo.png" />
      <Content>
        <Options>
          {/* <Link to="/"> Inicio</Link> */}
        </Options>
        <Options>
          {" "}
          {/* <Link to="/projects">Projetos </Link> */}
        </Options>
        <Options>
          {" "}
          {/* <Link to="/about" /> */}
          Sobre
        </Options>
        <Options>
          {" "}
          {/* <Link to="/contact" /> */}
          Contato
        </Options>
      </Content>
    </Container>
  );
};

export default Navbar;
