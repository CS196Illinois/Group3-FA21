import React, { Component } from "react";
// import "./bioHeadline.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {pronouns: ''};
      
        this.handleChangePronouns = this.handleChangePronouns.bind(this);
        this.handleSubmitPronouns = this.handleSubmitPronouns.bind(this);
    }
    // use select tags
    handleChangePronouns(event) {
        this.setState({pronouns: event.target.pronouns})
    } 
    handleSubmitPronouns(event) {
        alert('You have changed your pronouns to: ' + this.state.pronouns);
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'changePronouns'>
                <form>
                    <label>
                        Gender:
                        <select value = {this.state.pronouns} onChange = {this.handleChangePronouns}> 
                            <option pronouns = "male"> Male </option>
                            <option pronouns = "female"> Female </option>
                            <option pronouns = "non-Binary"> Non-Binary </option>
                            <option pronouns = "other"> Other </option>
                        </select>
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}