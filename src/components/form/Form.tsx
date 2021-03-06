import { Contact } from "./Styles";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { BsLinkedin as LinkedIn } from "react-icons/bs";

import { motion } from "framer-motion";

import { btn } from "./Animations";

const Form = () => {
  return (
    <div className="container mx-auto md:py-10 lg:py-28 py-24 contact overflow-hidden">
      <div className="block">
        <h1 className="mb-5 font-semibold text-3xl" data-aos="fade-left">
          Kontakt
        </h1>
        <div className="lg:flex" data-aos-offset="300">
          <Contact data-aos="fade-left">
            <p>PHONE</p>
            <p>603295469</p>
          </Contact>
          <Contact data-aos="fade-left">
            <p>EMAIL</p>
            <p className="break-all">Sebastian.Smela123@windowslive.com</p>
          </Contact>
          <Contact data-aos="fade-left">
            <p>SOCIALS</p>
            <div className="flex justify-center items-center text-3xl">
              <motion.a
                href="https://www.linkedin.com/in/sebastian-smela-36a776201/"
                target="_blank"
                rel="noreferrer"
                variants={btn}
                whileHover="hover"
              >
                <LinkedIn className="mr-2" />
              </motion.a>
              <motion.a
                href="https://github.com/SSmela99"
                target="_blank"
                rel="noreferrer"
                variants={btn}
                whileHover="hover"
              >
                <Github />
              </motion.a>
            </div>
          </Contact>
        </div>
      </div>
    </div>
  );
};

export default Form;
