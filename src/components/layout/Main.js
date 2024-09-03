import React from "react";
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
      <div className="m-auto max-w-4xl w-11/12 lg:w-full">
        <About />
        <Skills />
        <Project />
        <LinkRoll to="introBox" spy={true} smooth={true}>
          <div className="fixed bottom-5 right-5 rounded-full bg-white border border-gray-500 p-2 cursor-pointer hover:shadow-lg">
            <BsArrowUp size="30" color="#777777" />
          </div>
        </LinkRoll>
      </div>
    </>
  );
}
