
import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";



class Profile extends Component {
    constructor() {
        super();
        this.state = {
        
        }

    }

        componentDidMount(){
       
            axios
            .get(`${process.env.REACT_APP_API_URI}/profile`, {withCredentials: true})
            .then((responseFromApi) =>{
                console.log("holaaaaaa then")
                const profile = responseFromApi.data;
                console.log(responseFromApi.data)
                this.setState(profile)
            })
            .catch((err)=>{
                console.log(err)
            });
          
          };




    render() {
        console.log(this.state)
    
        const {nickname, image, myThoughts} = this.state
        
        
        return (
            <div>
       

            <div>
                 <div className="profile-style">
                <h3>Perfil de {nickname}</h3>
                </div>

                <div className="profile-style">
                <img  className="profile-img" src={image} alt=""/>
                </div>

                <div className="profile-style">
               <h4> Mis Pensamientos</h4>
               </div>


            <div >
            {myThoughts? (myThoughts.map(thought => {
              return (
                <div key={thought._id}>
                    <div className="listThoughts-positions thoughts-position">
                  <Link className="links-style" to={`/details/${thought._id}`}>
           
                  <p>{thought.automaticThought}</p>
                  </Link>
                  </div>
                  </div>

            )})) : null}
         </div>


        <div className="addButtonStyle">         
       <Link to="/add">
        <button className="myButton">
          Nuevo pensamiento
        </button>
        </Link>

        </div>


            


 
            </div>
            </div>
        )
    }
}

export default Profile;
