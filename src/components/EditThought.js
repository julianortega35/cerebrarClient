
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
        // this.getSingleThought();
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
            // this.props.getTheThought();
              // after submitting the form, redirect to '/projects'
              this.props.history.push("/thoughtslist");
        })
        .catch((error) => console.log (error));
    };



   

    getSingleThought = () => {
     
}



  //   handleChangeautomaticThought = event => {
  //     this.setState({
  //       automaticThought: event.target.value
  //     });
  // };


//   handleChangeintensity = event => {
//     this.setState({
//       intensity: event.target.value
//     });
//   };

//   handleChangealternativeThought = event => {
//     this.setState({
//       alternativeThought: event.target.value
//     });
// };

//   handleChangetask = event => {
//     this.setState({
//       task: event.target.value
//     });
//   };

//   handleChangecategory = event => {
//     this.setState({
//       category: event.target.value
//     });
//   };


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
           <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
           />
          <input type="submit" value="Submit" />
        </form>


        <Link to={"/thoughtslist"}>Volver al listado de pensamientos</Link>
      </div>
    );
  }
};

export default EditThought;
