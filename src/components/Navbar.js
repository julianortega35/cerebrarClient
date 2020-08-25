
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	
    return (

      isLoggedin ?
      
      (<nav className="navbar">


      
       
            <Link to="/profile">
            Perfil
            </Link>
       
            <Link to="/thoughtslist">
             Pensamientos
            </Link>

            <Link to="/info">
             Info
            </Link>
          

             {/* <p className="navbar-user"> {user.nickname}</p>	  */}
            <img className="logout-img" src="/images/logout4.png" alt="" onClick={logout}/>
         
        
      </nav>) : null
    );
  }
}

export default withAuth(Navbar);