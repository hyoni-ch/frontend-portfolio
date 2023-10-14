import styled from "styled-components";

const NameBox = styled.h2`
  border-bottom: 1px solid #ddd;
  font-size: 22px;
  @media screen and (max-width: 698px) {
    text-align: center;
  }
`;

const CommonBox = styled.div`
  margin-bottom: 100px;
`;

export { NameBox, CommonBox };
