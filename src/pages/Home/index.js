import React from "react";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Filter>
        <input type="text" placeholder="Buscar Herói" />
      </S.Filter>
    </S.Wrapper>
  );
};
