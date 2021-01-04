import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/index ';

const HeaderContent = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
`;

const HeaderImage = styled.div`
    width: 130px;
    margin-left: 50px;
    margin-top: 10px;
`;

const HeaderOptions = styled.div`
  width: 70%;
  height: 100px;
  display: flex;
  background-color: red;
  justify-self: flex-end;
`;

const HeaderOption = styled(Link)``;

const Header = () => {
  return (
    <HeaderContent>
      <HeaderImage>
        <Logo />
      </HeaderImage>
      <HeaderOptions>
        
      </HeaderOptions>
    </HeaderContent>
  )
}

export default Header;
