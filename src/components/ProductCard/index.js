import * as S from "./styles";
import { Link } from "react-router-dom";

export const ProductCard = ({ hero }) => {
  console.log(hero);
  return (
    <S.ListItem>
      <Link to={``}>
        <div id="link">
          <img src={hero.image.url} alt={hero.name} />
          <strong>{hero.name}</strong>
        </div>
      </Link>
    </S.ListItem>
  );
};
