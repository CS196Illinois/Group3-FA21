import React, { Component } from "react";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Questionnaire from "./Questionnaire";
import UserCards from "./UserCards";


export default class Contact extends Component {
    render() {

        return (
            <div className = 'home-temp-1'> 
                <h1 className = 'profile-title'> Profile </h1>
                <UserCards> </UserCards>
            </div>
        )
    }
}