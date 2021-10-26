import { Input, Textarea, Contact } from "./Styles";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { BsLinkedin as LinkedIn } from "react-icons/bs";

import { motion } from "framer-motion";

import { btn } from "./Animations";

const Form = () => {
  return (
    <div className="container mx-auto md:py-10 lg:py-28 py-24 contact overflow-hidden">
      <div className="lg:flex block">
        <form
          className="bg-dark text-light p-10 lg:mr-5 lg:mb-0 mb-10"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          <h1 className="font-semibold text-3xl mb-10">
            Skontaktuj się ze mną!
          </h1>
          <Input placeholder="Twoje imię" />
          <Input placeholder="Adres Email" />
          <Textarea placeholder="Wiadomość"></Textarea>
          <button className="bg-light text-dark px-5 py-3 font-medium text-lg w-full mt-10">
            Wyślij
          </button>
        </form>
        <div className="lg:ml-5">
          <h1
            className="mb-5 font-semibold text-3xl"
            data-aos="fade-left"
            data-aos-offset="300"
          >
            Kontakt
          </h1>
          <Contact data-aos="fade-left" data-aos-offset="300">
            <p>PHONE</p>
            <p>603295469</p>
          </Contact>
          <Contact data-aos="fade-left" data-aos-offset="350">
            <p>EMAIL</p>
            <p className="break-all">Sebastian.Smela123@windowslive.com</p>
          </Contact>
          <Contact data-aos="fade-left" data-aos-offset="400">
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
