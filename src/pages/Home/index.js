import React, { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import Swal from "sweetalert2";
import { GroupTable } from "../../components/GroupTable";
import * as S from "./styles";
import API from "../../services/api";
import { Modal } from "../../components/Modal";

import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../../components/Button";
import localAPI from "../../services/localApi";
import { Link } from "react-router-dom";

const styles = {
  groupTopSection: {
    display: "flex",
  },
};

export const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchHeroInput, setSearchHeroInput] = useState("");

  const [groups, setGroups] = useState([]);

  const getHeroes = useCallback(() => {
    API.get(`/search/${searchHeroInput}`).then((res) => {
      setHeroes(res.data.results);
    });
  }, [searchHeroInput]);

  useEffect(() => {
    getHeroes();
  }, [getHeroes, searchHeroInput]);

  const getGroups = () => {
    localAPI.get("/grupos").then((res) => {
      setGroups(res.data);
    });
  };

  useEffect(() => {
    getGroups();
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
              <ProductCard groups={groups} hero={hero} getGroups={getGroups} />
            ))
          ) : (
            <h3>Inicie a busca pelo herói aqui!</h3>
          )}
        </S.ProductList>
        <S.Groups>
          <div style={styles.groupTopSection}>
            <AiOutlineUser size={30} />
            <h2>Grupos</h2>
          </div>
          <div id="groups-list">
            <GroupTable groups={groups} getGroups={getGroups} />
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
