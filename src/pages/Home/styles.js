import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: 5fr 2fr;
  grid-gap: 20px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    div#cart-section {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    display: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }
  @media (max-width: 955px) {
    width: 80vw;
    input {
      width: 20vw;
      height: 300px;
    }

    svg {
      display: flex;
      color: white;
    }
  }
  input {
    width: 50vw;
    padding-left: 35px;
    color: grey;
    box-shadow: 2px 3px 28px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    transition: all 0.2s ease;

    &::placeholder {
      color: #b3b3b3;
    }
    &:focus {
      outline: none;
      box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.3);
    }
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

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Groups = styled.aside`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  max-height: 75vh;
  width: 450px;
  position: sticky;
  top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 955px) {
    display: none;
  }
  #groups-list {
    overflow: auto;
    height: 100%;
    div {
      display: flex;
      justify-content: start;
    }
  }
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        filter: brightness(80%);
      }
    }
  }
`;
