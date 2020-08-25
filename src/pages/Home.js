import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div>
         <Helmet>
          <body className="home" />
        </Helmet> 
        <button className="navbar-button">
          <Link to="/login">Ingresar</Link>
        </button>
        <button className="navbar-button">
          <Link to="/signup">Crear una cuenta</Link>
        </button>
      </div>
    );
  }
}
export default Home;