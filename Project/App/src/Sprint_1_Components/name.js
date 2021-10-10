import React, { Component } from "react";
// import "./bioHeadline.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {name: ''};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.name});
    }
    handleSubmitName(event) {
        alert('You have changed your name to: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'changeName'>
                <form>
                    <label>
                        Name:
                        <input type = "text" name = {this.state.name} onChange = {this.handleChangeName} />
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}