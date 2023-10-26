import React from "react";
import { MainBox, UpBtn } from "../style/MainCss";
import About from "../About";
import Skills from "../Skills";
import Project from "../Project";
import Intro from "./Intro";
import { Link as LinkRoll } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

export default function Main() {
  return (
    <>
      <Intro />
      <MainBox>
        <About />
        <Skills />
        <Project />
        <LinkRoll to="introBox" spy={true} smooth={true}>
          <UpBtn>
            <BsArrowUp size="30" color="#777777" />
          </UpBtn>
        </LinkRoll>
      </MainBox>
    </>
  );
}
