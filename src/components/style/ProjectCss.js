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

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
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
`;

const ProjectAboutBox = styled.div`
  font-size: 14px;
  margin-left: 10px;
  margin-top: 5px;
  width: 100%;
  line-height: 1.8;

  div {
    margin-bottom: 3px;
    a {
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
    padding: 10px;
  }
`;

const ProjectSolo = styled.div`
  background-color: rgba(252, 200, 112, 0.3);
  color: rgb(143, 91, 3);
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  display: inline-block;

  @media screen and (max-width: 698px) {
    font-size: 12px;
  }
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
};
