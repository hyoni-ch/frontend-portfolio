import React from "react";
import { SkillsBox, SkillsLi, SkillsName } from "./style/SkillsCss";
import { NameBox, CommonBox } from "./style/CommonCss";

export default function Skills() {
  return (
    <CommonBox>
      <NameBox>SKILLS</NameBox>
      <SkillsBox>
        <SkillsName>Language</SkillsName>
        <SkillsLi>JavaScript</SkillsLi>
      </SkillsBox>
      <SkillsBox>
        <SkillsName>Framework / Library</SkillsName>
        <SkillsLi>React</SkillsLi>
        <SkillsLi>Redux</SkillsLi>
        <SkillsLi>NodeJS</SkillsLi>
        <SkillsLi>Express</SkillsLi>
      </SkillsBox>
      <SkillsBox>
        <SkillsName>MarkUp</SkillsName>
        <SkillsLi>HTML</SkillsLi>
        <SkillsLi>CSS</SkillsLi>
        <SkillsLi>Emotion</SkillsLi>
      </SkillsBox>
      <SkillsBox>
        <SkillsName>Version Control</SkillsName>
        <SkillsLi>Git</SkillsLi>
        <SkillsLi>Github</SkillsLi>
      </SkillsBox>
      <SkillsBox>
        <SkillsName>Deployment</SkillsName>
        <SkillsLi>netlify</SkillsLi>
      </SkillsBox>
    </CommonBox>
  );
}
