import "./App.css";
import "./css/style.css";
import { useState } from "react";
import SkillsData from "../src/Data/Skill.json";
import ProjectsData from "../src/Data/Project.json";
import ExpData from "../src/Data/Experience.json";
import AchData from "../src/Data/Achievement.json";

import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Wallet from "./components/Wallet/Wallet";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";

function App() {
  const [state, setState] = useState({ web3: null, contract: null });

  function saveState(state) {
    setState(state);
  }
  return (
    <>
      <Wallet saveState={saveState} />
      <Navbar />
      <Intro />
      <About data={ExpData} />
      <Project state={state} />
      <Skills data={SkillsData} state={state} />
      <Achievement data={AchData} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
