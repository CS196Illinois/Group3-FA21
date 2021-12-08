import React, { Component } from "react";
import Home from './Home';
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Questionnaire from "./Questionnaire";
import Matches from "./Matches";
//import ProgressBar from "ProgressBar";
import {
    BrowserRouter as Router,
    Route,
    Link, 
    NavLink
} from 'react-router-dom'
import SignUp from "./SignUp";
import Login from "./Login";
import UserCards from "./UserCards";
import PreQuestionnaire from "./PreQuestionnaire";

class App extends Component {
    render() {

        return (
            <Router>
            
                <div>
                    <Header/>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                        <Route path = "/matches" component = {Matches} />
                        <Route path = "/prequestionnaire" component = {PreQuestionnaire} />
                        <Route path = "/questionnaire" component = {Questionnaire} />
                        <Route path = "/signup" component = {SignUp} />
                        <Route path = "/login" component = {Login} />
                        <Route path = "/user" component = {UserCards} />
                </div> 

            </Router>    
        
        )

    }
}

export default App;
