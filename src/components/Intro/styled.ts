import styled, { keyframes } from 'styled-components';

const showInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(-0.75em);
  }
  20% {
    opacity: 1;
  }
  89% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(-1000em);
  }
`;

export const IntroWrapper = styled.div`
  
`;

export const StarWars = styled.div``;

export const Star = styled.img`
  animation: star 10s ease-out forwards;
`;

export const Wars = styled.img`
  animation: wars 10s ease-out forwards;
`;

export const BylineTitle = styled.span`
  animation: move-byline 10s linear forwards;
`;

export const Byline = styled.span`
  animation: move-byline 10s linear forwards;
`;


