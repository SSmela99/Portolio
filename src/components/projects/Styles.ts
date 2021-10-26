import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding-top: 100px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  transition: 0.5s;

  @media (max-width: 1279px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1023px) {
    display: block;
  }

  .item {
    grid-column: span 2;
    padding: 20px;
    transition: 0.5s;

    @media (max-width: 1023px) {
      padding: 0;
      margin: 30px 0;
    }
  }

  .item:last-child:nth-child(3n - 1) {
    grid-column-end: -2;
  }

  .item:nth-last-child(2):nth-child(3n + 1) {
    grid-column-end: 4;
  }

  .item:last-child:nth-child(3n - 2) {
    grid-column-end: 5;
  }
`;
