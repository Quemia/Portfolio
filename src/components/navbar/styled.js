import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 -0.2rem #121212;
`;

export const Logo = styled.img`
  margin: 0;
  height: auto;
  width: 70px;
  color: #fff;
  font: normal bold 36px/10px "Bebas Neue", "sans-serif";
`;

export const Content = styled.div`
  display: flex;
`;
export const Options = styled.li`
  background-color: transparent;
  border: transparent;
  list-style-type: none;
  color: #fff;
  font: normal bold 16px/8px "Inter", "sans-serif";

  margin-right: 16px;
  cursor: pointer;
`;
