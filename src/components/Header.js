import React from "react";
import { HeaderBox, Title, NavUl, NavLi } from "./style/HeaderCss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderBox>
      <Link to="/">
        <Title>CHH's Portfolio</Title>
      </Link>
      <NavUl>
        <NavLi>ABOUT</NavLi>
        <NavLi>SKILLS</NavLi>
        <NavLi>PROJECT</NavLi>
      </NavUl>
    </HeaderBox>
  );
}
