import React, { Component } from "react";
// import "./bioHeadline.css";

class bioHeadline extends Component {
    constructor(props) {
        super(props);
    
        this.state = {location: ''};

        this.handleChangeLocation = this.handleChangeLocation.bind(this); 
        this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    }
    handleChangeLocation(event) {
        this.setState({location: event.target.location});
    }
    handleSubmitLocation(event) {
        alert('You have changed your location to: ' + this.state.location);
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'changeLocation'>
                <form>
                    <label>
                        location:
                        <input type = "text" location = {this.state.location} onChange = {this.handleChangeLocation} />
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );
    }
}