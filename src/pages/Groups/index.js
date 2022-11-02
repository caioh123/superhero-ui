import { useEffect, useState } from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { AiOutlineRollback } from "react-icons/ai";

import localAPI from "../../services/localApi";
import { GroupItem } from "../../components/GroupItem";
import { Modal } from "../../components/Modal";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { createNewGroup, getGroups } from "../../services/groups.service";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleStatusModal = () => {
    setOpenModal(!openModal);
  };

  const createNewGroupFunc = () => {
    if (newGroup.length === 0) {
      return Swal.fire("Por favor, adicione um nome");
    }

    const objToSend = {
      id: uuidv4(),
      title: newGroup,
      members: [],
    };
    createNewGroup(objToSend)
      .then(() => {
        Swal.fire("Grupo criado com sucesso!");
      })
      .catch(() => {
        Swal.fire("Houve um erro ao criar seu grupo!");
      })
      .finally(() => {
        getGroupsFunc();
        setOpenModal(false);
      });
  };

  const getGroupsFunc = () => {
    getGroups().then((res) => {
      setGroups(res.data);
    });
  };

  useEffect(() => {
    getGroupsFunc();
  }, []);
  return (
    <S.Container>
      <Link to="/">
        <header>
          <AiOutlineRollback size={26} />
          <span>Voltar</span>
        </header>
      </Link>
      {groups.length > 0 ? (
        groups.map((group) => (
          <>
            <GroupItem group={group} getGroupsFunc={getGroupsFunc} />
          </>
        ))
      ) : (
        <S.ContainerButton>
          <h2>Ainda não há grupos disponíveis, deseja criar um?</h2>
        </S.ContainerButton>
      )}
      <Button
        width="30%"
        borderRadius="8px"
        onClick={() => handleStatusModal()}
      >
        Criar novo grupo
      </Button>
      <Modal
        onRequestClose={handleStatusModal}
        isOpen={openModal}
        handleCloseModal={() => !setOpenModal}
        contentLabel="aqui"
      >
        <S.CreateGroupContainer>
          <h2>Adicione o nome do seu grupo</h2>
          <input
            value={newGroup}
            placeholder="Digite o nome"
            onChange={(e) => setNewGroup(e.target.value)}
          />
          <Button onClick={createNewGroupFunc} width="80%">
            Salvar
          </Button>
        </S.CreateGroupContainer>
      </Modal>
    </S.Container>
  );
};
