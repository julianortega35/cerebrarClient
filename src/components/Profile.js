
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
            console.log("holaaaaaa")
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
        const {user} = this.props
        const {nickname, image, myThoughts} = this.state
        
        console.log("aqui", user)
        return (
            <div>

            <div>
            {myThoughts? (myThoughts.map(thought => {
              return (
                <div key={thought._id}>
    
                  <Link to={`/details/${thought._id}`}>
           
                  <h3>{thought.automaticThought}</h3>
                  </Link>
                  </div>

            )})) : null}
         </div>
            <div>

                <img  className="profile-img" src={image} alt=""/>
                <h3>{nickname}</h3>
                {/* <h3>{myThoughts}</h3> */}



                <Link to="/add">
        <button className="myButton">
          Nuevo pensamiento
        </button>
        </Link>


 
            </div>
            </div>
        )
    }
}

export default Profile;
