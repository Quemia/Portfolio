import React, { useRef } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:1;
  /* position: fixed; */

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #222222;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin: 0;
    padding-top: 3.5rem;
    color: #fff;
  }

  li {
    list-style-type: none;
    color: #fff;
    font: normal bold 16px/8px "Inter", "sans-serif";
    background-color: transparent;
    border: transparent;
    margin-right: 16px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
`;

const Sidebar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link
          style={{ color: "#fff", listStyle: "none", border: "transparent" }}
          to="home"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
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
          offset={40}
          duration={500}
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
          offset={40}
          duration={500}
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
          offset={300}
          duration={500}
        >
          Contato
        </Link>
      </li>
    </Ul>
  );
};

export default Sidebar;
