import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: flex;
  align-items: center;
`;

export const ContentAbout = styled.div`
  display: block;
  width: 554px;
  margin: 190px 80px 260px 108px;

  color: #fff;
`;

export const ContentText = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";
`;

export const Imagem = styled.img`
  width: 400px;
  /* height: 450px; */
  border-radius: 100%;
  filter: brightness(0.5);
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
