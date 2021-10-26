import { AiFillGithub as Github } from "react-icons/ai";
import bootstrap from "../../assets/technologies/bootstrap.png";
import css from "../../assets/technologies/css.png";
import framer from "../../assets/technologies/framer.png";
import html from "../../assets/technologies/html.png";
import javascript from "../../assets/technologies/javascript.png";
import mongodb from "../../assets/technologies/mongodb.png";
import node from "../../assets/technologies/node.png";
import react from "../../assets/technologies/react.png";
import styledComponents from "../../assets/technologies/styled.png";
import tailwind from "../../assets/technologies/tailwind.jpg";
import typescript from "../../assets/technologies/typescript.png";
import materialUi from "../../assets/technologies/material-ui.svg";

import { Schools, Technologies } from "./Styles";

const About = () => {
  return (
    <div className="container mx-auto about pt-16 overflow-hidden">
      <div className="lg:pb-20 md:pt-10 pb-16 pt-6">
        <h1
          className="lg:font-bold font-medium md:text-5xl text-3xl lg:text-left text-center mb-5"
          data-aos="zoom-in"
          data-aos-offset="150"
        >
          O mnie
        </h1>
        <div className="font-light text-lg text-dark leading-8">
          <p data-aos="zoom-in" data-aos-offset="300">
            Student III roku Informatyki na Społecznej Akademii Nauk. Interesuje
            się technologiami frontendowymi, wiążę z tym swoją przyszłość i chcę
            rozwijać się w tym kierunku. Jestem samoukiem, uczę się
            programowania od ponad półtora roku. Myśle, że moje umiejętności
            oraz wiedza są wystarczające by znaleźć moją pierwszą prace jako
            programista. Web development jest dla mnie ciekawy i cały czas
            poznaje nowe technologie czy frameworki pozwalające budować to coraz
            ciekawsze aplikacje. Biblioteka React jest czymś z czym chciałbym
            pracować na codzień.
          </p>
          <div
            className="text-center mt-10"
            data-aos="zoom-in"
            data-aos-offset="300"
          >
            <p>
              Jeśli zainteresowałem Cię, poniżej zostawiam link do mojego
              Github'a
            </p>
            <a
              href="https://github.com/SSmela99"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 border-dark py-3 px-6 mt-5 hover:bg-blue hover:text-light transition">
                <Github className="inline text-xl mr-3" />
                <span>Zapraszam</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex block w-full h-full">
        <div className="lg:mb-0 mb-16">
          <h1
            className="lg:font-bold font-medium md:text-5xl text-3xl lg:text-left text-center lg:mb-5 mb-10"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            Wykształcenie
          </h1>
          <div className="lg:block flex justify-around flex-col md:flex-row lg:flex-col md:items-stretch items-center">
            <Schools
              className="border-2 border-gray p-5 md:mb-0 mb-10"
              data-aos="fade-right"
              data-aos-offset="220"
            >
              <h3 className="text-xl font-semibold">UCZELNIA</h3>
              <p className="mt-2 text-lg">Społeczna Akademia Nauk</p>
              <p className="text-gray">
                Specjalizacja - Techniki Programowania
              </p>
              <p className="mt-2">Okres: 2019 - 2023</p>
            </Schools>
            <Schools
              className="border-2 border-gray p-5 lg:mt-10 "
              data-aos="fade-right"
              data-aos-offset="220"
            >
              <h3 className="text-xl font-semibold">TECHNIKUM</h3>
              <p className="mt-2 text-lg">Technikum nr 19 w Łodzi</p>
              <p className="text-gray">Kierunek - Technik informatyk</p>
              <p className="mt-2">Okres: 2015 - 2019</p>
            </Schools>
          </div>
        </div>
        <div className="lg:ml-6 w-full">
          <h1
            className="lg:font-bold font-medium md:text-5xl text-3xl text-center mb-5"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            Stack Technologiczny
          </h1>
          <Technologies>
            <img
              src={javascript}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-offset="220"
            />
            <img
              src={typescript}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-offset="220"
            />
            <img
              src={react}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="300"
              data-aos-offset="220"
            />
            <img
              src={html}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-offset="220"
            />
            <img
              src={css}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="500"
              data-aos-offset="220"
            />
            <img
              src={node}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-offset="220"
            />
            <img
              src={mongodb}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-offset="220"
            />
            <img
              src={tailwind}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="300"
              data-aos-offset="220"
            />
            <img
              src={bootstrap}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-offset="220"
            />
            <img
              src={styledComponents}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="500"
              data-aos-offset="220"
            />
            <img
              src={framer}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-offset="100"
            />
            <img
              src={materialUi}
              alt="logo"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-offset="100"
            />
          </Technologies>
        </div>
      </div>
    </div>
  );
};

export default About;
