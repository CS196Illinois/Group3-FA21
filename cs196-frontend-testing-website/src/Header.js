import React, { Component } from "react";
import './Style.css';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'
import 'react-sticky-header/styles.css';

export default class Header extends Component {

    render() {

        return (
            <div className = "headerLinks">

                <nav className = "main-nav main-nav-scrolled">
                    <img className = "logo" src = "/images/magichat.png" alt =""/>     

                    <div className = 'header-links'>
                        <a href = "/"> Home </a>
                        <a href = "/about"> About</a>
                        <a href = "/contact"> Contact </a>
                        <a href = "/signup"> Sign Up </a>
                        <a href = "/login"> Login </a>
                        <a href = "/matches"> Matches </a>
                        <a href = "/prequestionnaire"> PreQuestionnaire </a>
                        <a href = "/questionnaire"> Questionnaire </a>
                        <a href = "/user"> Temp User </a>
                    </div>
                </nav>
            </div>    
        )
    }
} 

