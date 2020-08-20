// components/tasks/TaskDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import EditThought from "./EditThought";
import { Link } from "react-router-dom";



 class ThoughtDetails extends Component {
    constructor (props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getSingleThought();
    }

    getSingleThought = () => {
        const {params} = this.props.match;
    axios
    .get(`http://localhost:4000/thoughts/thoughts/${params.taskId}`)

    .then((responseFromApi) =>{
        const theThought = responseFromApi.data;
        this.setState(theThought);
    })
    .catch((err)=>{
        console.log(err)
    })
}

renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleTask();
    } else {
      //{...props} => so we can have 'this.props.history' in Edit.js
      return (
        <EditThought
          theThought={this.state}
          getTheThought={this.getSingleThought}
          {...this.props}
        />
      );
    }
  };

  //DELETE THOUGHT

  deleteThought = () => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:4000/thoughts/thoughts/${params.taskId}`)
      .then(() => {
        this.props.history.push("/thoughts/thoughts");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

    render() {
        return (
            <div>
              <h3>Pensamiento</h3>
        <h2>{this.state.automaticThought}</h2>
        <p>{this.state.intensity}</p>
        <p>{this.state.alternativeThought}</p>
        <p>{this.state.task}</p>
        <p>{this.state.category}</p>
         {/* To go back we can use react-router-dom method `history.goBack()` available on `props` object */}
         
         
         <div>{this.renderEditForm()} </div>

         <Link to={"/thoughts"}>Volver al listado de pensamientos</Link>
         <button onClick={() => this.deleteThought()}>Eliminar Pensamiento</button>
            </div>
        )
    }
}




export default ThoughtDetails;