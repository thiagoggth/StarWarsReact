import React, { useEffect } from "react";

import "./introAnimation.css";

type IntroProps = {
  onAnimationFinish: () => void;
};

const Intro = (props: IntroProps) => {
  const { onAnimationFinish } = props;

  useEffect(() => {
    setTimeout(onAnimationFinish, 10000);
  }, []);

  return (
    <div className="starwars">
      <img
        src="https://raw.githubusercontent.com/silas00/Starwars/master/img/star.svg"
        alt="Star"
        className="star"
      />
      <img
        src="https://raw.githubusercontent.com/silas00/Starwars/0bcef3fc8682bf851cb4912addde80894ed42ff8/img/wars.svg"
        alt="Wars"
        className="wars"
      />
      <h1 className="byline" id="byline">
        Seja Bem-Vindo
      </h1>
    </div>
  );
};

export default Intro;
