import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: flex;
  align-items: center;

  @media (max-width: 920px) {
    width: 80%;
    margin: auto;
  }

  @media (max-width: 667px) {
    display: flex;
    width: 60%;
  }

  @media (max-width: 523px) {
    display: block;
    width: 80%;
  }
`;

export const ContentAbout = styled.div`
  display: block;
  width: 554px;
  margin: 190px 80px 260px 108px;
  color: #fff;

  @media (max-width: 920px) {
    margin: 10px 30px 20px 30px;
  }

  @media screen and (max-width: 667px) {
    display: block;
    width: 100%;
    margin: 10px 20px 20px 10px;
    padding: 0;
  }

  @media screen and (max-width: 523px) {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const TextHello = styled.h1`
  margin: 0;
  color: #fff;
  font: normal 200 57px/40px "Bebas Neue", "sans-serif";

  @media (max-width: 920px) {
    font: normal 200 40px/51px "Bebas Neue", "sans-serif";
  }

  @media screen and (max-width: 667px) {
    margin-top: 40px;
    font: normal 200 40px/51px "Bebas Neue", "sans-serif";
  }

  @media screen and (max-width: 523px) {
    margin-top: 40px;
    font: normal 200 48px/51px "Bebas Neue", "sans-serif";
  }
`;

export const ContentText = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";

  @media (max-width: 523px) {
    font: normal 200 16px/20px "Manrope", "sans-serif";
  }
`;

export const Imagem = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 100%;
  filter: brightness(0.5);

  @media (max-width: 920px) {
    border-radius: 100%;
    width: 300px;
    height: 300px;
    margin: 30px auto;
  }

  @media (max-width: 667px) {
    border-radius: 100%;
    width: 250px;
    height: 250px;
    margin: 30px auto;
  }

  @media (max-width: 523px) {
    border-radius: 10%;
    width: 320px;
    height: 320px;
    margin: 64px auto;
  }
`;

export const OptionDiv = styled.div`
  display: flex;
`;

export const ButtonEmail = styled.button`
  background-color: #a6ff96;
  border: transparent;
  border-radius: 30px;
  font: normal bold 16px/20px "Manrope", "sans-serif";
  width: 187px;
  height: 54px;
  color: #0a0a0a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 523px) {
    width: 250px;
    height: 51px;
  }
`;

export const IconDot = styled.i`
  display: flex;
  justify-content: center;
  margin-left: 12px;
`;

export const ButtonIcon = styled.button`
  background-color: #222222;
  border: transparent;
  border-radius: 100%;
  color: #a6ff96;
  cursor: pointer;

  width: 54px;
  height: 54px;
  margin-left: 16px;

  @media (max-width: 523px) {
    width: 60px;
    height: 45px;
  }
`;

export const IconB = styled.i`
  font-size: 26px;
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #484848;
`;
