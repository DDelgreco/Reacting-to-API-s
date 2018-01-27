import React, { Component } from "react";
import PeopleCard from "./PeopleCard";
import Header from "./Header";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(response => {
        console.log("Initial API response", response);
        return response.json();
      })
      .then(data => {
        console.log("Parsed JSON data", data);
        this.setState({ people: data });
        console.log("Here is our updated state with data", this.state.people);
      });
  }
  render() {
    return (
      <div className="container">
        <Header />
        <PeopleCard peopleList={this.state.people} />
      </div>
    );
  }
}
