import React from "react";
import { MainBox } from "./style/MainCss";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

export default function Main() {
  return (
    <MainBox>
      <About />
      <Skills />
      <Project />
    </MainBox>
  );
}
