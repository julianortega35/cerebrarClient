

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	
import Button from 'react-bootstrap/Button'




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
  
  this.getSingleThought()

    // this.getSingleThought();
}



  //DELETE THOUGHT

  deleteThought = () => {
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_API_URI}/thoughts/${params.id}`, {withCredentials: true})
      .then(() => {
        this.props.history.push("/thoughtslist")
      })
      .catch((err) => {
        console.log(err);
      });

     
  };


  


    render() {
      const {params} = this.props.match;
      
    
        return (
            <div >

              <h2 className="h2-style">Detalle de pensamiento</h2>
             <div className="form-style">
           
            
              <h6>Pensamiento automático: {this.state.automaticThought}</h6>
              <p>Intesidad: {this.state.intensity}</p>
              <p> Pensamiento alternativo: {this.state.alternativeThought}</p>
              <p>Tarea compensatoria: {this.state.task}</p>
              <p>Categoría: {this.state.category}</p>
              {this.state.userId ? (<p>Creado por: {this.state.userId.nickname}</p>) : null}
              
            
              </div>
        {  this.props.user._id === this.state.userId._id ? (
          <div>

            <div className="butttomsStyle">
            <Link to={`/edit/${params.id}`}>
            <Button className="myButton"  input type="submit" value="Editar">
           Modificar
           </Button>
            </Link> 
            </div>
            
            <div className="butttomsStyle">
            <Button className="myButton"  input type="submit" value="Eliminar" onClick={() => this.deleteThought()}>
             Eliminar
           </Button>
            </div>
            
        </div> ) : null } 

          <div className="butttomsStyle">
        <Link to="/add">
        <button className="myButton"> Nuevo pensamiento</button>
        </Link>
        </div>

 
            </div>
        )
    }
}




export default withAuth(ThoughtDetails);