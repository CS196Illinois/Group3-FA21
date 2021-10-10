import React, { Component } from "react";
// import "./personalityScore.css";

class scores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: [
                // Openness to experience
                id: 1, 
                score: ""
                description: ""
                
                // Conscientiousness
                id: 2,
                score:
                description:

                // Extroversion
                id: E,
                score:
                description:

                // Agreeableness
                id: 4,
                score:
                description:

                // Neuroticism
                id: 5
                score:
                description:

            ]
        }

        this.handleChangeScore = this.handleChangeScore.bind(this);
        this.handleSubmitScore = this.handleSubmitScore.bind(this);
    }
    // 
}