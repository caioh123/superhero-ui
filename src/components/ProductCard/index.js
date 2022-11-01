import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineUserAdd, AiFillDelete } from "react-icons/ai";
import { Modal } from "../Modal";
import Button from "../Button";
import Select from "react-select";
import localAPI from "../../services/localApi";
import Swal from "sweetalert2";

export const ProductCard = ({
  hero,
  groups,
  deleteHero,
  handleDeleteHero,
  getGroupHeroDetails,
  getGroups,
}) => {
  console.log("isso é hero", hero);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const { id } = useParams();

  const handleSelectGroup = (val) => {
    setSelectedOption(val);
  };

  const options = useMemo(() => {
    if (groups) {
      const groupOptions = groups.map((group) => ({
        value: group,
        label: group.title,
      }));

      return groupOptions;
    }

    return;
  }, [groups]);

  const members = selectedOption?.value.members;
  const handleAddHeroToAGroup = (a) => {
    localAPI
      .put(`/grupos/${selectedOption.value.id}`, {
        title: selectedOption.value.title,
        members: [...members, hero],
      })
      .then(() => {
        Swal.fire("ADICIONADO");
      })
      .catch(() => {
        console.log("nao foi possive");
      })
      .finally(() => {
        getGroups();
      });
    Swal.fire(" adicionado");
  };

  const handleStatusModal = () => {
    setOpenModal(!openModal);
  };
  const handleAddGroup = () => {
    handleStatusModal();
  };

  return (
    <S.ListItem>
      <div id="link">
        <img src={hero.image.url} alt={hero.name} />
        <strong>{hero.name}</strong>
        <Link to={`/profile/${hero.id}`}>
          <button type="button" className="seeProfile">
            <div>
              <AiOutlineUser size={16} />
            </div>
            <span>Ver perfil</span>
          </button>
        </Link>

        {deleteHero && (
          <button
            type="button"
            className="deleteHero"
            onClick={() => handleDeleteHero(hero.id)}
          >
            <div>
              <AiFillDelete size={16} />
            </div>
            <span>Deletar herói</span>
          </button>
        )}
      </div>
      {!deleteHero && (
        <>
          <button type="button" className="addGroup" onClick={handleAddGroup}>
            <div>
              <AiOutlineUserAdd size={16} />
            </div>

            <span>Adicionar grupo</span>
          </button>

          <Modal
            onRequestClose={handleStatusModal}
            isOpen={openModal}
            handleCloseModal={() => !setOpenModal}
            contentLabel="aqui"
          >
            <S.AddToGroup>
              <h2>Selecione o grupo </h2>
              <Select
                defaultValue={selectedOption}
                onChange={handleSelectGroup}
                options={options}
              />
              <Button width="80%" onClick={() => handleAddHeroToAGroup(hero)}>
                Salvar
              </Button>
            </S.AddToGroup>
          </Modal>
        </>
      )}
    </S.ListItem>
  );
};
