import React, { Component } from "react";
import Ghibli from './ghibli.jpg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(object => {
        console.log(object);
        this.setState({ films: object });
      });
  }
  render() {
    return (
      <div className="card">
        <img className="card-img-top h-5 w-5" src={Ghibli} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text.</p>
          <a href="" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    );
  }
}
export default App;
