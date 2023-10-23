import styled from "styled-components";

const CommonBox = styled.div`
  .nameBox {
    border-bottom: 1px solid #ddd;
    font-size: 22px;
    @media screen and (max-width: 698px) {
      text-align: center;
    }
  }
`;

const Spacer = styled.div`
  height: 100px;
`;

export { CommonBox, Spacer };
