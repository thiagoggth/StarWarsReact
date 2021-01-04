import React from "react";
import styled from "styled-components";

const LogoImage = styled.img`
  width: 100%;
`;

const Logo = () => {
  return (
    <>
      <LogoImage
        src="https://www.tribunadeituverava.com.br/wp-content/uploads/2019/12/star-wars-logo-2.png"
        alt="Star"
      />
    </>
  );
};

export default Logo;
