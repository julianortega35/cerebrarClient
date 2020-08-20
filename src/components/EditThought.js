
import React, { Component } from "react";
import axios from "axios";

class EditThought extends Component {
    constructor (props){
        super(props);
        this.state = {

           automaticThought: this.props.state.automaticThought,
           intensity: this.props.state.intensity,
           alternativeThought: this.props.state.alternativeThought,
           tasks: this.props.state.tasks,
           category: this.props.state.category,
           
        };
    }

    handleFormSubmit = event => {

      const automaticThought = this.state.automaticThought;
      const intensity = this.state.intensity;
      const alternativeThought = this.state.alternativeThought;
      const task = this.state.tasks;
      const category = this.state.category;
      
    
        event.preventDefault();

        axios
        .put(`http://localhost:4000/api/thoughts/edit/${this.props.theThought._id}`, {
          automaticThought, 
          intensity,
          alternativeThought, 
          task, 
          category
          })
        .then(()=>{
            this.props.getTheThoguht();
              // after submitting the form, redirect to '/projects'
              this.props.history.push("/thoughts");
        })
        .catch((error) => console.log (error));
    };


    handleChangeautomaticThought = event => {
      this.setState({
        automaticThought: event.target.value
      });
  };


  handleChangeintensity = event => {
    this.setState({
      intensity: event.target.value
    });
  };

  handleChangealternativeThought = event => {
    this.setState({
      alternativeThought: event.target.value
    });
};

  handleChangetask = event => {
    this.setState({
      task: event.target.value
    });
  };

  handleChangecategory = event => {
    this.setState({
      category: event.target.value
    });
  };



render() {
    return (
      <div>
        <hr />
        <h3>Editar un pensamiento</h3>
        <form onSubmit={this.handleFormSubmit}>
        
        <label>Pensamiento Automático:</label>
           <textarea 
           name="Pensamiento Automático"
            value={this.state.automaticThought}
            onChange={e => this.handleChange(e)}
            />


            <label>Intensidad:</label>
           <input
            type="number"
            name="intensidad"
            value={this.state.intensity}
            onChange={e => this.handleChange(e)}
           />

           <label>Pensamiento Alternativo:</label>
           <textarea 
           name="Pensamiento Alternativo"
            value={this.state.alternativeThought}
            onChange={e => this.handleChange(e)}
            />


            <label>Tarea Compensatoria:</label>
           <textarea 
           name="Tarea compensatoria"
            value={this.state.task}
            onChange={e => this.handleChange(e)}
            />
          
            <label>Categoria:</label>
           <input
            type="text"
            name="categoria"
            value={this.state.category}
            onChange={e => this.handleChange(e)}
           />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default EditThought;
