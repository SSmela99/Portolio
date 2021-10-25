import styled from "styled-components";

export const Description = styled.p`
  min-height: 200px;

  @media (max-width: 1023px) {
    min-height: max-content;
    margin-bottom: 20px;
  }
`;

export const Technology = styled.div`
  min-width: 100px;
  min-height: 130px;

  @media (max-width: 1535px) and (min-width: 1279px) {
    min-height: 90px;
    min-width: 80px;
  }

  @media (max-width: 1023px) {
    min-height: 70px;
  }
`;
