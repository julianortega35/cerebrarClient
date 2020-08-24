

import React, { Component } from 'react';
import axios from 'axios';
import EditThought from "./EditThought";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	




 class ThoughtDetails extends Component {
    constructor (props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
      const {params} = this.props.match;
      axios
      .get(`${process.env.REACT_APP_API_URI}/thoughts/${params.id}`, {withCredentials: true})
  
      .then((responseFromApi) =>{
          const theThought = responseFromApi.data;
          console.log(responseFromApi.data)
          this.setState(theThought);
      })
      .catch((err)=>{
          console.log(err)
      })
        // this.getSingleThought();
    }

    getSingleThought = () => {
     
}

renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleThought();
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
    console.log ("holaaaaaa")
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_API_URI}/thoughts/${params.id}`, {withCredentials: true})
      .then(() => {
        this.props.history.push("/thoughts");
      })
      .catch((err) => {
        console.log(err);
      });
  };


    // deleteThought = (thoughtId) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_API_URI}/thoughts/${thoughtId}`)
  //     .then(() => {
  //       this.getAllThoughts();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  

    render() {
      const {params} = this.props.match;
      console.log(this.state)
        return (
            <div>
              <h2>Detalles de una Pensamiento</h2>
              <h6>Pensamiento automático: {this.state.automaticThought}</h6>
              <p>Intesidad: {this.state.intensity}</p>
              <p> Pensamiento alternativo: {this.state.alternativeThought}</p>
              <p>Tarea compensatoria: {this.state.task}</p>
              <p>Categoría: {this.state.category}</p>
              {this.state.userId ? (<p>Apodo: {this.state.userId.nickname}</p>) : null}
            
              
              {/* To go back we can use react-router-dom method `history.goBack()` available on `props` object */}
         
         
       
          {this.props.user === this.state.userId? (
        <div>
          
          <div>{this.renderEditForm()} </div>

            <Link to={`/edit/${params.id}`}>
            <button >
            Editar un pensamiento</button>
            </Link> 
            
            <div>
            <button onClick={() => this.deleteThought()}>Eliminar Pensamiento</button>
            </div>
            
        </div> ) : null }






        <Link to="/add">
        <button className="myButton"> Nuevo pensamiento</button>
        </Link>
        


         <Link to="/thoughtslist">
         <button> Listado de pensamientos</button>
         </Link>
           

        
         
       

       

         

            </div>
        )
    }
}




export default withAuth(ThoughtDetails);