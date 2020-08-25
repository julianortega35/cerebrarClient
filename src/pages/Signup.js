import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { withAuth } from "../lib/AuthProvider";	
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Signup extends Component {
  state = { nickname: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { nickname, password } = this.state;
    console.log('Signup -> form submit', { nickname, password });

    this.props.signup({ nickname, password });	
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nickname, password } = this.state;
    return (
    


      <div  className = "signup-style">

      <Helmet>
      <body className="home" />
    </Helmet> 

    <img className="home-logo" src="/images/fondo/home2.png" alt=""/>

    <h1 className="home-title">CEREBRAR</h1>

      <h3>Crear una cuenta</h3>

      <form onSubmit={this.handleFormSubmit}>

      <Form.Group controlId="formBasicEmail">

      <Form.Control  type="text" placeholder="Apodo" name="nickname" value={nickname} onChange={this.handleChange}  />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">

      <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={this.handleChange}  />
      </Form.Group>

      <Button variant="light" type="submit" value="Crear"  >
      Crear
      </Button>

</form>
 
      </div>
    );
  }
}

export default withAuth(Signup);
