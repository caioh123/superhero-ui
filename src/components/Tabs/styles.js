import styled from "styled-components";

export const Tabs = styled.div`
  width: 80%;
  height: auto;
  min-height: 400px;
  background: #053742;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 2rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

export const Nav = styled.ul`
  width: 60%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #39a2db;
  border-radius: 2rem;
  padding-left: 0px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ChildrenResult = styled.div``;
