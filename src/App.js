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
import ThoughtsList from ".components/ThoughtsList"
import NewThought from ".components/NewThought"
import EditThought from ".components/EditThought"
import ThoughtDetails from ".components/ThoughtDetails"

class App extends Component {
  render() {
    return (
      <div className='container'>

      <AuthProvider>  
        <Navbar />

        <h1>Cerebrar</h1>

  
        <Switch>
        <Route exact path="/thoughts" component={ThoughtsList} />
        <Route exact path="/thoughts/thoughts/add" component={NewThought} />
        <Route exact path="/thoughts/thoughts/edit" component={EditThought} />
        <Route exact path="/thoughts/thoughts" component={ThoughtDetails} />
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
