import React from "react";
import { Link } from "react-router-dom";
import {
  togetherImg,
  dustImg,
  todolistImg1,
  mobilewedding,
} from "../assets/images";

export default function Project() {
  const projects = [
    {
      link: "/project/mobilewedding",
      imgSrc: mobilewedding,
      imgAlt: "모바일 청첩장 이미지",
      name: "모바일 청첩장",
      date: "2023/11/07 ~ 2024/02/07",
      skills: [
        { color: "#1d2951", backgroundColor: "#e1f5fe", name: "React" },
        { color: "#555555", backgroundColor: "#eee", name: "Express" },
        { color: "#827717", backgroundColor: "#f0f4c3", name: "NodeJS" },
        { color: "#1b5e20", backgroundColor: "#e8f5e9", name: "Mongoose" },
      ],
      deployLink: "https://mobile-wedding-hyoni-ch.koyeb.app/",
      githubLink: "https://github.com/hyoni-ch/mobile-wedding",
      solo: true,
    },
    {
      link: "/project/todolist",
      imgSrc: todolistImg1,
      imgAlt: "투두리스트 이미지",
      name: "투두리스트",
      date: "2023/11/03 ~ 2023/11/07",
      skills: [
        { color: "#1d2951", backgroundColor: "#e1f5fe", name: "React" },
        { color: "#e65100", backgroundColor: "#fff3e0", name: "Redux" },
        { color: "#1b5e20", backgroundColor: "#e8f5e9", name: "typescript" },
      ],
      deployLink: "https://todolist-chh.netlify.app/",
      githubLink: "https://github.com/hyoni-ch/redux-ts-todolist-app",
      solo: true,
    },
    {
      link: "/project/dust",
      imgSrc: dustImg,
      imgAlt: "미세먼지 알리미 이미지",
      name: "미세먼지 알리미",
      date: "2023/09/18 ~ 2023/09/24",
      skills: [
        { color: "#1d2951", backgroundColor: "#e1f5fe", name: "React" },
        { color: "#e65100", backgroundColor: "#fff3e0", name: "Redux" },
        {
          color: "#1b5e20",
          backgroundColor: "#e8f5e9",
          name: "styled-component",
        },
      ],
      deployLink: "https://dust-app-chh.netlify.app",
      githubLink: "https://github.com/hyoni-ch/react-dust-app",
      solo: true,
    },
    {
      link: "/project/together",
      imgSrc: togetherImg,
      imgAlt: "함께해요 이미지",
      name: "함께해요",
      date: "2022/08/30 ~ 2022/10/31",
      skills: [
        { color: "#1d2951", backgroundColor: "#e1f5fe", name: "React" },
        { color: "#e65100", backgroundColor: "#fff3e0", name: "Redux" },
        { color: "#555555", backgroundColor: "#eee", name: "Express" },
        { color: "#827717", backgroundColor: "#f0f4c3", name: "NodeJS" },
        { color: "#1b5e20", backgroundColor: "#e8f5e9", name: "Mongoose" },
      ],
      deployLink: "https://dog-commuinty.fly.dev/",
      githubLink: "https://github.com/hyoni-ch/kku-Community",
      solo: true,
    },
  ];

  return (
    <>
      <div id="projectBox" className="h-24" />

      <h2 className="flex items-center gap-1 text-3xl border-b border-gray-300 mb-5">
        PROJECT
        <div className="text-sm animate-motion">
          이미지를 클릭하면 자세히 볼 수 있습니다.
        </div>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-7">
        {projects.map((project, index) => (
          <div
            className=" bg-white border rounded-md border-gray-100 shadow w-96 h-96"
            key={index}
          >
            <Link to={project.link}>
              <div className="h-1/2">
                <img
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  className="h-full"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-1 p-1">
              <div className="text-xl">{project.name}</div>
              <div className="text-xs">{project.date}</div>
              <div className="flex gap-1">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      color: skill.color,
                      backgroundColor: skill.backgroundColor,
                    }}
                    className="px-1 rounded-md"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <p>배포링크</p>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1 hover:text-white hover:bg-gray-600 "
                >
                  {project.deployLink}
                </a>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <p>깃허브</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1 hover:text-white hover:bg-gray-600 "
                >
                  {project.githubLink}
                </a>
              </div>
              {project.solo && (
                <div className="w-fit text-xs bg-orange-300 text-white  rounded-md p-1">
                  Solo Project
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
