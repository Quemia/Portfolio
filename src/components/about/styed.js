import styled from "styled-components";

export const Container = styled.div`
  /* margin: 0; */
  padding: 100px 30px;

  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  justify-content: space-between;
  margin: 50px 108px;
  color: #fff;
`;

export const ContainerAbout = styled.div`
  padding: 100px 30px;
  display: block;
  align-items: center;
  justify-content: space-between;
  margin: 50px 108px;
  color: #fff;
`;

export const ContentText = styled.div`
  margin: 0;
  padding: 12px 30px;
  margin-right: 10px;

  display: block;
  align-items: center;
  color: #fff;
`;

export const ContentContact = styled.div`
  margin: 0;
  padding: 12px 30px;

  display: flex;
  align-items: center;
  color: #fff;
`;

export const TextTitleAbout = styled.h3`
  color: #fff;
  font: normal 200 66px/20px "Bebas Neue", "sans-serif";
`;

export const TextTitle = styled.h3`
  color: #fff;
  font: normal 200 56px/20px "Bebas Neue", "sans-serif";
`;

export const TextSubtitle = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";
`;

export const ContactCards = styled.div`
  margin-right: 40px;
  padding: 10px 30px;
  align-items: center;
  background-color: #0a0a0a;
  display: block;
  text-align: center;
  width: 180px;
  height: 100px;
  background-color: #1a1a1a;
  border-radius: 12px;
  color: #fff;
`;

export const CardIcon = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  color: #fff;
  font: normal 200 30px/20px "Manrope", "sans-serif";
  margin: 12px 5px;
`;

export const CardText = styled.p`
  color: #fff;
  font: normal 200 18px/20px "Manrope", "sans-serif";
  margin: 1px;
`;
