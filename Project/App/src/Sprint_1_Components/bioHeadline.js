import React, { Component } from "react";
// import "./bioHeadline.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {bioheadline: ''};
       
        this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
        this.handleSubmitHeadline = this.handleSubmitHeadline.bind(this);
    }

    handleChangeHeadline(event) {
        this.setState({bioheadline: event.target.bioheadline});
    }
    handleSubmitHeadline(event) {
        alert('You have changed your bio to: ' + this.state.bioheadline);
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'changeBio'>
                <form>
                    <label>
                        Bio:
                        <input type = "text" bioheadline = {this.state.bioheadline} onChange = {this.handleChangeHeadline} />
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}