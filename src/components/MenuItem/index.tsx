import React from "react";

import * as S from "./styled";

interface MenuItemProps {
  text: string;
  onClick?: () => {};
}

const MenuItem = (props: MenuItemProps) => {
  const { text, onClick } = props;

  return (
    <S.MenuItemContainer onClick={onClick}>
      <S.MenuItemText>{text}</S.MenuItemText>
    </S.MenuItemContainer>
  );
};

export default MenuItem;
