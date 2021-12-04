import React, { Component } from "react";
import './Style.css';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'



export default class Home extends Component {
    render() {
            
        return (
            <div className = 'home-Buttons'>
                <h1> home screen </h1>
                <div className = 'signup-home'> 
                    <Link to = "/signup">
                        <button className = 'signup-Butt' type = "button">
                            Let's Get Started!
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}


