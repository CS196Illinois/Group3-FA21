import React, { Component } from "react";
import App from "./App";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";    
import Questionnaire from "./Questionnaire";
import './Style.css';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'




export default class Header extends Component {
    render() {

        return (
            <div className = "headerLinks">
                <img className = "logo" src = "/images/magic-icon-logo.png" alt =""/>     

                <ul className = "headerLinkList">
                    <li> <Link to="/"> Home </Link> </li>                        
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                    <li> <Link to="/questionnaire"> Questionnaire </Link> </li>
                </ul>
            </div>    
        )
    }
}