import styled from "styled-components";

const IntroBox = styled.section`
  @font-face {
    font-family: "GangwonEduPowerExtraBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  min-height: calc(100vh - 84px);
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  overflow: hidden;
  background: lighten(#f0f4c3, 10%);
  transform: translate3d(0, 0, 0);

  .wave {
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 50%;
    background: #0af;
    width: 1200px;
    height: 1000px;
    margin-left: -45%;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: drift 3000ms infinite linear;
  }

  .wave-3 {
    animation: drift 5000ms infinite linear;
  }

  .wave-2 {
    animation: drift 7000ms infinite linear;
    opacity: 0.1;
    background: yellow;
  }

  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }

  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }

  .title {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 150px;
    font-family: "GangwonEduPowerExtraBoldA";
    color: #fff;
    text-shadow: -1px 0px #ccc, 0px 1px #ccc, 1px 0px #ccc,
      7px 5px rgba(0, 0, 0, 0.08);
    cursor: default;
  }

  .myName {
    font-size: 100px;
  }

  @media screen and (max-width: 725px) {
    .title {
      font-size: 120px;
    }
    .myName {
      font-size: 80px;
    }
  }
  @media screen and (max-width: 598px) {
    .title {
      font-size: 100px;
    }
    .myName {
      font-size: 60px;
    }
  }
`;

export { IntroBox };
