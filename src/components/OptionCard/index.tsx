import React from "react";

import * as S from "./styled";

interface OptionCardProps {
  photoUri?: string;
  label: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ label, photoUri }) => {
  return (
    <S.OptionCardContent>
      <S.OptionCardImg uri={photoUri}></S.OptionCardImg>
      <S.OptionCardTitle>
        <p>{label}</p>
      </S.OptionCardTitle>
    </S.OptionCardContent>
  );
};

export default OptionCard;
