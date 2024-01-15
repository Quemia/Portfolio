import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./components/description/description";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects"  component={<Projects />} />
        {/* <Route path="/about" exact element={<About />} /> */}
        {/* <Route path="/contact" exact element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
