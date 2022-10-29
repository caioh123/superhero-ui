import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  width: 80%;
  margin: 30px auto;
  height: 100%;
  a {
    text-decoration: none;
  }
  header {
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }

    span {
      font-size: 20px;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    margin-top: 2rem;
    @media (max-width: 1150px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    div#img {
      display: flex;
      align-items: center;

      img {
        display: flex;
        align-items: center;
        height: 50vh;
      }

      @media (max-width: 1150px) {
        display: none;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      div#title {
        h2 {
          font-size: 36px;
        }
      }
    }
  }
`;
