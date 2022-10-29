import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { Tabs } from "../../components/Tabs";
import API from "../../services/api";

export const HeroDetails = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.get(`/${id}`).then((res) => {
      setHero(res.data);
    });
  }, [id]);
  return (
    <>
      {hero.name && (
        <S.Container>
          <Link to="/">
            <header>
              <AiOutlineRollback size={26} />
              <span>Voltar</span>
            </header>
          </Link>

          <section>
            <div id="img">
              <img alt={hero.name} src={hero.image.url} />
            </div>
            <div>
              <div id="title">
                <h2>{hero.name}</h2>
              </div>
              <Tabs hero={hero} />
            </div>
          </section>
        </S.Container>
      )}
    </>
  );
};
