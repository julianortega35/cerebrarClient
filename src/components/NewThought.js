 
import React, { Component } from 'react'
import axios from "axios";

//Comenzaremos construyendo el componente <AddProject />. Este componente mostrará el formulario y se encargará de su envío. 
// Al manejar el envío del formulario, nos referimos al uso de axios para llegar a una ruta back-end y entregar algunos datos enviados desde el frontend 
//(o simplemente podemos decir que los envió el usuario después de completar el formulario y enviarlo).


class NewThought extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            automaticThought: "", 
            intensity: null,  
            alternativeThought: "",
            task: "", 
            category: "", 
    }
}

   handleFormSubmit = event => {
       event.preventDefault();
        const automaticThought = this.state.automaticThought;
        const intensity = this.state.intensity;
        const alternativeThought = this.state.alternativeThought;
        const task = this.state.task;
        const category = this.state.category;

       axios
        .post("http://localhost:4000/thoughts/thoughts/add", { automaticThought, intensity, alternativeThought, task, category })
        .then(()=>{
            this.props.getData();
            this.setState({ 
                automaticThought: "",
                intensity: null, 
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

            <input type="submit" value="Submit"/>
           </form>
           </div>
       );
   };   
};

export default NewThought;
