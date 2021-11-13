import React, { Component } from "react";
import { QuestionData } from "./QuestionData";
import App from "./App";
import Home from "./Home";
import Contact from "./Contact";
import Header from "./Header";
import About from "./About";
import ProgressBar from "./ProgressBar";
import './Style.css';

export default class Questionnaire extends Component {

    
    constructor(props) {
        super(props)

        this.state= {
            userAnswer: null,
            currentIndex: 0,
            answerChoices: [],
            quizEnd: false,
            score: 0,
            scorePG: 0,
            disabled: true,
            
        }
    }

    startQuiz = () => {
        const {currentIndex} = this.state;
        this.setState(() => {
            return {
                question: QuestionData[currentIndex].question,
                answerChoices: QuestionData[currentIndex].answerChoices,
                answer: QuestionData[currentIndex].answer
            }
        })
    }
    nextQuestionHandler = () => {
        const {userAnswer, answer, score} = this.state

        if (userAnswer === answer) {
            this.setState ({
                score: score + 1
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            //userAnswer: null
        })
    }
    updateProgressBarHandler = () => {
        const {score, answer, userAnswer} = this.state 
        
        if (userAnswer === answer && userAnswer != null && answer != null) {
            this.setState ({
                score: score * 5
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
        })
    }



    componentDidMount() {
        this.startQuiz();
    }
    
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const{currentIndex} = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: QuestionData[currentIndex].question,
                    answerChoices: QuestionData[currentIndex].answerChoices,
                    answer: QuestionData[currentIndex].answer
                }
            })
        }
    }
    finishHandler = () => {
        if (this.state.currentIndex === QuestionData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }



    render() {
        const {question, answerChoices, currentIndex, userAnswer, quizEnd, Parentdiv, Childdiv, progresstext, progress, showScore, score, questions, currentQuestion, nextQuestionHandler} = this.state      

        if (quizEnd) {
            return (
                <div className = 'questionnaire-end'>
                    <h1 className = 'questionnaire-end1'>
                        You are Hot! 
                    </h1>
                    
                </div>
            )
        }
        
        return (
            
            <div className = 'questionnaire-main'>

                <div className = 'progressBar'>
                    <ProgressBar bgcolor="red" progress = {`${currentIndex * 5}`}  height = {20}/>
                </div>
                 
                <div className = 'questionCount'> 
                    <span> {`Question ${currentIndex + 1} of ${QuestionData.length}`} </span>
                </div>

                <div className = 'questionSection'>
                    <div className = 'statement'>
                        <h1> {question} </h1>
                    </div>

                    <div class = 'question-indy'>
                        {
                        answerChoices.map(option => (                  
                            <p key = {answerChoices.id} className = {`choices ${userAnswer === option ? "selected" : null}`}
                            onClick= {() => this.checkAnswer(option)}>
                                {option}                                
                            </p>
                            )    
                        )}
                    </div>    
                </div>
                
                <div className = 'next'>
                    {currentIndex < QuestionData.length - 1 && 
                    <button className = 'button-next' disabled = {this.state.disabled} onClick = {this.nextQuestionHandler}>
                        Next Question
                    </button>}
                </div>    


                <div className = 'submit'>        
                    {currentIndex === QuestionData.length - 1 &&
                    <button onClick = {this.finishHandler} disabled = {this.state.disabled}>
                        Submit
                    </button>}
                </div>

            </div>
        )
    }
}
