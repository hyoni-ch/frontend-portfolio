import React from "react";
import { AboutBox, AboutA, AboutMe, AboutIntroduce } from "./style/AboutCss";
import { NameBox, CommonBox } from "./style/CommonCss";
import { BsTelephoneFill, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";

export default function About() {
  return (
    <CommonBox>
      <NameBox>ABOUT</NameBox>
      <AboutBox>
        <AboutIntroduce>
          프론트엔드 개발자 <span style={{ fontWeight: 700 }}>조하현</span>
          입니다. <br /> <br />
          의사소통에 적극적이며 매사 열정적인 모습을 보여주려 노력합니다. 또한
          항상 더 나은 사용자 경험에 대해 생각합니다.
        </AboutIntroduce>

        <AboutMe>
          <ul>
            <li>
              <BsTelephoneFill size="24" /> 010-5768-9284
            </li>
            <li>
              <AiFillMail size="26" /> hh_ch0@naver.com
            </li>
            <li>
              <IoIosSchool size="29" /> 건국대 글로컬캠 소프트웨어전공 졸업
            </li>
            <li>
              <BsGithub size="24" />
              <AboutA href="https://github.com/hyoni-ch" target="_blank">
                {" "}
                https://github.com/hyoni-ch (링크)
              </AboutA>
            </li>
          </ul>
        </AboutMe>
      </AboutBox>
    </CommonBox>
  );
}
