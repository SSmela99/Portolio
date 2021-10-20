import {
  StyledPage,
  StyledBackgroundContainer,
  StyledBackgroundLeft,
  StyledBackgroundRight,
  StyledContent,
} from "./Styles";

import FaceImage from "../../assets/face.jpg";

const MainPage = () => {
  return (
    <StyledPage className="w-full">
      <StyledBackgroundContainer>
        <StyledBackgroundLeft />
        <StyledBackgroundRight />
      </StyledBackgroundContainer>
      <StyledContent className="container mx-auto">
        <div className="socials">
          <div>
            <p className="text-light">PHONE</p>
            <p className="text-light">603295469</p>
          </div>
          <div>
            <p className="text-light">EMAIL</p>
            <p className="text-light">Sebastian.Smela123@windowslive.com</p>
          </div>
          <div>
            <p className="text-light">SOCIALS</p>
            <div className="text-light">elo</div>
          </div>
        </div>
        <div className="h-full">
          <img src={FaceImage} alt="face" className="h-full" />
        </div>
        <div className="about">
          <h1 className="text-dark">SEBASTIAN SMELA</h1>
          <h3 className="text-dark">WEB DEVELOPER</h3>
          <p className="text-dark">
            Nazywam się Sebastian Smela, zainteresowany technologiami frontendu
            - programista.
          </p>
        </div>
      </StyledContent>
    </StyledPage>
  );
};

export default MainPage;
