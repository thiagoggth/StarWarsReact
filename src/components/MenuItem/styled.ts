import { Link } from 'react-router-dom';
import styled from 'styled-components';

const mainColor = 'rgba(253,242,83,1)'
const mainColorHover = 'rgba(229,177,58,1)'

export const MenuItemContainer = styled(Link)`
  margin: 20px;
  border-radius: 4px;
  border: 1px solid ${mainColor};
  padding: 10px;
  width: 25%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${mainColor};
  transition: 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 1200px){
    height: 4rem;
  }

  &:hover{
    border-color: ${mainColorHover};
    color: ${mainColorHover};
  }

  @media screen and (max-width: 768px){
    width: 80%;
  }
`;

export const MenuItemText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;