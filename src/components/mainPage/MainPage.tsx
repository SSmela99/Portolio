import { useEffect, useRef } from "react";

import {
  StyledPage,
  StyledBackgroundContainer,
  StyledBackgroundLeft,
  StyledBackgroundRight,
  StyledContent,
  ScrollButton,
} from "./Styles";

import FaceImage from "../../assets/face.jpg";

import { AiOutlineGithub as Github } from "react-icons/ai";
import { BsLinkedin as LinkedIn } from "react-icons/bs";

import { motion, AnimatePresence } from "framer-motion";
import {
  image,
  phone,
  email,
  socials,
  about,
  darkBg,
  projectBtn,
} from "./Animations";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      scrollBtnRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".home",
          start: "0%",
          end: "70%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <AnimatePresence>
      <StyledPage className="w-full home">
        <StyledBackgroundContainer>
          <StyledBackgroundLeft
            variants={darkBg}
            animate="visible"
            exit="exit"
          />
          <StyledBackgroundRight />
        </StyledBackgroundContainer>
        <StyledContent className="container mx-auto flex items-center justify-center lg:flex-row flex-col-reverse">
          <div className="lg:self-end text-md block items-center justify-around lg:mb-0 mb-3 lg:font-semibold font-medium lg:text-left text-center">
            <motion.div variants={phone} initial="hidden" animate="visible">
              <p className="lg:text-light text-dark mb-1 ">PHONE</p>
              <p className="lg:text-light text-dark">603295469</p>
            </motion.div>
            <motion.div
              className="my-4"
              variants={email}
              initial="hidden"
              animate="visible"
            >
              <p className="lg:text-light text-dark mb-1">EMAIL</p>
              <p className="lg:text-light text-dark">
                Sebastian.Smela123
                <br />
                @windowslive.com
              </p>
            </motion.div>
            <motion.div variants={socials} initial="hidden" animate="visible">
              <p className="lg:text-light text-dark mb-1">SOCIALS</p>
              <div className="lg:text-light text-dark flex text-3xl lg:justify-start justify-center">
                <motion.a
                  href="https://github.com/SSmela99"
                  target="_blank"
                  rel="noreferrer"
                  variants={projectBtn}
                  whileHover="hover"
                >
                  <Github className="mr-3" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sebastian-smela-36a776201/"
                  target="_blank"
                  rel="noreferrer"
                  variants={projectBtn}
                  whileHover="hover"
                >
                  <LinkedIn />
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="flex items-center lg:flex-row flex-col">
            <motion.div
              className="lg:h-full lg:mx-10 lg:w-1/2 md:h-64 md:w-64 h-48 w-48 lg:rounded-none rounded-full lg:my-0 my-5"
              variants={image}
              initial="hidden"
              animate="visible"
            >
              <img
                src={FaceImage}
                alt="face"
                className="lg:h-full lg:w-full md:h-64 md:w-64 h-48 w-48 mx-auto lg:rounded-none rounded-full"
              />
            </motion.div>
            <motion.div
              className="flex-col lg:text-left text-center lg:mb-0 mb-10"
              variants={about}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-dark lg:text-7xl text-4xl lg:font-bold font-semibold">
                SEBASTIAN SMELA
              </h1>
              <h3 className="text-blue lg:text-3xl text-xl lg:font-bold font-medium lg:my-3 my-1">
                WEB DEVELOPER
              </h3>
              <Link to="projects" smooth={true} spy={true}>
                <motion.button
                  className="bg-blue text-light px-20 py-5 lg:font-bold font-medium lg:text-lg text-md mt-5"
                  variants={projectBtn}
                  whileHover="hover"
                >
                  Projekty
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </StyledContent>
        <Link to="home" smooth={true} spy={true}>
          <ScrollButton ref={scrollBtnRef}>
            <span></span>
          </ScrollButton>
        </Link>
      </StyledPage>
    </AnimatePresence>
  );
};

export default MainPage;
