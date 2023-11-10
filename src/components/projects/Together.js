import React, { useState } from "react";
import { Spacer } from "../style/CommonCss";
import { MainBox } from "../style/MainCss";
import { AboutProject } from "../style/ProjectCss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  togetherImg,
  togetherImg1,
  togetherImg2,
  togetherImg3,
  togetherImg4,
  togetherImg5,
  togetherImg6,
  togetherImg7,
} from "../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Together() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const img = [
    togetherImg,
    togetherImg1,
    togetherImg2,
    togetherImg3,
    togetherImg4,
    togetherImg5,
    togetherImg6,
    togetherImg7,
  ];

  return (
    <MainBox>
      <Spacer />
      <AboutProject>
        <Slider {...settings}>
          {img.map((imgs, idx) => {
            return (
              <div className="slide">
                <img src={img[idx]} alt="함께해요 슬라이드 이미지" />
              </div>
            );
          })}
        </Slider>
        <div className="more">
          <div>
            <h2>함께해요</h2>
            <ul>
              <li>2022/08/30 ~ 2022/10/31</li>
              <li>건국대학교 글로컬캠퍼스 소프트웨어전공 2022년도 졸업작품</li>
              <li>함께 산책할 사람을 찾는 반려견 커뮤니티 웹 사이트</li>
            </ul>
          </div>

          <div className="motivation">
            <h2>프로젝트 개발 동기</h2>
            <ul>
              <li>1. 반려견 사회성 향상을 위해서</li>
              <li>2. 애견동반카페를 쉽게 검색하기 위해서</li>
              <li>3. 견주들과 정보 공유를 하기 위해서</li>
            </ul>
          </div>

          <div className="func">
            <h2>프로젝트 기능</h2>
            <ul>
              <li>회원가입/로그인/로그아웃</li>
              <li>커뮤니티 - 글 CRUD, 댓글 CRUD, 최신순, 댓글순, 검색 기능</li>
              <li>애견동반카페 - 리뷰 CRUD, 최신순, 리뷰순, 검색, 찜 기능</li>
              <li>찜 - 찜 해놓은 애견동반카페 목록 확인/삭제 기능</li>
            </ul>
          </div>

          <div className="stack">
            <h2>기술 스택</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>Mongoose</li>
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
