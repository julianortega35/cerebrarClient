import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	


class Private extends Component {
  render() {
    return (
      <div>
         <h1>Welcome {this.props.user.nickname}</h1>
      </div>
    );
  }
}

export default withAuth(Private);
