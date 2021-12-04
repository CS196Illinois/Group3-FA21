import React, { Component } from "react";
import './Style.css';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

export default class Header extends Component {

    render() {

        return (
            <div className = "headerLinks">
                <img className = "logo" src = "/images/magichat.png" alt =""/>     

                <ul className = "headerLinkList">
                    <li> <Link to="/"> Home </Link> </li>                        
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
<<<<<<< HEAD
                    <li> <Link to="/profile"> Profile </Link> </li>
=======
                    <li> <Link to="/signup"> SignUp </Link> </li>
                    <li> <Link to="/login"> Login </Link> </li>
                    <li> <Link to="/matches"> Matches </Link> </li>
                    <li> <Link to="/prequestionnaire"> Pre-Questionnaire </Link> </li>
>>>>>>> feat/front-end-Sprint5-v1
                    <li> <Link to="/questionnaire"> Questionnaire </Link> </li>
                    <li> <Link to="/user"> Temporary User Link</Link></li>
                </ul>
            </div>    
        )
    }
} 