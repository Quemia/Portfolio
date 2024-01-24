import React, { useRef } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import { AppContainer } from "./styled";

function App() {
  return (
    <AppContainer id="home">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </AppContainer>
  );
}

export default App;
