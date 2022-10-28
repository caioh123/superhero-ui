import React from "react";
import * as S from "./styles";

const TabItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <S.Li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </S.Li>
  );
};
export default TabItem;
