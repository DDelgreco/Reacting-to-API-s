import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import SingleFilm from "./SingleFilm";
import SinglePerson from "./SinglePerson";
import Welcome from "./Welcome";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route exact path="/films/:id" component={SingleFilm} />
            <Route exact path="/people/:id" component={SinglePerson} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default App;
