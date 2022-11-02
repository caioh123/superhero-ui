import * as S from "./styles";
import { MdDelete } from "react-icons/md";
import localAPI from "../../services/localApi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const GroupTable = ({ groups, getGroups }) => {
  const handleDeleteGroup = (id) => {
    localAPI
      .delete(`/grupos/${id}`)
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
    <S.Table>
      <thead>
        <tr>
          <th>Nome do grupo</th>
          <th>Quantidade de heróis</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {groups.map((group) => (
          <tr key={group.id}>
            <td>
              <Link to={`/groups/${group.id}`}>
                <strong>{group.title}</strong>
              </Link>
            </td>
            <td>
              <div>
                <strong>{group.members.length}</strong>
              </div>
            </td>
            <td>
              <button type="button" onClick={() => handleDeleteGroup(group.id)}>
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};
