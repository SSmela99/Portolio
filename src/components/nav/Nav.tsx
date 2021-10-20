import { StyledLi, Line } from "./Styles";
import { motion } from "framer-motion";

import {
  square,
  line,
  name,
  firstListEl,
  secondListEl,
  thirthListEl,
} from "./Animations";

const Nav = () => {
  return (
    <div className="w-full fixed h-24 z-10">
      <nav className="container mx-auto h-full flex justify-between items-center transition-all">
        <div className="flex items-center">
          <motion.div
            className="w-14 h-14 bg-blue"
            variants={square}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <Line variants={line} initial="hidden" animate="visible" />
          <motion.h1
            className="text-light text-2xl font-semibold"
            variants={name}
            initial="hidden"
            animate="visible"
          >
            Sebastian Smela
          </motion.h1>
        </div>
        <ul className="flex items-center z-20 bg-light">
          <StyledLi
            variants={firstListEl}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Portfolio
          </StyledLi>
          <StyledLi
            variants={secondListEl}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            O Mnie
          </StyledLi>
          <StyledLi
            variants={thirthListEl}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            Contact
          </StyledLi>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
