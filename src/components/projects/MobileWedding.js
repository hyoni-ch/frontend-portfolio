import React from "react";
import { Spacer } from "../style/CommonCss";
import { MainBox } from "../style/MainCss";
import { AboutProject } from "../style/ProjectCss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  mobilewedding,
  mobilewedding1,
  mobilewedding2,
  mobilewedding3,
  mobilewedding4,
  mobilewedding5,
  mobilewedding6,
  mobilewedding7,
  mobilewedding8,
  mobilewedding9,
  mobilewedding10,
  mobilewedding11,
} from "../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MobileWedding() {
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
    mobilewedding,
    mobilewedding1,
    mobilewedding2,
    mobilewedding3,
    mobilewedding4,
    mobilewedding5,
    mobilewedding6,
    mobilewedding7,
    mobilewedding8,
    mobilewedding9,
    mobilewedding10,
    mobilewedding11,
  ];

  return (
    <MainBox>
      <Spacer />
      <AboutProject>
        <Slider {...settings}>
          {img.map((imgs, idx) => {
            return (
              <div className="slide">
                <img src={img[idx]} alt="모바일청첩장 슬라이드 이미지" />
              </div>
            );
          })}
        </Slider>
        <div className="more">
          <div>
            <h2>모바일 청첩장</h2>
            <ul>
              <li>2023/11/07 ~ 2024/02/07</li>
              <li>토이 프로젝트</li>
              <li>가족의 결혼을 축하하는 모바일 청첩장 웹 사이트</li>
              <li>디자인은 메이크디어 모바일 청첩장을 참고하였습니다.</li>
            </ul>
          </div>

          <div className="motivation">
            <h2>프로젝트 개발 동기</h2>
            <ul>
              <li>1. 가족이 결혼하게 되어 직접 만들어보기 위해서</li>
              <li>2. 하객들이 남겨주는 방명록을 간직하기 위해서</li>
            </ul>
          </div>

          <div className="func">
            <h2>프로젝트 기능</h2>
            <ul>
              <li>결혼식까지 며칠 남았는지 계산해주는 기능</li>
              <li>웨딩 사진을 볼 수 있는 갤러리 기능</li>
              <li>카카오 맵을 이용한 지도 기능</li>
              <li>
                네이버지도, 카카오지도, 티맵 등 내비게이션으로 이동할 수 있는
                기능
              </li>
              <li>주소, URL 등 복사하기 기능</li>
              <li>데이터베이스를 이용하여 참석 정보를 저장하는 기능</li>
              <li>방명록 비밀번호를 통한 CRUD 기능</li>
              <li>카카오톡 공유하기 기능</li>
            </ul>
          </div>

          <div className="stack">
            <h2>기술 스택</h2>
            <ul>
              <li>React</li>
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
