import styled from "styled-components";

const AboutBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 698px) {
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

const AboutIntroduce = styled.div`
  border-radius: 10px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 15px;
  height: 100%;
  width: 40%;

  @media screen and (max-width: 698px) {
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;

const AboutMe = styled.div`
  width: 55%;
  @media screen and (max-width: 698px) {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
`;

const AboutA = styled.a`
  text-decoration: underline;
  &:hover {
    background-color: #eee;
    border-radius: 7px;
  }
`;
export { AboutBox, AboutA, AboutMe, AboutIntroduce };
