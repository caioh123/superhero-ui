import styled from "styled-components";

export const Li = styled.li`
  width: 50%;
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

  &:hover {
    background: rgba(50, 224, 196, 0.15);
  }

  &.active {
    background: #39a2db;
  }
`;
