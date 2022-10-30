import { useEffect, useState } from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import hero from "../../static/images/hero.jpg";

import localAPI from "../../services/localApi";
import { GroupItem } from "../../components/GroupItem";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [randomImage, setRandomImage] = useState("");
  const [newGroup, setNewGroup] = useState("");

  console.log(groups);

  const createNewGroup = () => {
    const objToSend = {
      id: uuidv4(),
      title: newGroup,
      members: [],
    };
    localAPI
      .post("/grupos", objToSend)
      .then(() => {
        Swal.fire("Grupo criado com sucesso!");
      })
      .catch(() => {
        Swal.fire("Houve um erro ao criar seu grupo!");
      })
      .finally(() => {});
  };

  const getGroups = () => {
    localAPI.get("/grupos").then((res) => {
      setGroups(res.data);
    });
  };

  useEffect(() => {
    getGroups();
  }, []);
  return (
    <S.Container>
      {groups.map((group) => (
        <GroupItem group={group} />
      ))}
    </S.Container>
  );
};
