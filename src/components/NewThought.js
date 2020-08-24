 
import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'






class NewThought extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            automaticThought: "", 
            intensity: "",  
            alternativeThought: "",
            task: "", 
            category: "", 
    }
}

 handleFormSubmit = async event =>  {
       event.preventDefault();
       console.log(this.state)
        const automaticThought = this.state.automaticThought;
        const intensity = this.state.intensity;
        const alternativeThought = this.state.alternativeThought;
        const task = this.state.task;
        const category = this.state.category;

      await axios
        .post(`${process.env.REACT_APP_API_URI}/thoughts/add`,  { automaticThought, intensity, alternativeThought, task, category }, {withCredentials: true})
        .then(()=>{
            // this.props.getTheThought();
            this.setState({ 
                automaticThought: "",
                intensity: "", 
                alternativeThought: "", 
                task: "",
                category: "", 
            });
        })
        .catch(error => console.log(error));
        return this.props.history.push("/thoughtslist")
   }; 

   
   handleChange = event => {
       const {name, value} = event.target;
       this.setState({[name]: value});
   };

   render(){
       return(
           <div>
           <form onSubmit={this.handleFormSubmit}>
           <h1>Agregar un nuevo pensamiento</h1>
{/* 
           <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Pensamiento Automático</Form.Label>
    <Form.Control type="Pensamiento Automático" placeholder="Ingrese el pensamiento automático negativo" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Crear pensamiento
  </Button>
</Form> 
 */}








           <label>Pensamiento Automático:</label>
           <textarea 
           name="automaticThought"
           value={this.state.automaticThought}
            onChange={e => this.handleChange(e)}
            /> 


            <label>Intensidad:</label>
           <input
            type="number"
            name="intensity"
            placeholder="0-10"
            value={this.state.intensity}
            onChange={e => this.handleChange(e)}
           />

           <label>Pensamiento Alternativo:</label>
           <textarea 
           name="alternativeThought"
           value={this.state.alternativeThought}
            onChange={e => this.handleChange(e)}
            />


            <label>Tarea Compensatoria:</label>
           <textarea 
           name="task"
           value={this.state.task}
            onChange={e => this.handleChange(e)}
            />
            

            <label>Categoria:</label>
           <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={e => this.handleChange(e)}
           />
            
            <input type="submit" value="Crear"/>

           
           
           </form>
      
           </div>
           
       );
   };   
};

export default NewThought;
