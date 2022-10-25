import React from "react";
import { useState } from "react";
import * as S from "./styles";
import API from "../../services/api";
import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchHeroInput, setSearchHeroInput] = useState("");

  useEffect(() => {
    API.get(`/search/${searchHeroInput}`).then((res) => {
      setHeroes(res.data.results);
    });
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
        <S.ProductList>
          {heroes ? (
            heroes.map((hero) => <ProductCard hero={hero}>outline</ProductCard>)
          ) : (
            <h1 style={{ background: "red" }}>Busque aqui</h1>
          )}
        </S.ProductList>
      </S.Container>
    </S.Wrapper>
  );
};
