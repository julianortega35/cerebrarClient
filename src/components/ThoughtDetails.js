

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
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_API_URI}/thoughts/${params.id}`)
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
        return (
            <div>
              <h2>Detalles de una Pensamiento</h2>
              <h4>Pensamiento automático: {this.state.automaticThought}</h4>
              <p>Intesidad: {this.state.intensity}</p>
              <p> Pensamiento alternativo: {this.state.alternativeThought}</p>
              <p>Tarea compensatoria: {this.state.task}</p>
              <p>Categoría: {this.state.category}</p>
              
              {/* To go back we can use react-router-dom method `history.goBack()` available on `props` object */}
         
         
         <div>{this.renderEditForm()} </div>

         <Link to="/thoughtslist">
         <button>Ir al listado de pensamientos</button>
         </Link>
           

         <Link to="/add">
        <button className="myButton"> Crear un pensaiento</button>
        </Link>
        
         <Link to={`/edit/${params.id}`}>
         <button >
         Editar un pensamiento</button>
        </Link>

       

       

         <button onClick={() => this.deleteThought()}>Eliminar Pensamiento</button>

            </div>
        )
    }
}




export default ThoughtDetails;