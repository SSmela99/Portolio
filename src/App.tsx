import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  About,
  MainPage,
  Nav,
  Projects,
  Form,
  Footer,
} from "./components/Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <MainPage />
          <Projects />
          <About />
          <Form />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
