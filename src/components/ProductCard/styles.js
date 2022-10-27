import styled from "styled-components";
import theme from "../../static/styles";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  max-height: 305px;
  a {
    text-decoration: none;
    color: #000;
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
      }
      button {
        background-color: green;
        margin-top: 8px;
      }
      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
        text-decoration: none;
      }
    }
  }

  .seeProfile {
    background-color: ${theme.pallete.lightBlue};
  }

  .addGroup {
    background-color: ${theme.pallete.lightRed};
  }

  button {
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 16px;
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
        margin-right: 5px;
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
