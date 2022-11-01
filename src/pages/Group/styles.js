import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-top: 36px;

  strong {
    color: white;
    font-size: 24px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
  @media (max-width: 955px) {
    grid-template-columns: repeat(1, 1fr);
    overflow: auto;
    height: 100%;
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
  display: grid;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;
