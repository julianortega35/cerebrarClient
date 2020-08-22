
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	
    return (
      <nav className="navbar">
            <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {
          isLoggedin ? 
          (<>
            <p className="navbar-user">{user.nickname}</p>	
            <button className="navbar-button" onClick={logout}>Cerrar sesión</button>	
          </>) 
         : 
          (<>
            <Link to="/login">
              <button className="navbar-button">Ingresar</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Crear cuenta</button>
            </Link>
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(Navbar);