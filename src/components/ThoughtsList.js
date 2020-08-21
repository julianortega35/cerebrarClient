import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";



class ThoughtsList extends Component {
    constructor() {
        super();
        this.state = {listOfThoughts: [] };
    }

    getAllThoughts = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/thoughts`, {withCredentials: true}).then(responseFromApi =>{
            console.log(responseFromApi.data)
        this.setState({
                listOfThoughts: responseFromApi.data
            });
        });
    };

//utilizamos el método del ciclo de vida de componenteDidMount() para obtener los datos de la API 
componentDidMount(){
    this.getAllThoughts();
}


render() {
    return (
      <div>
        <div>
          {this.state.listOfThoughts.map(thoughts => {
            return (
              <div key={thoughts._id}>
                <Link to={`/details/${thoughts._id}`}>
                  <h3>{thoughts.automaticThought}</h3>
                </Link>

               
              </div>
            );
          })}
        
          {/* <AddProject getData={() => this.getAllProjects()} /> <== !!! */}
        </div>
      
        <Link to="/add">
        <button> Agregar un nuevo pensamiento</button>
        </Link>
      </div>
    );
  }
}

export default ThoughtsList;



  




