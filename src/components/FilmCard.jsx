import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ghibli from "./ghibli.jpg";

export default class FilmCard extends Component {
  render() {
    let singleFilm = this.props.filmList.map(film => {
      let style = {
        padding: 10,
        margin: 10,
        width: 450,
        height: 600,
        border: "solid",
        borderColor: "lightblue",
        borderWidth: "10px"
      };

      return (
        <div
          className="card mx-auto justify-content-center"
          style={style}
          key={film.id}
        >
          <img className="card-img-top w-100" src={Ghibli} alt="" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{film.title}</h5>
            <p className="card-text">{`${film.description.substring(
              0,
              150
            )}...`}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{film.director}</li>
            <li className="list-group-item">{film.producer}</li>
            <li className="list-group-item">{film.release_date}</li>
          </ul>
          <Link className="btn btn-primary" to={`/films/${film.id}`}>
            More Details
          </Link>
        </div>
      );
    });
    return <div className="row p-1">{singleFilm}</div>;
  }
}
