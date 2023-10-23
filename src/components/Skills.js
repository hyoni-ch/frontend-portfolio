import React from "react";
import {
  SkillsBox,
  SkillsLi,
  SkillsName,
  SkillsLiBox,
} from "./style/SkillsCss";
import { CommonBox, NameBox, Spacer } from "./style/CommonCss";

export default function Skills() {
  return (
    <>
      <Spacer id="skillsBox" />
      <CommonBox>
        <NameBox>SKILLS</NameBox>
        <SkillsBox>
          <SkillsName>Language</SkillsName>
          <SkillsLiBox>
            <SkillsLi>JavaScript</SkillsLi>
          </SkillsLiBox>
        </SkillsBox>
        <SkillsBox>
          <SkillsName>Framework / Library</SkillsName>
          <SkillsLiBox>
            <SkillsLi>React</SkillsLi>
            <SkillsLi>Redux</SkillsLi>
            <SkillsLi>NodeJS</SkillsLi>
            <SkillsLi>Express</SkillsLi>
          </SkillsLiBox>
        </SkillsBox>
        <SkillsBox>
          <SkillsName>MarkUp</SkillsName>
          <SkillsLiBox>
            <SkillsLi>HTML</SkillsLi>
            <SkillsLi>CSS</SkillsLi>
          </SkillsLiBox>
        </SkillsBox>
        <SkillsBox>
          <SkillsName>Version Control</SkillsName>
          <SkillsLiBox>
            <SkillsLi>Git</SkillsLi>
            <SkillsLi>Github</SkillsLi>
          </SkillsLiBox>
        </SkillsBox>
        <SkillsBox>
          <SkillsName>Deployment</SkillsName>
          <SkillsLiBox>
            <SkillsLi>netlify</SkillsLi>
          </SkillsLiBox>
        </SkillsBox>
      </CommonBox>
    </>
  );
}
