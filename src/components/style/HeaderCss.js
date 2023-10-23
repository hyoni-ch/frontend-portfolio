import styled from "styled-components";

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 90px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px 0 0 0;
  }
`;

const Title = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  margin-right: 30px;
  color: #333333;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  display: block;
  padding: 10px;
  transition: 0.4s;
  &:hover {
    border-radius: 10px;
    background-color: #eee;
  }
`;

export { HeaderBox, Title, NavUl, NavLi };
