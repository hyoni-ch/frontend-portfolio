import styled from "styled-components";

const SkillsBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SkillsName = styled.div`
  width: 38%;
  font-size: 15px;
  @media screen and (max-width: 698px) {
    width: 32%;
    margin-left: 10px;
  }
`;

const SkillsLiBox = styled.div`
  display: flex;
  @media screen and (max-width: 698px) {
    width: 65%;
  }
`;

const SkillsLi = styled.div`
  background-color: #eee;
  padding: 8px;
  border-radius: 5px;
  color: purple;
  font-size: 12px;
  margin-right: 7px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 698px) {
    float: right;
  }
`;

export { SkillsBox, SkillsLi, SkillsName, SkillsLiBox };
