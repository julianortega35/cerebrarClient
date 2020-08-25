 
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
           <h1>Crear un nuevo pensamiento</h1>

           <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Pensamiento Automático" name="automaticThought"
                value={this.state.automaticThought}
                onChange={e => this.handleChange(e)} />
                <br />

                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom   type="number"
                    value={this.state.intensity} name="intensity" onChange={this.handleChange}
                >
                    <option value="0">Intensidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </Form.Control>
               <br/>
                <br/>
                <Form.Control size="lg" type="text" placeholder="Pensamientos Alternativo"   name="alternativeThought"
                value={this.state.alternativeThought}
                 onChange={e => this.handleChange(e)} />

                <br/>
                <Form.Control size="lg" type="text" placeholder="Tarea Compensatoria"   name="task"
                 value={this.state.task}
                onChange={e => this.handleChange(e)} />
                

                <br/>

                <Form.Control as="select"  value={this.state.category} name="category" onChange={this.handleChange}>
                <option value="Todas las categorías">Todas las categorías</option>
                <option value="Dinero">Dinero</option>
                <option value="Familia">Familia</option>
                <option value="Futuro">Futuro</option>
                <option value="Pareja">Pareja</option>
                <option value="Salud">Salud</option>
                <option value="Trabajo">Trabajo</option>
                <option value="Otra">Otra</option>
                </Form.Control>
                <br/>
                <Button className="myButton"  input type="submit" value="Crear">
                  Crear
                </Button>
               
                </Form.Group>

           </form>
      
           </div>
           
       );
   };   
};

export default NewThought;
