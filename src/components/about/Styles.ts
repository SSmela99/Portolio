import styled from "styled-components";

export const Schools = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Technologies = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  grid-gap: 50px;
  align-items: center;
  transition: 0.5s;

  @media (max-width: 1279px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 1023px) {
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  img {
    max-width: 130px;
    padding: 20px;
    cursor: pointer;
    transition: 0.5s;

    &::after {
      content: "A";
      display: block;
      background-color: red;
    }

    @media (max-width: 1279px) {
      max-width: 130px;
    }

    @media (max-width: 1023px) {
      max-width: 140px;
      padding: 10px;
    }

    @media (max-width: 767px) {
      max-width: 100px;
    }
  }
`;
