import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'



export default class PreQuestionnaire extends Component {
    render() {
        return (
            <div className = 'preQuestionnaire-page'>
                <div className = 'home-Buttons'>
                    <div className = 'signup-home'>
                        <h1> pre-questionnaire screen </h1> 
                        <Link to = "/questionnaire">
                            <button className = 'signup-Butt' type = "button">
                                Go to Questionnaire
                            </button>
                        </Link>
                    </div>
                </div>
            </div>    
        )
    }
}
