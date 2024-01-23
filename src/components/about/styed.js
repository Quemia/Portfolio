import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 12px 30px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 523px) {
    display: block;
    margin-bottom: 180px;
  }
`;

export const Content = styled.div`
  display: block;
  width: 704px;

  @media (max-width: 523px) {
    width: 100%;
  }
`;

export const TitleAbout = styled.h3`
  color: #fff;
  font: normal 200 56px/20px "Bebas Neue", "sans-serif";

  @media (max-width: 523px) {
    font: normal 200 43px/20px "Bebas Neue", "sans-serif";
  }
`;

export const TextTitleAbout = styled.h3`
  color: #fff;
  font: normal 200 32px/40px "Manrope", "sans-serif";

  @media (max-width: 523px) {
    font: normal 200 25px/25px "Manrope", "sans-serif";
  }
`;

export const TextAbout = styled.p`
  color: #fff;
  font: normal 200 18px/25px "Manrope", "sans-serif";
  @media (max-width: 523px) {
    font: normal 200 18px/25px "Manrope", "sans-serif";
  }
`;
