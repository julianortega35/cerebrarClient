

import React, { Component } from 'react';
import axios from 'axios';
import EditThought from "./EditThought";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	




 class ThoughtDetails extends Component {
    constructor (props){
        super(props);
        this.state = {
          automaticThought: "" ,
          intensity: "",
          alternativeThought:"",
          task: "",
          category: "",
          userId: "",
          suggestedAlternativeThought: [],

        };
    }

  

    getSingleThought = () => {
      const {params} = this.props.match;
      axios
      .get(`${process.env.REACT_APP_API_URI}/thoughts/${params.id}`, {withCredentials: true})
  
      .then((responseFromApi) =>{
          const theThought = responseFromApi.data;
          console.log(responseFromApi.data)
          this.setState({
            automaticThought: theThought.automaticThought,
            intensity: theThought.intensity,
            alternativeThought: theThought.alternativeThought,
            task: theThought.task,
            category: theThought.category,
            userId: theThought.userId,
            suggestedAlternativeThought: theThought.suggestedAlternativeThought,
          }
            
            );
       
      })
      .catch((err)=>{
          console.log(err)
      })
  
    
}


componentDidMount(){
  console.log("este es el props", this.props.user._id)
  console.log("este es el current user", this.state.userId)
  this.getSingleThought()

    // this.getSingleThought();
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
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_API_URI}/thoughts/${params.id}`, {withCredentials: true})
      .then(() => {
      })
      .catch((err) => {
        console.log(err);
      });
      return this.props.history.push("/thoughtslist")
     
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
      
    
        return (
            <div>
              <h2>Detalles de una Pensamiento</h2>
            
              <h6>Pensamiento automático: {this.state.automaticThought}</h6>
              <p>Intesidad: {this.state.intensity}</p>
              <p> Pensamiento alternativo: {this.state.alternativeThought}</p>
              <p>Tarea compensatoria: {this.state.task}</p>
              <p>Categoría: {this.state.category}</p>
              {this.state.userId ? (<p>Creado por: {this.state.userId.nickname}</p>) : null}
              
            
            
        {  this.props.user._id === this.state.userId._id ? (
        
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




              {/* <div>
          
          <div>{this.renderEditForm()} </div>

            <Link to={`/edit/${params.id}`}>
            <button >
            Editar un pensamiento</button>
            </Link> 
            
            <div>
            <button onClick={() => this.deleteThought()}>Eliminar Pensamiento</button>
            </div>
            
        </div>  */}

       
    
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