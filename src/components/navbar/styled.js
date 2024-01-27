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
    padding-bottom: 8px;
    width: 100%;
  }

  @media (max-width: 523px) {
    padding:8px 5px;
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

// ---------------

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #222222;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    margin: 0;
    padding-top: 3.5rem;
    color: #fff;
  }

  li {
    list-style-type: none;
    color: #fff;
    font: normal bold 16px/8px "Inter", "sans-serif";
    background-color: transparent;
    border: transparent;
    margin-right: 16px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
`;
