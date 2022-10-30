import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  width: 50%;
  margin: 30px auto;
  height: 100%;
`;

export const Item = styled.div`
  border-bottom: 1px solid black;
  display: flex;

  width: 50%;
  img {
    width: 180px;
    height: 180px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    h2 {
      color: blue;
      font-size: 36px;
    }
    p {
      font-size: 20px;
    }

    div {
      display: flex;
      flex-direction: row;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
