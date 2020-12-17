import React, { useEffect, useState } from "react";
import Intro from "../../components/Intro";
import Logo from "../../components/Logo/index ";
import MenuItem from "../../components/MenuItem";
import api from "../../services/api";

import * as S from "./styled";

const Home = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const onAnimationFinish = () => {
    setAnimationFinished(true);
  };

  if (!animationFinished) {
    return <Intro onAnimationFinish={onAnimationFinish} />;
  }

  const options = [
    "Personagens",
    "Planetas",
    "Filmes",
    "Espaçonaves",
    "veículos",
  ];
  return (
    <S.HomeContainer>
      <S.LogoContent>
        <S.Logo>
          <Logo />
        </S.Logo>
      </S.LogoContent>
      <S.MenuContent>
        {options.map((option, index)=> (
          <MenuItem key={index} text={option} />
        ))}
        
      </S.MenuContent>
    </S.HomeContainer>
  );
};

export default Home;
