import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: flex;
  align-items: center;

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

  @media (max-width: 523px) {
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

  @media (max-width: 523px) {
    margin-top: 40px;
    font: normal 200 51px/51px "Bebas Neue", "sans-serif";
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
  /* height: 450px; */
  border-radius: 100%;
  filter: brightness(0.5);


  @media (max-width: 523px) {
    border-radius: 10%;
    width: 320px;
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
  /* margin-left: 16px; */
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
  /* margin-top: 10%; */
  width: 100%;
  border-bottom: 1px solid #484848;
`;
