import React from "react";
import { IntroBox } from "../style/IntroCss";
import { IntroSpacer } from "../style/CommonCss";

export default function Intro() {
  return (
    <>
      <IntroSpacer id="introBox" />
      <IntroBox>
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
        <div className="title">
          <div className="myName">HaHyeon's</div>
          <div>Frontend</div>
          <div>portfolio</div>
        </div>
      </IntroBox>
    </>
  );
}
