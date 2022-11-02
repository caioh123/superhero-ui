import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  width: 50%;
  margin: 30px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    header {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      justify-content: flex-start;
      svg {
        color: black;
      }
      span {
        text-decoration: none;
        color: black;
      }
    }
  }
  button {
    font-size: 28px;
  }
  @media (max-width: 955px) {
    width: 90%;
    padding: 12px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CreateGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    height: 64px;
    width: 100%;
    margin-top: 16px;
    overflow: hidden;
    font-size: 20px;
    padding: 16px;
    height: 100%;
    flex: 1;
    color: #000;

    &::placeholder {
      color: #c2c2c2;
    }
  }

  button {
    margin-top: 24px;
    align-self: center;
  }
`;
