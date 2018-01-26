import React, { Component } from "react";
import FilmCard from "./FilmCard";

export default class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        console.log("Initial API response", response);
        return response.json();
      })
      .then(data => {
        console.log("Parsed JSON data", data);
        this.setState({ films: data });
        console.log("Here is our updated state with data", this.state.films);
      });
  }
  render() {
    return (
      <div className="container">
        <FilmCard filmList={this.state.films} />
      </div>
    );
  }
}
