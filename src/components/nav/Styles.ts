import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLi = styled(motion.li)`
  margin: 0 1rem;
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Line = styled(motion.hr)`
  width: 55px;
  background-color: #000;
  height: 2px;

  @media (max-width: 1023px) {
    background-color: #000;
    width: 40px;
    height: 2px;
  }
`;

export const MenuButton = styled(motion.span)`
  width: 80%;
  background-color: #212121;
  height: 2px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #212121;
    display: block;
    position: absolute;
    transition: 0.5s;
  }

  &::before {
    top: 10px;
  }

  &::after {
    top: -10px;
  }

  &.open {
    background-color: #fff;
    transition: 0.5s;
  }

  &.open::before {
    transform: rotate(-45deg);
    top: 0;
    transition: 0.5s;
  }

  &.open::after {
    transform: rotate(45deg);
    top: 0;
    transition: 0.5s;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 96px;
  background-color: #fff;
  width: 0;
  overflow: hidden;
  height: 165px;
  transition: 0.5s;

  @media (min-width: 1023px) {
    display: none;
  }

  &.open {
    width: 100%;
    transition: 0.5s;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin: 5px 0;
    padding: 10px;
    cursor: pointer;
    width: 100px;
    font-weight: 600;
  }
`;
