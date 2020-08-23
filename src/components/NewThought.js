 
import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";





//Comenzaremos construyendo el componente <AddProject />. Este componente mostrará el formulario y se encargará de su envío. 
// Al manejar el envío del formulario, nos referimos al uso de axios para llegar a una ruta back-end y entregar algunos datos enviados desde el frontend 
//(o simplemente podemos decir que los envió el usuario después de completar el formulario y enviarlo).


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

   handleFormSubmit = event => {
       event.preventDefault();
       console.log(this.state)
        const automaticThought = this.state.automaticThought;
        const intensity = this.state.intensity;
        const alternativeThought = this.state.alternativeThought;
        const task = this.state.task;
        const category = this.state.category;

       axios
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
           <Link to="/thoughtslist">
         <button>Listado de pensamientos</button>
         </Link>
           
           </div>
           
       );
   };   
};

export default NewThought;
