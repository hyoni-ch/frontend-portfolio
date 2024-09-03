import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

export default function Header() {
  return (
    <header className="flex-no-wrap fixed flex flex-col top-0 z-10 w-full items-center justify-between shadow-md shadow-black/5 bg-white py-6 px-20 md:flex-row">
      <Link to="/">
        <div className="text-2xl">CHH's Portfolio</div>
      </Link>
      <ul className="flex gap-10 text-lg">
        <LinkRoll to="aboutBox" spy={true} smooth={true}>
          <li className="cursor-pointer p-2 hover:bg-gray-100 hover:rounded-lg">
            ABOUT
          </li>
        </LinkRoll>
        <LinkRoll to="skillsBox" spy={true} smooth={true}>
          <li className="cursor-pointer p-2 hover:bg-gray-100 hover:rounded-lg">
            SKILLS
          </li>
        </LinkRoll>
        <LinkRoll to="projectBox" spy={true} smooth={true}>
          <li className="cursor-pointer p-2 hover:bg-gray-100 hover:rounded-lg">
            PROJECT
          </li>
        </LinkRoll>
      </ul>
    </header>
  );
}
