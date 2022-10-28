import * as S from "./styles";
import { AiOutlineRollback } from "react-icons/ai";
import { Tabs } from "../../components/Tabs";
import TabItem from "../../components/Tabs/TabItem";

const styles = {
  App: {
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
      {/* <S.Container>
        <header>
          <AiOutlineRollback size={26} />
          <span>Voltar</span>
        </header>
        <section>
          <div id="img">
            <img alt="foto do heroi" />
          </div>
          <div style={styles.App}>
            <Tabs />
          </div>

        </section>
      </S.Container> */}
      <S.Container>
        <header style={{ backgroundColor: "blue" }}>
          <AiOutlineRollback size={26} />
          <span>Voltar</span>
        </header>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ backgroundColor: "aqua", width: "30vw" }}></div>
          <div style={{ backgroundColor: "grey", width: "70vw" }}>
            <Tabs />
          </div>
        </div>
      </S.Container>
    </>
  );
};
