import React from "react";
import { HeaderBox, Title, NavUl, NavLi } from "../style/HeaderCss";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

export default function Header() {
  return (
    <HeaderBox>
      <Link to="/">
        <Title>CHH's Portfolio</Title>
      </Link>
      <NavUl>
        <LinkRoll to="aboutBox" spy={true} smooth={true}>
          <NavLi>ABOUT</NavLi>
        </LinkRoll>
        <LinkRoll to="skillsBox" spy={true} smooth={true}>
          <NavLi>SKILLS</NavLi>
        </LinkRoll>
        <LinkRoll to="projectBox" spy={true} smooth={true}>
          <NavLi>PROJECT</NavLi>
        </LinkRoll>
      </NavUl>
    </HeaderBox>
  );
}
