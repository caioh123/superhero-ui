import * as S from "./styles";
import { MdDelete } from "react-icons/md";

export const GroupTable = ({ groups }) => {
  console.log("grupos", groups);
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
              <strong>{group.title}</strong>
            </td>
            <td>
              <div>
                <strong>{group.qnt}</strong>
              </div>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};
