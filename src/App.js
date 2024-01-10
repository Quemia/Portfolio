import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import { AppContainer } from "./styled";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <div>
        <Contact />
        <Projects />
        <About />
      </div>
    </AppContainer>
  );
}

export default App;
