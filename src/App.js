import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import NoMatch from "./pages/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route
            exact
            path={[
              process.env.PUBLIC_URL + "/",
              process.env.PUBLIC_URL + "/home",
            ]}
          >
            <Home />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/about"}>
            <About />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/contact"}>
            <Contact />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/portfolio"}>
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <div className="push"></div>
      </div>
      <Footer className="footer" />
    </Router>
  );
}

export default App;
