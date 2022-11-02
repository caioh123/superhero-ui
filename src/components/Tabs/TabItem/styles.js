import styled from "styled-components";
import theme from "../../../static/styles";

export const Li = styled.li`
  width: 100%;
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  &:first-child {
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }
  &:last-child {
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  &.active {
    background: ${theme.pallete.primary};
    color: white;
    background: black;
  }
`;
