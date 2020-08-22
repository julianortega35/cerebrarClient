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
import ThoughtsList from "./components/ThoughtsList"
import NewThought from "./components/NewThought"
import EditThought from "./components/EditThought"
import ThoughtDetails from "./components/ThoughtDetails"
import Profile from "./components/Profile"


class App extends Component {
  render() {
    return (
      <div className='container'>

      <AuthProvider>  
        <Navbar />
      

  

  
        <Switch>
        <AnonRoute path="/signup" component={Signup} />
      <AnonRoute path="/login" component={Login} />	
        <PrivateRoute exact path="/thoughtslist" component={ThoughtsList} />
        <PrivateRoute exact path="/add" component={NewThought} />
        <PrivateRoute exact path="/edit/:id" component={EditThought} />
        <PrivateRoute exact path="/details/:id" component={ThoughtDetails} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/private" component={Private} />{/* <Route> to <PrivateRoute>*/}
        </Switch>
        </AuthProvider> 
      </div>
    );
  }
}

export default App;
