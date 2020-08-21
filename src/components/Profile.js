
import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
    constructor() {
        super();
        this.state = {

            // nickname: "",
            // password: "",
            // description: "",
            // image: "",
            // myThoughts: "",
            // favourites:"",
        }
    }

        componentDidMount(){
            axios
            .get(`${process.env.REACT_APP_API_URI}/profile`, {withCredentials: true})
            .then((responseFromApi) =>{
                const profile = responseFromApi.data.user;
                console.log(responseFromApi.data)
                this.setState(profile)
            })
            .catch((err)=>{
                console.log(err)
            });
          
          };




    render() {
        console.log(this.state)
        return (
            <div>

                <h3>Información del usuario</h3>
                <div>{this.state.nickname}</div>
                 <div>{this.state.description}</div>
                
            </div>
        )
    }
}

export default Profile;
