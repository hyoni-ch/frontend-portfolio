import React, { useState } from "react";
import { Spacer } from "../style/CommonCss";
import { MainBox } from "../style/MainCss";
import { AboutProject } from "../style/ProjectCss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { todolistImg, todolistImg1, todolistImg2 } from "../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TodoList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const img = [todolistImg, todolistImg1, todolistImg2];

  return (
    <MainBox>
      <Spacer />
      <AboutProject>
        <Slider {...settings}>
          {img.map((imgs, idx) => {
            return (
              <div className="slide">
                <img src={img[idx]} alt="투두리스트 슬라이드 이미지" />
              </div>
            );
          })}
        </Slider>
        <div className="more">
          <div>
            <h2>투두리스트</h2>
            <ul>
              <li>2023/11/03 ~ 2022/11/07</li>
              <li>토이 프로젝트</li>
              <li>해야할 일을 메모하고 체크하는 웹 사이트</li>
            </ul>
          </div>

          <div className="motivation">
            <h2>프로젝트 개발 동기</h2>
            <ul>
              <li>1. 해야할 일을 메모하기 위해</li>
              <li>2. 계획적인 하루를 보내기 위해</li>
              <li>3. 잊지 않고 잘 했는지 체크하기 위해</li>
            </ul>
          </div>

          <div className="func">
            <h2>프로젝트 기능</h2>
            <ul>
              <li>오늘 날짜를 나타내는 기능</li>
              <li>해야할 일 추가 기능</li>
              <li>전체 삭제 기능</li>
              <li>로컬 스토리지에 저장하여 새로고침하여도 유지되는 기능</li>
            </ul>
          </div>

          <div className="stack">
            <h2>기술 스택</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>typescript</li>
            </ul>
          </div>
        </div>

        <Link to="/">
          <div className="backBtn">
            <BiArrowBack /> 돌아가기
          </div>
        </Link>
      </AboutProject>
    </MainBox>
  );
}
