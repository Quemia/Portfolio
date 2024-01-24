import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 -0.2rem #121212;

  @media (max-width: 667px) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: 523px) {
    padding: 0;
    width: auto;
  }
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
export const Options = styled.a`
  background-color: transparent;
  border: transparent;
  list-style-type: none;
  color: #fff;
  font: normal bold 16px/8px "Inter", "sans-serif";

  margin-right: 16px;
  cursor: pointer;
`;

// -----------------

export const ContainerSd = styled.div`
  background-color: #0a0a0a;
  margin: 0;
  padding: 12px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 -0.2rem #121212;

  @media (max-width: 667px) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: 523px) {
    padding: 0;
    width: auto;
  }
`;

export const LogoSd = styled.img`
  margin: 0;
  height: auto;
  width: 70px;
  color: #fff;
  font: normal bold 36px/10px "Bebas Neue", "sans-serif";
`;


export const OptionsSd = styled.li`
  background-color: transparent;
  padding: 18px 10px;
  border: transparent;
  list-style-type: none;
  color: #fff;
  font: normal bold 16px/8px "Inter", "sans-serif";

  margin-right: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;
