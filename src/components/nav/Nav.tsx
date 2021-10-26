import { useState, useCallback, useRef } from "react";
import { StyledLi, Line, Menu, MenuButton, MenuList } from "./Styles";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import {
  square,
  line,
  name,
  firstListEl,
  secondListEl,
  thirthListEl,
} from "./Animations";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoRef = useRef<any>(null);

  const openMenuHandler = useCallback((state) => {
    state === false ? setIsOpen(true) : setIsOpen(false);
  }, []);

  return (
    <div className="w-full fixed h-24 z-10 bg-light">
      <nav className="container mx-auto h-full flex justify-between items-center transition-all bg-light">
        <Link activeClass="active" to="home" smooth={true} spy={true}>
          <div className="flex items-center cursor-pointer">
            <motion.div
              className="lg:w-14 lg:h-14 w-10 h-10 bg-blue"
              variants={square}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <Line variants={line} initial="hidden" animate="visible" />
            <motion.h1
              className="text-dark lg:text-2xl md:text-lg font-semibold text-sm"
              variants={name}
              initial="hidden"
              animate="visible"
              ref={logoRef}
              onClick={() => console.log(logoRef.current)}
            >
              Sebastian Smela
            </motion.h1>
          </div>
        </Link>
        <ul className="lg:flex hidden items-center z-20 bg-light">
          <Link to="projects" smooth={true} spy={true}>
            <StyledLi
              variants={firstListEl}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Portfolio
            </StyledLi>
          </Link>
          <Link to="about" smooth={true} spy={true}>
            <StyledLi
              variants={secondListEl}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              O Mnie
            </StyledLi>
          </Link>
          <Link to="contact" smooth={true} spy={true}>
            <StyledLi
              variants={thirthListEl}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Contact
            </StyledLi>
          </Link>
        </ul>
        <div
          className="block lg:hidden h-10 w-10 p-1 cursor-pointer relative"
          onClick={() => openMenuHandler(isOpen)}
        >
          <MenuButton
            className={isOpen === true ? `open` : `close`}
          ></MenuButton>
        </div>
      </nav>

      <Menu className={isOpen === true ? `open` : `close`}>
        <MenuList className="text-center">
          <Link
            to="projects"
            smooth={true}
            spy={true}
            onClick={() => openMenuHandler(isOpen)}
          >
            <li>Projekty</li>
          </Link>
          <Link
            to="about"
            smooth={true}
            spy={true}
            onClick={() => openMenuHandler(isOpen)}
          >
            <li>O Mnie</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            onClick={() => openMenuHandler(isOpen)}
          >
            <li>Kontakt</li>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Nav;
