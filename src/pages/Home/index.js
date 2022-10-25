import React from "react";
import { useState } from "react";
import * as S from "./styles";
import API from "../../services/api";
import { useEffect } from "react";

export const Home = () => {
  const [hero, setHero] = useState([]);
  const [searchHeroInput, setSearchHeroInput] = useState("");

  useEffect(() => {
    API.get(`${searchHeroInput}`);
  }, [searchHeroInput]);

  return (
    <S.Wrapper>
      <S.Filter>
        <input
          type="text"
          placeholder="Buscar Herói"
          onChange={(event) =>
            setSearchHeroInput(event.target.value.toLowerCase())
          }
          value={searchHeroInput}
        />
      </S.Filter>
      <S.Container>
        <S.ProductList>a</S.ProductList>
      </S.Container>
    </S.Wrapper>
  );
};
