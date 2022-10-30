import styled from "styled-components";

export const Item = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  width: 100%;

  img {
    width: 180px;
    height: 180px;
    @media (max-width: 955px) {
      width: 100px;
      height: 100px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    width: 100%;

    h2 {
      color: blue;
      font-size: 36px;
      @media (max-width: 955px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 20px;

      @media (max-width: 955px) {
        font-size: 14px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      @media (max-width: 955px) {
        width: 30px;
        height: 30px;
      }
    }
  }
  button {
    background-color: transparent;
  }
`;
