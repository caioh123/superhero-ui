import { useState } from "react";
import * as S from "./styles";
import TabContent from "./TabContent";
import TabItem from "./TabItem";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </S.Nav>

      <S.ChildrenResult>
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 1 works!</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 works!</p>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <p>Tab 34 works!</p>
        </TabContent>
      </S.ChildrenResult>
    </S.Tabs>
  );
};
