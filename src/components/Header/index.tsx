import React from "react";
import getMenuItens from "../../utils/getMenuItens";
import Logo from "../Logo/index ";
import * as S from "./styled";


const Header = () => {
  const options = getMenuItens();

  return (
    <S.HeaderContent>
      <S.HeaderImage to="/">
        <Logo />
      </S.HeaderImage>
      <S.HeaderOptions>
        {options.map((option, index) => (
          <S.HeaderOption key={index} to={option.uri}>
            {option.label}
          </S.HeaderOption>
        ))}
      </S.HeaderOptions>
    </S.HeaderContent>
  );
};

export default Header;
