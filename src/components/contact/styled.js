import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  height: 90vh;
  padding: 12px 30px;
  justify-content: space-around;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
    margin: 56px 40px;
  }

  @media (max-width: 920px) {
    display: block;
    height: 40vh;
    margin: 80px 108px 20px 108px;
  }

  @media (max-width: 800px) {
    height: 60vh;
    display: block;
    margin: 20px 108px 300px 80px;
  }

  @media (max-width: 667px) {
    display: block;
    height: 70vh;
    margin: 10px;
  }

  @media (max-width: 400px) {
    display: block;
    height: 70vh;
    margin: 10px;
  }
`;

export const ContentText = styled.div`
  /* color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif"; */

  display: block;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #484848;
`;

export const TextTitle = styled.h3`
  color: #fff;
  font: normal 200 56px/40px "Bebas Neue", "sans-serif";

  @media (max-width: 1024px) {
    font: normal 200 50px/40px "Bebas Neue", "sans-serif";
  }
  @media (max-width: 900px) {
    font: normal 200 43px/40px "Bebas Neue", "sans-serif";
  }

  @media (max-width: 400px) {
    font: normal 200 35px/40px "Bebas Neue", "sans-serif";
  }
`;

export const TextSubtitle = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";

  @media (max-width: 900px) {
    font: normal 200 16px/20px "Manrope", "sans-serif";
  }

`;

export const ContactCards = styled.button`
  display: block;
  height: 100px;
  width: 200px;
  margin-right: 40px;

  background-color: #1a1a1a;
  border-radius: 12px;
  border: transparent;
  color: #fff;

  align-items: center;
  cursor: pointer;
  text-align: center;

  @media (max-width: 900px) {
    /* padding: 10px 30px; */
    width: 200px;
    margin: 20px auto;
  }

  @media (max-width: 523px) {
    /* padding: 10px 30px; */
    width: 200px;
    margin: 20px auto;
  }
`;

export const ContentContact = styled.div`
  margin: 0;
  padding: 12px 30px;

  display: flex;
  align-items: center;
  color: #fff;

  @media (max-width: 1024px) {
    padding: 20px 0;
  }

  @media (max-width: 920px) {
    margin-left: -43px;
  }

  @media (max-width: 523px) {
    display: block;
    margin: 12px auto;
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

export const DivTextCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: #fff;
  background-color: #1a1a1a;
  @media (max-width: 667px) {
    padding: 15px 30px 0 30px;
  }
`;

export const TitleCopyright = styled.p`
  text-align: center;
  margin: 0 6px;
  font: normal 200 16px/20px "Manrope", "sans-serif";
`;

export const SubtitleCopyright = styled.p`
  margin-left: 8px;
  text-align: center;
  font: normal 200 14px/20px "Manrope", "sans-serif";
`;
