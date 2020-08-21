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
                {/* <ul>
                  {project.tasks.map((task,index) =>{
                    return <li key={index}>{task.title}</li>                  })}
                </ul> */}
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            );
          })}
        </div>
        <div>
          {/* <AddProject getData={() => this.getAllProjects()} /> <== !!! */}
        </div>
      </div>
    );
  }
}

export default ThoughtsList;



  




