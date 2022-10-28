import { useState } from "react";
import * as S from "./styles";
import TabContent from "./TabContent";
import TabItem from "./TabItem";

export const Tabs = ({ hero }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  console.log(hero);

  const convertFirstLetterCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <S.Tabs className="Tabs">
      <S.Nav className="nav">
        <TabItem
          title="Stats"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Bibliografia"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Aparência"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Trabalhos"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Conexões"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </S.Nav>

      <S.ChildrenResult>
        <TabContent id="tab1" activeTab={activeTab}>
          {Object.entries(hero.powerstats).map((attr) => (
            <S.Attr>
              <div style={{ flexDirection: "row" }}>
                <strong>{convertFirstLetterCapitalize(attr[0])}:</strong>
                <p>{attr[1]}</p>
              </div>
            </S.Attr>
          ))}
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          {Object.entries(hero.biography).map((attr) => (
            <S.Attr>
              <div style={{ flexDirection: "row" }}>
                <strong>{convertFirstLetterCapitalize(attr[0])}:</strong>
                <p>{attr[1]}</p>
              </div>
            </S.Attr>
          ))}
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          {Object.entries(hero.appearance).map((attr) => (
            <S.Attr>
              <div style={{ flexDirection: "row" }}>
                <strong>{convertFirstLetterCapitalize(attr[0])}:</strong>
                <p>{attr[1]}</p>
              </div>
            </S.Attr>
          ))}
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          {Object.entries(hero.work).map((attr) => (
            <S.Attr>
              <div style={{ flexDirection: "row" }}>
                <strong>{convertFirstLetterCapitalize(attr[0])}:</strong>
                <p>{attr[1]}</p>
              </div>
            </S.Attr>
          ))}
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          {Object.entries(hero.connections).map((attr) => (
            <S.Attr>
              <div style={{ flexDirection: "row" }}>
                <strong>{convertFirstLetterCapitalize(attr[0])}:</strong>
                <p>{attr[1]}</p>
              </div>
            </S.Attr>
          ))}
        </TabContent>
      </S.ChildrenResult>
    </S.Tabs>
  );
};
