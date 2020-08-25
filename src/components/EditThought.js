
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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

        <h1>Agregar un nuevo pensamiento</h1>
        <form onSubmit={this.handleFormSubmit}>
       

       
        
        

           <Form.Group>
           <div className="form-style">
                <Form.Label>Pensamiento Automático</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Pensamiento Automático" name="automaticThought"
                value={this.state.automaticThought}
                onChange={e => this.handleChange(e)} />
                <br /> 

                <Form.Label>Intensidad</Form.Label>
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
                <Form.Label>Pensamientos Alternativo</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Pensamientos Alternativo"   name="alternativeThought"
                value={this.state.alternativeThought}
                 onChange={e => this.handleChange(e)} />

                <br/>
                <Form.Label>Tarea Compensatoria</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Tarea Compensatoria"   name="task"
                 value={this.state.task}
                onChange={e => this.handleChange(e)} />
                

                <br/>
                <Form.Label>Categoría</Form.Label>   
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
          
                </div>
                <Button className="myButton" input type="submit" value="Editar">
                  Editar
                </Button>
                </Form.Group>
              
           </form>
        
      </div>
      
    );
  }
};

export default EditThought;
