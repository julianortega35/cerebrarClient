import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";



class ThoughtsList extends Component {
    constructor() {
        super();
        this.state = {listOfThoughts: [] };
    }

    getAllThoughts = () => {
        axios.get(`http://localhost:4000/thoughts/thoughts`).then(responseFromApi =>{
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
                <Link to={`/thoughts/${thoughts._id}`}>
                  <h3>{thoughts.automaticThoughts}</h3>
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



  




