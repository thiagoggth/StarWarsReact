import styled from 'styled-components';

export const HomeContainer = styled.div`
`;

export const LogoContent = styled.div`
  width:30%;
  position: relative;
  height: 100vh;
`;

export const Logo = styled.div`
  position: absolute;
  width: 600px;
  top: 50%;
  left: -50%;
  transform: translate(50%, -50%);
`;

export const MenuContent = styled.div`
  width: 65%;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
