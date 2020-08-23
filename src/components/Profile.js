
import React, { Component } from "react";
import axios from "axios";


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
        const {user} = this.props
        console.log("aqui", user)
        return (

       
            <div>

                <img  className="profile-img" src={this.state.image} alt=""/>
                <h3>{this.state.nickname}</h3>
                <h3>{this.state.myThougts}</h3>

 
            </div>
        )
    }
}

export default Profile;
