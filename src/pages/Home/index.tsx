import React, { useState } from "react";
import Intro from "../../components/Intro";
import Logo from "../../components/Logo/index ";
import MenuItem from "../../components/MenuItem";
import * as S from "./styled";

const Home = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const onAnimationFinish = () => {
    setAnimationFinished(true);
  };

  const skipAnimation = () => {
    setAnimationFinished(true);
  }

  if (!animationFinished) {
    return <Intro onAnimationFinish={onAnimationFinish} skipAnimation={skipAnimation}/>;
  }

  const options = [
    "Personagens",
    "Planetas",
    "Filmes",
    "Espaçonaves",
    "veículos",
  ];
  return (
    <S.HomeContainer className="menu">
      <S.LogoContent>
        <Logo />
      </S.LogoContent>
      <S.MenuItemsWrapper>
        <S.MenuContent>
          {options.map((option, index) => (
            <MenuItem key={index} text={option} />
          ))}
        </S.MenuContent>
      </S.MenuItemsWrapper>
    </S.HomeContainer>
  );
};

export default Home;
