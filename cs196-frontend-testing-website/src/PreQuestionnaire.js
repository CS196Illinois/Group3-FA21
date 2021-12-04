import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'



export default class PreQuestionnaire extends Component {
    render() {
        return (
            <div className = 'home-Buttons'>
                <h1> pre-questionnaire screen </h1>
                <div className = 'signup-home'> 
                    <Link to = "/questionnaire">
                        <button className = 'signup-Butt' type = "button">
                            Go to Questionnaire
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
