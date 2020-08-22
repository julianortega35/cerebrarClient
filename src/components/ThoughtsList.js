import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
// import SearchBar from "./components/SearchBar"



class ThoughtsList extends Component {
    constructor() {
        super();
        this.state = {
          listOfThoughts: [],
          thoughtsToShow: [], 
        
        };


    }

    getAllThoughts = () => {
        axios.get(`${process.env.REACT_APP_API_URI}/thoughts`, {withCredentials: true}).then(responseFromApi =>{
            console.log(responseFromApi.data)
        this.setState({listOfThoughts: responseFromApi.data, thoughtsToShow: responseFromApi.data  });
        });
    };

  //creo la función de filtrado que va a conectarse con la searchbar

  filterThougts = (searchString) => {
    const lowerSearchString = searchString.toLowerCase();
    //filtrar los pensamientos,
    // el array y de los pensamientos - this.state.listOfThoughts
    const thoughtsCopy = [...this.state.listOfThoughts];
    const filteredThoughts = thoughtsCopy.filter((thoughtObj) =>{
      const automaticThought = thoughtObj.automaticThought.toLowerCase();

      if (automaticThought.includes(lowerSearchString)){
        return true
      }
      else{
        return false;
      }
    })


    this.setState({thoughtsToShow: filteredThoughts })
    //pasar este método al componente SearchBar como un prop


  }


//utilizamos el método del ciclo de vida de componenteDidMount() para obtener los datos de la API 
componentDidMount(){
    this.getAllThoughts();
}


render() {
    return (
      <div>
         <SearchBar filterThougts={this.filterThougts} />
        <div>
          {this.state.thoughtsToShow.map(thoughts => {
            return (
              <div key={thoughts._id}>
                <Link to={`/details/${thoughts._id}`}>
                <img className="brain-2-size" src="/images/brain-2.png" alt="logo"/>
                <h3>{thoughts.automaticThought}</h3>
                </Link>
                
               
              </div>
            );
          })}
        
          {/* <AddProject getData={() => this.getAllProjects()} /> <== !!! */}
        </div>
      
        <Link to="/add">
        <button></button>

       
        
        </Link>
      </div>
    );
  }
}

export default ThoughtsList;



  




