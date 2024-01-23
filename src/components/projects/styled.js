import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: block;
  align-items: center;

  color: #fff;

  @media (max-width: 667px) {
    padding: 0;
  }

  @media (max-width: 523px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  display: block;
  margin: 80px 108px;

  @media (max-width: 667px) {
    margin: 56px 10px 20px 40px;
  }

  @media (max-width: 523px) {
    margin: 64px 16px;
  }
`;

export const ContentTitle = styled.h4`
  color: #fff;
  margin: 0;

  font: normal 400 66px/20px "Bebas Neue", "sans-serif";

  @media (max-width: 667px) {
    font: normal 400 43px/20px "Bebas Neue", "sans-serif";
  }

  @media (max-width: 523px) {
    font: normal 400 43px/20px "Bebas Neue", "sans-serif";
    margin: 0;
  }
`;

export const ContentSubtitle = styled.p`
  margin-top: 50px;
  color: #fff;
  font: normal 400 18px/20px "Manrope", "sans-serif";

  @media (max-width: 667px) {
    font: normal 400 18px/23px "Manrope", "sans-serif";
  }

  @media (max-width: 523px) {
    font: normal 400 16px/20px "Manrope", "sans-serif";
    margin-top: 15px;
  }
`;

export const CardContainer = styled.div`
  background-color: #0a0a0a;
  margin: 80px 108px;
  display: flex;
  align-items: center;
  color: #fff;

  @media (max-width: 667px) {
    display: block;
    margin: 40px;
  }

  @media (max-width: 523px) {
    display: block;
    margin: 16px;
  }
`;

export const ImageDiv = styled.div`
  width: 550px;
  height: 350px;
  display: flex;
  /* width: 50% ; */
  background-color: #1a1a1a;
  border-radius: 12px;

  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 58px;

  @media (max-width: 667px) {
    width: 343px;
    padding: 0;
    height: 250px;
  }

  @media (max-width: 523px) {
    width: 343px;
    padding: 0;
    height: 250px;
  }
`;

export const ImageProject = styled.img`
  width: 488px;
  height: 306px;
  border-radius: 12px;

  @media (max-width: 667px) {
    width: 90%;
    height: 225px;
  }

  @media (max-width: 523px) {
    width: 90%;
    height: 225px;
  }
`;

export const ProjectAbout = styled.div`
  display: block;
`;

export const ProjectTitle = styled.h3`
  color: #fff;
  font: normal 400 32px/20px "Manrope", "sans-serif";

  @media (max-width: 667px) {
    font: normal 400 24px/20px "Manrope", "sans-serif";
  }
`;

export const ProjectDescription = styled.p`
  color: #fff;
  font: normal 400 18px/30px "Manrope", "sans-serif";

  @media (max-width: 667px) {
    font: normal 400 16px/20px "Manrope", "sans-serif";
  }
`;

export const ProjectTable = styled.table`
  width: 100%;
  border: transparent;
  text-align: left;
`;

export const ProjectTableTr = styled.tr`
  color: #fff;
  font: normal 600 16px/30px "Manrope", "sans-serif";
  border: transparent;

  @media (max-width: 523px) {
    font: normal 400 16px/20px "Manrope", "sans-serif";
  }
`;

export const ProjectTableTd = styled.td`
  color: #fff;
  font: normal 400 16px/30px "Manrope", "sans-serif";

  border-bottom-color: #484848;
  border-bottom-style: solid;
  border-bottom-width: thin;
  padding: 8px 0px;
`;

export const ProjectTableTh = styled.th`
  color: #fff;
  font: normal 600 16px/30px "Manrope", "sans-serif";
  font-weight: 600;
  letter-spacing: 1px;

  border: transparent;
  padding: 8px 0px;
`;

export const DemoContainer = styled.div`
  align-items: baseline;
  display: flex;
  margin-top: 28px;
`;

export const LiveDemo = styled.a`
  color: #a6ff96;
  letter-spacing: 2px;
  font: normal 600 16px/30px "Manrope", "sans-serif";
  margin-right: 24px;
`;

export const DivIcons = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DivCardStack = styled.div`
  display: flex;
  align-items: baseline;
  padding: 20px;
  background-color: #1a1a1a;
`;

export const IconReact = styled.p`
  color: #57bdd9;
  font: normal 600 30px/30px "Manrope", "sans-serif";
  margin: 0 10px 0 0;
`;

export const IconStyled = styled.p`
  color: #d693c6;
  margin: 0;

  font: normal 600 40px/30px "Manrope", "sans-serif";
`;

// export const  = styled. ``;
// export const  = styled. ``;
// export const  = styled. ``;
// export const  = styled. ``;
// export const  = styled. ``;
// export const  = styled. ``;
