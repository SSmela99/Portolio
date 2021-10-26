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

export const ScrollButton = styled.div`
  position: fixed;
  width: 75px;
  height: 75px;
  background-color: #393efa;
  border-radius: 50%;
  right: 15px;
  bottom: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 8px rgb(21, 21, 21);
  z-index: 999;

  span {
    background-color: #fff;
    width: 40px;
    height: 2px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);

    &::after,
    &::before {
      content: "";
      display: block;
      height: 100%;
      width: 25px;
      background-color: #fff;
      position: absolute;
      top: -50%;
      left: -1px;
      transform: translateY(-50%);
    }

    &::after {
      transform: rotate(-30deg);
      top: -7px;
    }

    &::before {
      transform: rotate(30deg);
      top: 7px;
    }
  }
`;
