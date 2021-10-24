import React, { Component } from "react";
// import "./bioHeadline.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {desire: ''};

        this.handleChangeDesire = this.handleChangeDesire.bind(this);
        this.handleSubmitDesire = this.handleSubmitDesire.bind(this);
    }
    // use text-area
    handleChangeDesire(event) {
        this.setState({desire: event.target.desire});
    }
    handleSubmitDesire(event) {
        alert('You have changed what your lookin for');
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'changeDesire'>
                <form onSubmit = {this.handleSubmitDesire}>
                    <label>
                        What I'm Looking For:
                        <textarea desire = {this.state.desire} onChange = {this.handleChangeDesire} />
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}