import * as S from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";

export const ProductCard = ({ hero }) => {
  return (
    <S.ListItem>
      <Link to={`/profile/${hero.id}`}>
        <div id="link">
          <img src={hero.image.url} alt={hero.name} />
          <strong>{hero.name}</strong>
          <button type="button" className="seeProfile">
            <div>
              <AiOutlineUser size={16} />
            </div>
            <span>Ver perfil</span>
          </button>
        </div>
        <button type="button" className="addGroup">
          <div>
            <AiOutlineUserAdd size={16} />
          </div>

          <span>Adicionar grupo</span>
        </button>
      </Link>
    </S.ListItem>
  );
};
