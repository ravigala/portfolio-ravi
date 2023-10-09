import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "../Projects/Projects";
import LandingPage from "./LandingPage";

function Home() {
  return (
    <section>
      <LandingPage/>
      <About />
      <Skills />
      <Projects numProjects={2}/>
    </section>
  );
}

export default Home;
