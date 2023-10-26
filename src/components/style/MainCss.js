import styled from "styled-components";

const MainBox = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 698px) {
    width: 90%;
  }
`;

const UpBtn = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgba(#fff, 0.75);
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  border: 1px solid #777777;
  text-align: center;
  cursor: pointer;
  line-height: 65px;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  @media screen and (max-width: 698px) {
    right: 10px;
  }
`;

export { MainBox, UpBtn };
