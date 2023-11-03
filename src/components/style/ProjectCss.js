import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 698px) {
    flex-direction: column;
  }
`;

const ProjectBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  width: 340px;
  height: 340px;
  margin-bottom: 15px;

  @media screen and (max-width: 698px) {
    width: 100%;
    height: 500px;
    margin-bottom: 20px;
  }
`;

const ProjectImg = styled.div`
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: url(.../assets/images/hoverCursorImg.png) 10 10,
      url(.../assets/images/hoverCursorImg2.png) 10 10, pointer;
  }
`;

const ProjectAboutBox = styled.div`
  font-size: 14px;
  margin-left: 10px;
  margin-top: 5px;
  line-height: 1.8;

  .linkName {
    margin-bottom: 3px;
    a {
      display: inline-block;
      font-size: 10px;
      text-decoration: underline;
      color: #555555;
      &:hover {
        background-color: #eee;
        border-radius: 5px;
      }
    }
  }

  @media screen and (max-width: 698px) {
    font-size: 17px;
    line-height: 2.2;

    .linkName {
      a {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .linkName {
      font-size: 14px;
    }
  }
`;

const ProjectSolo = styled.div`
  background-color: rgba(252, 200, 112, 0.3);
  color: rgb(143, 91, 3);
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  display: inline-block;
`;

const ProjectDate = styled.div`
  font-size: 11px;

  @media screen and (max-width: 698px) {
    font-size: 13px;
  }
`;

const ProjectName = styled.div`
  display: flex;
  item-align: center;
  font-size: 15px;

  @media screen and (max-width: 698px) {
    font-size: 20px;
    line-height: 1.6;
  }
`;

const ProjectSkills = styled.div`
  font-size: 10px;
  span {
    padding: 5px;
    border-radius: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 698px) {
    font-size: 12px;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const AboutProject = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 300;
    font-style: normal;
  }

  font-family: "Pretendard-Regular";

  .slide {
    img {
      height: 370px;
      margin: auto;
    }
  }

  .more {
    margin-top: 80px;

    div {
      margin-bottom: 50px;
    }
    h2 {
      color: #444444;
      font-size: 1.3rem;
      margin: 0;
      padding: 0;
    }
    ul {
      padding: 0;
      li {
        color: #777777;
      }
    }
    .stack {
      ul {
        display: flex;
        li {
          margin-right: 10px;
        }
      }
    }
  }
  .backBtn {
    position: fixed;
    right: 30px;
    bottom: 30px;
    border: none;
    background-color: black;
    color: #fff;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    line-height: 40px;
    text-align: center;

    &:hover {
      background-color: #333333;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

export {
  ProjectContainer,
  ProjectBox,
  ProjectAboutBox,
  ProjectImg,
  ProjectSolo,
  ProjectDate,
  ProjectName,
  ProjectSkills,
  AboutProject,
};
