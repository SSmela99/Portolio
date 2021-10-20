import { MainPage, Nav } from "./components/Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
