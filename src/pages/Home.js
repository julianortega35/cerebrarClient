import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Home extends Component {
  render() {
    return (
      <div>
         <Helmet>
          <body className="home" />
        </Helmet> 




     <div className="home-btn">
  
     <img className="home-logo" src="/images/fondo/home2.png" alt=""/>

     <h1 className="home-title">CEREBRAR</h1>

        <p>Información</p>


   
      <br/>
        <br/>
        <Button variant="light" type="submit" value="Crear"  >
      <Link to="/login">Ingresar</Link> 
      </Button>
      <br/>
      <br/>
      

      <Button variant="light" type="submit" value="Crear"  >
      <Link to="/signup">Crear una cuenta</Link> 
      </Button>

      </div>

      
      </div>
    );
  }
}
export default Home;