import styled from "styled-components";

export const Tabs = styled.div`
  height: 100%;
  min-height: 400px;
  padding: 2rem 1rem;
  color: black;
  border-radius: 2rem;

  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

export const Nav = styled.ul`
  width: 80%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 2rem;
  padding-left: 0px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Attr = styled.div`
  display: flex;
  flex-direction: row;
  div {
    strong {
      font-size: 22px;
      margin-top: 16px;
    }

    p {
      font-size: 22px;
      margin-top: 16px;
      align-self: center;
      margin-left: 8px;
    }
  }
`;

export const ChildrenResult = styled.div``;
