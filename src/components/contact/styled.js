import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  height: 100vh;
  padding: 12px 30px;
  justify-content: space-around;
  display: flex;
  align-items: center;

  @media (max-width: 523px) {
    display: block;
  }
`;

export const ContentText = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";

  @media (max-width: 523px) {
    display: block;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #484848;
`;

export const TextTitle = styled.h3`
  color: #fff;
  font: normal 200 56px/20px "Bebas Neue", "sans-serif";
  @media (max-width: 523px) {
    font: normal 200 43px/40px "Bebas Neue", "sans-serif";
  }
`;

export const TextSubtitle = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";

  @media (max-width: 523px) {
    font: normal 200 16px/20px "Manrope", "sans-serif";
  }
`;

export const ContactCards = styled.button`
  cursor: pointer;
  margin-right: 40px;
  border: transparent;
  padding: 10px 30px;
  align-items: center;
  background-color: #0a0a0a;
  display: block;
  text-align: center;
  /* width: 180px; */
  height: 100px;
  background-color: #1a1a1a;
  border-radius: 12px;
  color: #fff;

  @media (max-width: 523px) {
    padding: 10px 30px;
    margin: 20px auto;
  }
`;

export const ContentContact = styled.div`
  margin: 0;
  padding: 12px 30px;

  display: flex;
  align-items: center;
  color: #fff;

  @media (max-width: 523px) {
    display: block;
  }
`;

export const CardIcon = styled.i`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  color: #fff;
  font: normal 200 30px/20px "Manrope", "sans-serif";
  margin: 12px 5px;
  padding: 5px;
`;

export const CardText = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";
  margin: 1px;
`;
export const ButtonDownload = styled.button`
  background-color: transparent;
  border: transparent;
  color: #a6ff96;
  cursor: pointer;
  font: normal 200 18px/20px "Manrope", "sans-serif";
  letter-spacing: 1px;
  margin: 1px;

  @media (max-width: 523px) {
    font: normal 200 16px/20px "Manrope", "sans-serif";
    padding: 0;
    text-align: left;
  }
`;
