import styled from 'styled-components';

const mainColor = 'rgba(253,242,83,1)'
const mainColorHover = 'rgba(229,177,58,1)'

export const MenuItemContainer = styled.div`
  margin: 20px;
  border-radius: 4px;
  border: 1px solid ${mainColor};
  padding: 10px;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${mainColor};
  transition: 0.2s ease-in-out;

  &:hover{
    border-color: ${mainColorHover};
    color: ${mainColorHover};
  }
`;

export const MenuItemText = styled.p`
  font-weight: bold;
  font-size: 35px;
`;