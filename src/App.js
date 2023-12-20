import "./App.css";
import "./css/style.css";
import SkillsData from "../src/Data/Skill.json";
import ProjectsData from "../src/Data/Project.json";
import ExpData from "../src/Data/Experience.json";
import AchData from "../src/Data/Achievement.json";

import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About data={ExpData} />
      <Project data={ProjectsData} />
      <Skills data={SkillsData} />
      <Achievement data={AchData} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
