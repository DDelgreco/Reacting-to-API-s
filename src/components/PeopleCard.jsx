import React, { Component } from "react";
import {Link} from "react-router-dom";
import PeoplePic from "./people.jpg";

export default class PeopleCard extends Component {
  render() {
    let singlePerson = this.props.peopleList.map(person => {
      let style = {
        width: 300,
        margin: 10,
        border: 'solid',
        borderColor: 'purple',
        borderWeight: '10px',
      };
      return (
        <div className="card mx-auto" style={style} key={person.id}>
        <img className="card-img-top w-100" src={PeoplePic} alt="" />
          <ul className="list-group">
            <li className="list-group-item font-weight-bold justify-content-center">{person.name}</li>
            <li className="list-group-item justify-content-center">{person.gender}</li>
            <li className="list-group-item justify-content-center">{person.age}</li>
          </ul>
          <Link className="btn btn-primary m-2" to={`/people/${person.id}`}>
            More Details
          </Link>
        </div>
      );
    });
    return <div className='row p-1'>{singlePerson}</div>;
  }
}
