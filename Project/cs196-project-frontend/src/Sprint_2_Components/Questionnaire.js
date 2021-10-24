import React, { Component } from 'react';
import {QuestionData} from './QuestionData';
import PropTypes from 'prop-types';
// import 'questionnaire.css';

export class Questionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userChoice: null,
            currentIndex: 0, 
            options: [],
            questionnaireEnd: false,
            score: 0,
            disable: true
        }
    }

    startQuestionnaire = () => {
        const {currentIndex} = this.state;
        this.setState(() => {
            return {
                question: QuestionnaireData[currentIndex].question,
                options: QuestionaireData[currentIndex].options,
                userChoice: QuestionaireData[currentIndex].options
            }
        })
    }

    // Algorithm Implemation

    handleNextQuestion = () => {
        const {userChoiceFun, choiceSDA, choiceSWDA, choiceNEU, choiceSWA, choiceSA, 
            scoreO, scoreC, scoreE, scoreA, scoreN} = this.state

        /*    
        if (userChoiceFun === choiceSDA)

        if (userChoiceFun === choiceSWDA)

        if (userChoiceFun === choiceNEU)

        if (userChoiceFun === choiceSWA)

        if (userChoiceFun === choiceSA)
        
        */

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userChoiceFun: null
        })
    }

    componentDidMount() {
        this.loadQuestionnaire();
    }
    componentDidUpdate(prevProps, prevState) {
        const{currentIndex} = this.state;
        if (this.state.currentIndex != prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: QuestionnaireData[currentIndex].question,
                    options: QuestionaireData[currentIndex].options,
                    userChoice: QuestionaireData[currentIndex].options,
                }
            });
        }
    }

    render() {
        const{questions, options, userChoice, currentIndex, questionnaireEnd} = this.state
        return (
            <div>
                <h2 class = 'questionType'>
                 {questions}   
                </h2>
                <span>
                    {'Statement ${currentIndex + 1} of ${QuestionData.length}'}
                </span>

            </div>
        )
    

        {currentIndex < QuestionData.length - 1 &&
        <button disabled = {this.state.disabled} onClick = {this.nextQuestionHandler}>
            Next Question
        </button>
        }
        
        {currentIndex === QuestionData.length - 1 &&
        <button onClick = {this.state.onClick} >
            Finish
        </button> 
        }

    }

}

export default Questionnaire