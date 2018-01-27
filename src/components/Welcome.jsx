import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

const Welcome = () => {
  return (
    <div className="container">
      <div>
        <img className="w-100" src={Logo} alt="" />
        <Link className="w-100" to="/" src={Logo} />
      </div>
      <div className="row justify-content-center">
        <Link className="btn btn-primary btn-lg m-5" to="/films">
          Show Films
        </Link>
        <Link className="btn btn-primary btn-lg m-5" to="/people">
          Show People
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
