import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import { AppContainer } from "./styled";
import Home from "./components/home/home";

function App() {
  return (
    <AppContainer>
      <Navbar />
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
