import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  animation: star 0.5s ease-in;
  
  @media screen and (max-width: 1200px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
  }
`;

export const LogoContent = styled.div`
  width:30%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px){
      position: initial;
      height: auto;
      width: 70%;
  }
`;

export const MenuItemsWrapper = styled.div`
  width: 70%;
  margin-left: 30%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px){
    width: 100%;
    margin-left: 0;
    height: auto;
    justify-content: center;
  }

`;

export const MenuContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 1200px){
  justify-content: center;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;
