import * as S from "./styles";
import { Link } from "react-router-dom";
import hero from "../../static/images/hero.jpg";
import { MdDelete } from "react-icons/md";
import localAPI from "../../services/localApi";
import Swal from "sweetalert2";

export const GroupItem = ({ group, getGroups }) => {
  const handleDeleteGroup = () => {
    localAPI
      .delete(`/grupos/${group.id}`)
      .then(() => {
        Swal.fire("Grupo deletado com sucesso");
      })
      .catch(() => {
        Swal.fire("Não foi possível deletar o seu grupo");
      })
      .finally(() => {
        getGroups();
      });
  };

  return (
    <S.Item>
      <img src={hero} alt="herói" />
      <section>
        <Link to={`/groups/${group.id}`}>
          <h2>{group.title}</h2>
        </Link>
        <p>{group.members.length} membros</p>
        <div>
          {group &&
            group.members?.map((member) => (
              <img src={member.image.url} alt="herói" />
            ))}
        </div>
      </section>
      <button type="button">
        <MdDelete size={30} onClick={handleDeleteGroup} />
      </button>
    </S.Item>
  );
};
