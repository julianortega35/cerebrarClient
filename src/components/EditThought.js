
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditThought extends Component {
    constructor (props){
        super(props);
        this.state = {

           automaticThought: "",
           intensity: "",
           alternativeThought: "",
           task: "",
           category: "",
           
        };
    }

    componentDidMount(){
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
            });
       
      })
      .catch((err)=>{
          console.log(err)
      })

    }



    handleFormSubmit = event => {

      const automaticThought = this.state.automaticThought;
      const intensity = this.state.intensity;
      const alternativeThought = this.state.alternativeThought;
      const task = this.state.task;
      const category = this.state.category;
      
    
        event.preventDefault();
        const {params} = this.props.match;
        axios
        .put(`${process.env.REACT_APP_API_URI}/thoughts/edit/${params.id}`, {
          automaticThought, 
          intensity,
          alternativeThought, 
          task, 
          category
          }, {withCredentials: true})
        .then(()=>{
          
          return this.props.history.push(`/details/${params.id}`)
        })
        .catch((error) => console.log (error));
    };





handleChange = event => {
  console.log(event.target)
  const {name, value} = event.target;
  this.setState({
    [name]:value
  })
}
  


render() {
    return (
      <div>
        <hr />
        <h3>Editar un pensamiento</h3>
        <form onSubmit={this.handleFormSubmit}>
        
        <label>Pensamiento Automático:</label>
           <textarea 
           name="automaticThought"
            value={this.state.automaticThought}
            onChange={this.handleChange}
            />


            <label>Intensidad:</label>
           <input
            type="number"
            name="intensity"
            value={this.state.intensity}
            onChange={this.handleChange}
           />

           <label>Pensamiento Alternativo:</label>
           <textarea 
           name="alternativeThought"
            value={this.state.alternativeThought}
            onChange={this.handleChange}
            />


            <label>Tarea Compensatoria:</label>
           <textarea 
           name="task"
            value={this.state.task}
            onChange={this.handleChange}
            />
                  
       <label>Categoria:</label>

        <select name="category" onChange={this.handleChange}>
          <option value="Todas">Todas las categorías</option>
          <option value="Dinero">Dinero</option>
          <option value="Familia">Familia</option>
          <option value="Futuro">Futuro</option>
          <option value="Pareja">Pareja</option>
          <option value="Salud">Salud</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Otra">Otra</option>

        </select>


          <input type="submit" value="Editar" />
        </form>

 <Link to="/thoughtslist">
         <button>Volver al listado de pensamientos</button>
         </Link>
           
      </div>
    );
  }
};

export default EditThought;
