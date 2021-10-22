import { useState, useCallback, useRef, useEffect } from "react";
import { StyledLi, Line, Menu, MenuButton, MenuList } from "./Styles";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMedium } from "../../utils/mediaQueries";

import {
  square,
  line,
  name,
  firstListEl,
  secondListEl,
  thirthListEl,
} from "./Animations";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoRef = useRef<any>(null);

  const isMobile = useIsMedium();

  console.log(isMobile);

  const openMenuHandler = useCallback((state) => {
    state === false ? setIsOpen(true) : setIsOpen(false);
    console.log(state);
  }, []);

  useEffect((): any => {
    // if (isMobile === false) {
    //   return gsap.fromTo(
    //     logoRef.current,
    //     { color: "#fff" },
    //     {
    //       color: `#212121`,
    //       clearProps: true,
    //       scrollTrigger: {
    //         trigger: ".home",
    //         start: "95%",
    //         end: "bottom",
    //         scrub: 1,
    //       },
    //     }
    //   );
    // } else {
    //   return gsap.fromTo(
    //     logoRef.current,
    //     { color: "#fff" },
    //     { color: "#212121" }
    //   );
    // }
  }, [isMobile]);

  return (
    <div className="w-full fixed h-24 z-10 bg-light">
      <nav className="container mx-auto h-full flex justify-between items-center transition-all bg-light">
        <div className="flex items-center">
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
        <ul className="lg:flex hidden items-center z-20 bg-light">
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
          <li>Projekty</li>
          <li>O Mnie</li>
          <li>Kontakt</li>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Nav;
