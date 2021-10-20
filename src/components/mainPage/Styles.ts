import styled from "styled-components";

export const StyledPage = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: transparent;
  max-height: 1200px;
`;

export const StyledBackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  height: inherit;
  max-height: inherit;
  display: flex;
  z-index: -1;
`;

export const StyledBackgroundLeft = styled.div`
  width: 40%;
  background-color: #212121;
  transition: all 0.5s;

  @media (max-width: 1023px) {
    width: 200px;
    transition: all 0.5s;
  }
`;

export const StyledBackgroundRight = styled.div`
  width: 60%;
`;

export const StyledContent = styled.div`
  height: calc(100vh - 96px);
  padding-top: 96px;
  display: flex;
`;
