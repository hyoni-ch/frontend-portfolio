import styled from "styled-components";

const CommonBox = styled.div`
  @media screen and (max-width: 698px) {
    text-align: center;
  }
`;

const NameBox = styled.h2`
  border-bottom: 1px solid #ddd;
  font-size: 22px;
  display: flex;
  align-items: center;

  div {
    margin-left: 10px;
    font-size: 12px;
    color: #ccc;
    font-weight: 300;

    //프로젝트 컴포넌트에 "이미지를 클릭하면 자세히 볼 수 있습니다."
    animation: motion 0.6s linear 0s infinite alternate;
    margin-top: 0;
    @keyframes motion {
      0% {
        margin-top: 0px;
      }
      100% {
        margin-top: 10px;
      }
    }
  }
`;

const Spacer = styled.div`
  height: 100px;
`;

const IntroSpacer = styled.div`
  height: 80px;
`;

export { CommonBox, NameBox, Spacer, IntroSpacer };
