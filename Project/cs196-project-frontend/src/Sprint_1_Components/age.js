import React, { Component } from "react";
// import "./age.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {age: ''};
       
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleSubmitAge = this.handleSubmitAge.bind(this);
    }
    // use select tags
    handleChangeAge(event) {
        this.setState({age: event.target.age});
    }
    handleSubmitAge(event) {
        alert('You have changed your age to: ' + this.state.age);
        event.preventDefault();
    }
    render() {
        return (
            <div class = 'changeAge'>
                <form>
                    <input type = "age" min = "1" max = "100"/>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}