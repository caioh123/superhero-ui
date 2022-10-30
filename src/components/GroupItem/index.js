import * as S from "./styles";
import hero from "../../static/images/hero.jpg";
import { MdDelete } from "react-icons/md";

export const GroupItem = ({ group }) => {
  return (
    <S.Item>
      <img src={hero} alt="herói" />
      <section>
        <h2>{group.title}</h2>
        <p>{group.members.length} membros</p>
        <div>
          {group &&
            group.members?.map((member) => (
              <img src={member.image.url} alt="herói" />
            ))}
        </div>
      </section>
      <button type="button">
        <MdDelete size={30} />
      </button>
    </S.Item>
  );
};
