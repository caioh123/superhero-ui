import React from "react";
import * as S from "./styles";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <S.Container className="TabContent">{children}</S.Container>
  ) : null;
};

export default TabContent;
