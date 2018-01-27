import React, { Component } from "react";
import PeoplePic from "./people.jpg";

export default class SinglePerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ person: data });
        console.log(this.state.person);
      });
  }
  render() {
    let person = this.state.person;
    let style = {
      margin: 10,
      border: "solid",
      borderColor: "purple",
      borderWeight: "10px"
    };
    return (
      <div className="card mx-auto w-75" style={style} key={person.id}>
        <img className="card-img-top w-100" src={PeoplePic} alt="" />
        <ul className="list-group">
          <li className="list-group-item font-weight-bold justify-content-center">
            {person.name}
          </li>
          <li className="list-group-item justify-content-center">
            {person.gender}
          </li>
          <li className="list-group-item justify-content-center">
            {person.age}
          </li>
        </ul>
      </div>
    );
  }
}
