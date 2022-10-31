import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  width: 50%;
  margin: 30px auto;
  height: 100%;

  @media (max-width: 955px) {
    width: 90%;
    padding: 12px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    padding: 30px;
    background: #fff;
    border-radius: 4px;
    max-height: 75vh;
    top: 20px;
    width: 30%;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(80%);
    }
  }
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
