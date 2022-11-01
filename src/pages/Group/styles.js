import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 750px) {
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
`;
