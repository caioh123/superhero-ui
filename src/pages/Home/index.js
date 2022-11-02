import React, { useCallback } from "react";
import { useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import { GroupTable } from "../../components/GroupTable";
import * as S from "./styles";

import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { AiOutlineUser } from "react-icons/ai";
import localAPI from "../../services/localApi";
import { Link } from "react-router-dom";
import { getHeroes } from "../../services/heroes.service";
import { getGroups } from "../../services/groups.service";

const styles = {
  groupTopSection: {
    display: "flex",
  },
};

export const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchHeroInput, setSearchHeroInput] = useState("");

  const [groups, setGroups] = useState([]);

  const getHeroesFunc = useCallback(() => {
    getHeroes(searchHeroInput).then((res) => {
      setHeroes(res.data.results);
    });
  }, [searchHeroInput]);

  useEffect(() => {
    getHeroesFunc();
  }, [getHeroesFunc, searchHeroInput]);

  const getGroupsFunc = () => {
    getGroups().then((res) => {
      setGroups(res.data);
    });
  };

  useEffect(() => {
    getGroupsFunc();
  }, []);

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
        <button>
          <Link to="/groups">
            <HiUserGroup size={48} color="white" />
          </Link>
        </button>
      </S.Filter>
      <S.Container>
        <S.ProductList>
          {heroes ? (
            heroes.map((hero) => (
              <ProductCard
                groups={groups}
                hero={hero}
                getGroupsFunc={getGroupsFunc}
              />
            ))
          ) : (
            <>
              {searchHeroInput.length > 1 ? (
                <h3>Não foi encontrado nenhum herói com esse nome.</h3>
              ) : (
                <h3>Inicie a busca pelo herói aqui!</h3>
              )}
            </>
          )}
        </S.ProductList>
        <S.Groups>
          <div style={styles.groupTopSection}>
            <AiOutlineUser size={30} />
            <h2>Grupos</h2>
          </div>
          <div id="groups-list">
            <GroupTable groups={groups} getGroupsFunc={getGroupsFunc} />
          </div>
          <footer>
            <Link to="/groups">
              <button type="button">Criar novos grupos</button>
            </Link>
          </footer>
        </S.Groups>
      </S.Container>
    </S.Wrapper>
  );
};
