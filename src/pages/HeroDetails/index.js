import * as S from "./styles";
import { AiOutlineRollback } from "react-icons/ai";
import { Tabs } from "../../components/Tabs";

const styles = {
  App: {
    backgroundColor: "red",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
};

export const HeroDetails = () => {
  return (
    <>
      <div style={styles.App}>
        <Tabs />
      </div>
      <S.Container>
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
    </>
  );
};
