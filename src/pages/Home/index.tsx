import React, { useState } from 'react';
import Intro from '../../components/Intro';

const Home = () => {

  const [animationFinished, setAnimationFinished] = useState(false);

  const onAnimationFinish = () => {
    setAnimationFinished(true);
  }

  if(!animationFinished){
    return <Intro onAnimationFinish={onAnimationFinish} />
  }

  return (
    <p style={{color: 'white'}} >Finished!!!</p>
  )
}

export default Home;
