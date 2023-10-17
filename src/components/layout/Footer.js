import React from "react";
import { FooterBox } from "../style/FooterCss";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterBox>
      <p>Copyright 2023. 조하현. All rights reserved.</p>
      <a href="https://github.com/hyoni-ch" target="_blank">
        <BsGithub color="#666666" size="20" />
      </a>
    </FooterBox>
  );
}
