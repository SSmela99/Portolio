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
  background-color: #fff;
`;
