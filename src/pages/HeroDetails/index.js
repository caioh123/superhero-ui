import * as S from "./styles";
import { AiOutlineRollback } from "react-icons/ai";
import { Tabs } from "../../components/Tabs";
export const HeroDetails = () => {
  return (
    <S.Container>
      <Tabs />
      <header>
        <AiOutlineRollback size={26} />
        <span>Voltar</span>
      </header>
      <section>
        <div id="img">
          <img alt="foto do heroi" />
        </div>
        <div>
          <div id="title">
            <h2>Nome do heroi</h2>
          </div>
        </div>
      </section>
    </S.Container>
  );
};
