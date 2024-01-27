import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 12px 30px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) {
    display: block;
    margin: 56px 40px;
  }

  @media (max-width: 920px) {
    height: 80vh;
    display: block;
    margin: 20px 108px 250px 80px;
  }

  @media (max-width: 810px) {
    height: 90vh;
    display: block;
    margin: 20px 108px 300px 80px;
  }

  @media (max-width: 667px) {
    height: 80vh;
    display: block;
    margin: 0;
    margin-bottom: 90px;
  }

  @media (max-width: 523px) {
    height: 80vh;
    display: block;
    margin: 0;
    margin-bottom: 80px;
  }

  @media (max-width: 400px) {
    height: 100vh;
    display: block;
    margin: 20px 5px 50px 5px;
  }
`;

export const Content = styled.div`
  display: block;
  width: 704px;

  @media (max-width: 920px) {
    width: 500px;
  }

  @media (max-width: 523px) {
    width: 100%;
  }
`;

export const TitleAbout = styled.h3`
  color: #fff;
  font: normal 200 56px/20px "Bebas Neue", "sans-serif";

  @media (max-width: 1024px) {
    font: normal 400 50px/20px "Bebas Neue", "sans-serif";
  }

  @media (max-width: 920px) {
    font: normal 200 43px/20px "Bebas Neue", "sans-serif";
  }

  @media (max-width: 400px) {
    font: normal 200 35px/20px "Bebas Neue", "sans-serif";
  }
`;

export const TextTitleAbout = styled.h3`
  color: #fff;
  font: normal 200 32px/40px "Manrope", "sans-serif";

  @media (max-width: 1024px) {
    font: normal 200 25px/40px "Manrope", "sans-serif";
  }

  @media (max-width: 400px) {
    font: normal 200 20px/25px "Manrope", "sans-serif";
  }
`;

export const TextAbout = styled.p`
  color: #fff;
  font: normal 200 18px/25px "Manrope", "sans-serif";

  @media (max-width: 920px) {
    font: normal 200 16px/25px "Manrope", "sans-serif";
  }
`;
