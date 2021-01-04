import React from "react";

import * as S from "./styled";

interface MenuItemProps {
  text: string;
  to: string;
}

const MenuItem = (props: MenuItemProps) => {
  const { text, to } = props;

  return (
    <S.MenuItemContainer to={to}>
      <S.MenuItemText>{text}</S.MenuItemText>
    </S.MenuItemContainer>
  );
};

export default MenuItem;
