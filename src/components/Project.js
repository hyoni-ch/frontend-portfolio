import React from "react";
import { Link } from "react-router-dom";
import { CommonBox, NameBox, Spacer } from "./style/CommonCss";
import {
  ProjectBox,
  ProjectContainer,
  ProjectAboutBox,
  ProjectImg,
  ProjectSolo,
  ProjectDate,
  ProjectName,
  ProjectSkills,
} from "./style/ProjectCss";
import togetherImg from "../assets/images/togetherImg.png";
import dustImg from "../assets/images/dustImg.png";

export default function Project() {
  return (
    <>
      <Spacer id="projectBox" />
      <CommonBox>
        <NameBox>
          PROJECT <div>이미지를 클릭하면 자세히 볼 수 있습니다.</div>
        </NameBox>

        <ProjectContainer>
          {/* 첫번째 */}

          <ProjectBox>
            <Link to="/project/together">
              <ProjectImg>
                <img src={togetherImg} alt="함께해요 이미지" />
              </ProjectImg>
            </Link>
            <ProjectAboutBox>
              <ProjectName>함께해요 - 강아지 커뮤니티</ProjectName>

              <ProjectDate>2022/08/30 ~ 2022/10/31</ProjectDate>
              <ProjectSkills>
                <span style={{ color: "#1d2951", backgroundColor: "#e1f5fe" }}>
                  React
                </span>
                <span style={{ color: "#e65100", backgroundColor: "#fff3e0" }}>
                  Redux
                </span>
                <span style={{ color: "#555555", backgroundColor: "#eee" }}>
                  Express
                </span>
                <span style={{ color: "#827717", backgroundColor: "#f0f4c3" }}>
                  NodeJS
                </span>
                <span style={{ color: "#1b5e20", backgroundColor: "#e8f5e9" }}>
                  Mongoose
                </span>
              </ProjectSkills>
              <div className="linkName">
                배포 링크{" "}
                <a href="https://dog-commuinty.fly.dev/" target="_blank">
                  https://dog-commuinty.fly.dev/
                </a>
              </div>
              <div className="linkName">
                리포지토리{" "}
                <a
                  href="https://github.com/hyoni-ch/kku-Community"
                  target="_blank"
                >
                  https://github.com/hyoni-ch/kku-Community
                </a>
              </div>
              <ProjectSolo>Solo Project</ProjectSolo>
            </ProjectAboutBox>
          </ProjectBox>

          {/* 두번째 */}

          <ProjectBox>
            <Link to="/project/dust">
              <ProjectImg>
                <img src={dustImg} alt="미세먼지 알리미 이미지" />
              </ProjectImg>
            </Link>

            <ProjectAboutBox>
              <ProjectName> 미세먼지 알리미</ProjectName>

              <ProjectDate>2023/09/18 ~ 2022/09/24</ProjectDate>
              <ProjectSkills>
                <span style={{ color: "#1d2951", backgroundColor: "#e1f5fe" }}>
                  React
                </span>
                <span style={{ color: "#e65100", backgroundColor: "#fff3e0" }}>
                  Redux
                </span>
                <span style={{ color: "#1b5e20", backgroundColor: "#e8f5e9" }}>
                  styled-commponent
                </span>
              </ProjectSkills>
              <div className="linkName">
                배포 링크{" "}
                <a href="https://dust-app-chh.netlify.app" target="_blank">
                  https://dust-app-chh.netlify.app
                </a>
              </div>
              <div className="linkName">
                리포지토리{" "}
                <a
                  href="https://github.com/hyoni-ch/react-dust-app"
                  target="_blank"
                >
                  https://github.com/hyoni-ch/react-dust-app
                </a>
              </div>
              <ProjectSolo>Solo Project</ProjectSolo>
            </ProjectAboutBox>
          </ProjectBox>
        </ProjectContainer>
      </CommonBox>
    </>
  );
}
