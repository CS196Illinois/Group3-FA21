import React, { Component } from "react";
import App from "./App";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Questionnaire from "./Questionnaire";


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items:[],
            dataIsLoaded: false
        };
    }

    componentDidMount() {
        fetch("my-json-server.typicode.com/user/repo/posts/1")
    }



    render() {

        return (
            <h1> Home </h1>
    
        )
    }
}

