import React from "react";
import { useState } from "react";
import { GroupTable } from "../../components/GroupTable";
import * as S from "./styles";
import API from "../../services/api";
import { Modal } from "../../components/Modal";

import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import Button from "../../components/Button";

const styles = {
  groupTopSection: {
    display: "flex",
  },
};

export const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchHeroInput, setSearchHeroInput] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [newGroup, setNewGroup] = useState("");

  const handleStatusModal = () => {
    setOpenModal(!openModal);
  };

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
            <h1>Busque aqui</h1>
          )}
        </S.ProductList>
        <S.Groups>
          <div style={styles.groupTopSection}>
            <AiOutlineUser size={30} />
            <h2>Grupos</h2>
          </div>
          <div id="groups-list">
            <GroupTable />
          </div>
          <footer>
            <button type="button" onClick={() => handleStatusModal()}>
              Criar novos grupos
            </button>
          </footer>
        </S.Groups>
      </S.Container>
      <Modal
        onRequestClose={handleStatusModal}
        isOpen={openModal}
        handleCloseModal={() => !setOpenModal}
      >
        <S.CreateGroupContainer>
          <h2>Adicione o nome do seu grupo</h2>
          <input
            value={newGroup}
            placeholder="Digite o nome"
            onChange={(e) => setNewGroup(e.target.value)}
          />
          <Button width="80%">Salvar</Button>
        </S.CreateGroupContainer>
      </Modal>
    </S.Wrapper>
  );
};
