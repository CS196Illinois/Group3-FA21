import React, { Component } from "react";
// import "./personalityScore.css";

class scores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: [
                {
                    // Openness to Experience
                    id: 1,
                    name: "Openness to Experience",
                    description: "Openness to experience is one of the domains which are used to describe human personality in the Five Factor Model. Openness involves six facets, or dimensions: active imagination, aesthetic sensitivity, attentiveness to inner feelings, preference for variety, intellectual curiosity, and challenging authority. Wikipedia",
                    score: "1 (PH)", 
                    closestMatch: "Jack (PH)",
                },
                {
                    // Conscientiousness
                    id: C,
                    name: "Conscientiousness",
                    description: "Conscientiousness is the personality trait of being careful, or diligent. Conscientiousness implies a desire to do a task well, and to take obligations to others seriously. Conscientious people tend to be efficient and organized as opposed to easy-going and disorderly. Wikipedia                    ",
                    score: "1 (PH)", 
                    closestMatch: "Jack (PH)",
                },
                {
                    // Extroverison
                    id: E,
                    name: "Extroversion",
                    description: "The traits of extraversion and introversion are a central dimension in some human personality theories. The terms introversion and extraversion were introduced into psychology by Carl Jung, although both the popular understanding and current psychological usage vary. Wikipedia                    ",
                    score: "1 (PH)", 
                    closestMatch: "Jack (PH)",
                },    
                {
                    // Agreeableness
                    id: A,
                    name: "Agreeableness",
                    description: "Agreeableness is a personality trait manifesting itself in individual behavioral characteristics that are perceived as kind, sympathetic, cooperative, warm, and considerate. Wikipedia                    ",
                    score: "1 (PH)", 
                    closestMatch: "Jack (PH)",
                },
                {
                    // Neuroticism
                    id: N,
                    name: "Neuroticism",
                    description: "In the study of psychology, neuroticism has been considered a fundamental personality trait. For example, in the Big Five approach to personality trait theory, individuals with high scores for neuroticism ... Wikipedia                    ",
                    score: "1 (PH)", 
                    closestMatch: "Jack (PH)",
                }
            ]
        };
    }
    
    handleOnClick
        
        /*
        this.handleChangeScore = this.handleChangeScore.bind(this);
        this.handleSubmitScore = this.handleSubmitScore.bind(this);
        */

}