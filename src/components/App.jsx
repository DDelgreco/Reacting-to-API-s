import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Films from "./Films";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      // <div>
      //   <h1></h1>
      //   <Header />
      //   <Buttons />
      //   <Films />
      // </div>
      <Router>
        <Fragment>
          <div className="container">
            <Header />
          </div>
          <Link className="btn btn-primary w-25" to="/films">
            Show Films
          </Link>
          <Link className="btn btn-primary w-25 m-5 " to="/people">
            Show People
          </Link>
          <Switch>
            <Route path="/films" component={Films} />
            {/* <Route path='/people' component={People} /> */}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default App;
