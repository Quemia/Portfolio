import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Container, Logo, Ul } from "./styled";
import { Link } from "react-scroll";

const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  position: absolute;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media (max-width: 768px) {
    top: 25px;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    margin: 4px 10px;
    background-color: ${({ open }) => (open ? "#a6ff967a" : "#a6ff96")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Logo src="../2.png" alt="logo.png" />

      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>

      <Ul open={open}>
        <li>
          <Link
            style={{ color: "#fff", listStyle: "none", border: "transparent" }}
            to="home"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "#fff", listStyle: "none", border: "transparent" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "#fff", listStyle: "none", border: "transparent" }}
            to="about"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            open={false}
            onClick={() => setOpen(false)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "#fff", listStyle: "none", border: "transparent" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={40}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Contato
          </Link>
        </li>
      </Ul>
    </Container>
  );
};

export default Navbar;
