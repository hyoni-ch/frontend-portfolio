import React from "react";
import { BsTelephoneFill, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";

export default function About() {
  return (
    <>
      <div id="aboutBox" className="h-24" />
      <h2 className="text-3xl border-b border-gray-300 mb-5">ABOUT</h2>
      <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
        <div className="text-lg border rounded-md text-center p-10 w-2/4">
          프론트엔드 개발자 <span style={{ fontWeight: 700 }}>조하현</span>
          입니다. <br /> <br />
          의사소통에 적극적이며 매사 열정적인 모습을 보여주려 노력합니다. 또한
          항상 더 나은 사용자 경험에 대해 생각합니다.
        </div>

        <div>
          <ul className="text-lg">
            <li className="flex items-center gap-3">
              <BsTelephoneFill size="24" /> 010-5768-9284
            </li>
            <li className="flex items-center gap-3">
              <AiFillMail size="26" /> hh_ch0@naver.com
            </li>
            <li className="flex items-center gap-3">
              <IoIosSchool size="29" /> 건국대 글로컬캠 소프트웨어전공 졸업
            </li>
            <li className="flex items-center gap-3">
              <BsGithub size="24" />
              <a
                className="hover:bg-gray-100"
                href="https://github.com/hyoni-ch"
                target="_blank"
              >
                {" "}
                https://github.com/hyoni-ch (링크)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
