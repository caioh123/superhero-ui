import styled from "styled-components";
import theme from "../../static/styles";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 300px;
  a {
    text-decoration: none;
    color: #000;
  }
  div {
    display: flex;
    flex-direction: column;

    img {
      align-self: center;
      width: 150px;
      max-height: 150px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      font-family: "Montserrat";
      font-weight: 700;
    }
    button {
      margin-top: 8px;
      cursor: pointer;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      text-decoration: none;
    }
  }

  .seeProfile {
    background-color: ${theme.pallete.lightBlue};
  }

  .deleteHero {
    background-color: ${theme.pallete.lightRed};
  }

  .addGroup {
    background-color: ${theme.pallete.lightRed};
  }

  button {
    border: 0;
    border-radius: 4px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    width: 100%;
    &:hover {
      filter: brightness(80%);
    }
    div {
      display: flex;
      background-color: blue;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);
      svg {
        margin-right: 12px;
      }
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      padding: 0 5px;
    }
  }
`;

export const AddToGroup = styled.div`
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
`;
