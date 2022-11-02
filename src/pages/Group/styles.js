import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 20px;
  flex-flow: row;
  height: 100%;
  width: 60%;
  margin-top: 20px;

  div {
    strong {
      color: white;
      font-size: 24px;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 955px) {
    grid-template-columns: repeat(1, 1fr);
  }

  h3 {
    font-size: 24px;
    color: white;
  }
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    span {
      color: white;
    }
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }
  @media (max-width: 955px) {
    width: 80vw;

    svg {
      display: flex;
      color: white;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  flex-direction: column;
`;
