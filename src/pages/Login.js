import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	


class Login extends Component {
  state = { nickname: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { nickname, password } = this.state;
    console.log('Login -> form submit', { nickname, password });

    this.props.login({ nickname, password });	
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nickname, password } = this.state;

    return (



      <div>
        <h1>Ingresar</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Apodo:</label>
          <input type="text" name="nickname" value={nickname} onChange={this.handleChange}/>

          <label>Clave:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Ingresar" />
        </form>
      </div>
    );
  }
}


export default withAuth(Login);	