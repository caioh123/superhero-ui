import styled from "styled-components";
import theme from "../../static/styles";

export const Container = styled.div`
  background-color: ${theme.pallete.primary.main};
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
  align-items: center;
  justify-content: space-around;
  input {
    width: 50vw;
    margin-bottom: 20px;
    padding-left: 35px;
    color: grey;
    box-shadow: 2px 3px 28px 1px rgba(0, 0, 0, 0.1);
    border: 0px solid transparent;
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
