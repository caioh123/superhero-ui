import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  thead th {
    color: #999;
    padding: 12px;
  }
  tbody {
    td {
      padding: 5px;
      text-align: center;
      border-bottom: 1px solid #eee;
      height: 100%;

      strong {
        margin-left: 16px;
      }
    }
  }

  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    strong {
      display: flex;
      align-self: center;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    cursor: pointer;
  }
`;
