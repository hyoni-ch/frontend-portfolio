import React from "react";
import { Spacer } from "../style/CommonCss";
import { MainBox } from "../style/MainCss";
import { TogetherBox } from "../style/ProjectCss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Together() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <MainBox>
      <Spacer />
      <TogetherBox>
        <Slider {...settings}>
          <div>
            <img src="" alt="" />
            <h3>1</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>2</h3>
          </div>
        </Slider>

        <button className="backBtn">
          <Link to="/">
            <BiArrowBack /> 돌아가기
          </Link>
        </button>
      </TogetherBox>
    </MainBox>
  );
}
