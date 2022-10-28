import styled from "styled-components";

export const Tabs = styled.div`
  height: 100%;
  min-height: 400px;
  background: #053742;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 2rem;
  flex: 1;

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
  border: 1px solid #39a2db;
  border-radius: 2rem;
  padding-left: 0px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ChildrenResult = styled.div``;
