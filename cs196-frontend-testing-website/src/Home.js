import React, { Component } from "react";
import App from "./App";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Questionnaire from "./Questionnaire";
import './Style.css';



export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items:[],
            dataIsLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://my-json-server.typicode.com/cleeclee123/JSONDataTemp/questionData")

                .then((res) => res.json())
                .then((json) => {
                    
                    this.setState ({
                        items: json,
                        DataisLoaded: true
                });
        })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (! DataisLoaded) 
        return (
            <div>
                <h1> Please wait.... </h1> 
            </div> 
        )
        return (
            <div className = "temp-API">
                <h1> Fetched Questionnaire Data: </h1>  {
                    items.map ((items) => ( 
                    <ol key = { items.id } >
                        Question_ID: { items.question_id }, 
                        Question_Text: { items.question_text },      
                    </ol>
                    ))
                }
            </div>
        );
    }
}


