import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { dustImg1, dustImg2, dustImg3, dustImg4 } from "../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../style/AboutProjects.module.css";

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

  const img = [dustImg1, dustImg2, dustImg3, dustImg4];

  return (
    <div className={styles.box}>
      <div className="h-28"></div>
      <div>
        <Slider {...settings}>
          {img.map((imgs, idx) => {
            return (
              <div>
                <img src={img[idx]} alt="미세먼지 알리미 슬라이드 이미지" />
              </div>
            );
          })}
        </Slider>
        <div className={styles.more}>
          <div>
            <h2>미세먼지 알리미</h2>
            <ul>
              <li>2023/09/18 ~ 2023/09/24</li>
              <li>패스트캠퍼스 국비지원 파이널 프로젝트</li>
              <li>전국 미세먼지 수치를 볼 수 있는 웹 사이트</li>
            </ul>
          </div>

          <div>
            <h2>프로젝트 개발 동기</h2>
            <ul>
              <li>1. 미세먼지 수치를 보기 쉽게 하기 위해</li>
              <li>
                2. 자주 가는 지역(동네)를 즐겨찾기하여 빠르게 볼 수 있게 하기
                위해
              </li>
            </ul>
          </div>

          <div>
            <h2>프로젝트 기능</h2>
            <ul>
              <li>Open API를 이용하여 전국 미세먼지 정보 가져오기</li>
              <li>각 카드마다 즐겨찾기 기능</li>
              <li>즐겨찾기 목록에서 확인/삭제 기능</li>
              <li>로딩페이지 구현</li>
            </ul>
          </div>

          <div>
            <h2>기술 스택</h2>
            <ul className="flex gap-10">
              <li>React</li>
              <li>Redux</li>
              <li>styled-component</li>
            </ul>
          </div>
        </div>

        <Link to="/">
          <div className={styles.button}>
            <BiArrowBack /> 돌아가기
          </div>
        </Link>
      </div>
    </div>
  );
}
