import React, { Component } from "react";
// import "./bioHeadline.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {hobbies: ''};

        this.handleChangeHobbies = this.handleChangeHobbies.bind(this);
        this.handleSubmitHobbies = this.handleSubmitHobbies.bind(this);
    }

    // use text-area 
    handleChangeHobbies(event) {
        this.setState({hobbies: event.target.hobbies});
    }
    handleSubmitHobbies(event) {
        alert('You have your hobbies to: ' + this.state.hobbies);
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'changeHobbies'>
                <form onSubmit = {this.handleSubmitHobbies}>
                    <label>
                        Hobbies:
                        <textarea hobbies = {this.state.hobbies} onChange = {this.handleChangeHobbies} />
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}