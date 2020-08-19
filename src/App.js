import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className='container'>

      <AuthProvider>  
        <Navbar />

        <h1>Basic React Authentication</h1>

  
        <Switch>
      <AnonRoute path="/signup" component={Signup} />
      <AnonRoute path="/login" component={Login} />	
      <PrivateRoute path="/private" component={Private} />{/* <Route> to <PrivateRoute>*/}
       </Switch>
        </AuthProvider> 
      </div>
    );
  }
}

export default App;
