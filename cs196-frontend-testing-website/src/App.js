import React, { Component } from "react";
import Home from './Home';
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Questionnaire from "./Questionnaire";
import Footer from "./Footer";
import Profile from "./Profile";
//import ProgressBar from "ProgressBar";
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'

class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Header/>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                        <Route path = "/profile" component = {Profile} />
                        <Route path = "/questionnaire" component = {Questionnaire} />

                </div> 

                <Footer/>

            </Router>    
            
            
        )

    }
}

export default App;
