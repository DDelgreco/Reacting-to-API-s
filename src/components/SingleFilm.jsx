import React, { Component } from "react";
import Ghibli from "./ghibli.jpg";

export default class SingleFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
  }
  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ film: data });
        console.log(this.state.film);
      });
  }
  render() {
    let film = this.state.film;
    let style = {
      padding: 10,
      margin: 10,
      border: "solid",
      borderColor: "orange",
      borderWidth: "10px"
    };

    return (
      <div className="card mx-auto h-75 w-75" style={style} key={film.id}>
        <img className="card-img-top w-100" src={Ghibli} alt="" />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{film.title}</h5>
          <p className="card-text">{film.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{film.director}</li>
          <li className="list-group-item">{film.producer}</li>
          <li className="list-group-item">{film.release_date}</li>
        </ul>
        <div />
      </div>
    );
  }
}
