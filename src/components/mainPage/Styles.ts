import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPage = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: transparent;
  max-height: 1200px;
  min-height: 900px;
  overflow: hidden;

  @media (max-width: 1023px) {
    height: 100%;
    max-height: unset;
    min-height: unset;
  }
`;

export const StyledBackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  height: inherit;
  max-height: inherit;
  display: flex;
  z-index: -1;
  min-height: inherit;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

export const StyledBackgroundLeft = styled(motion.div)`
  width: 40%;
  background-color: #212121;
  transition: all 0.5s;

  @media (max-width: 1023px) {
    width: 0;
  }
`;

export const StyledBackgroundRight = styled.div`
  width: 60%;

  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledContent = styled.div`
  height: calc(100vh - 96px);
  padding-top: 96px;
  transition: 0.5s;
  max-height: 1100px;
  min-height: 800px;

  @media (max-width: 1023px) {
    height: 100%;
    min-height: unset;
  }

  img {
    max-height: 700px;
  }
`;
