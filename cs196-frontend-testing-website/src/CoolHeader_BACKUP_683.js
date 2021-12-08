import React from "react";
import { render } from "react-dom";
import './Style.css';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'

class CoolHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, scrolltop: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;

    this.setState({ height });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate(prevProps, prevState) {
    const scrollTop2 = window.pageYOffset;

    if (scrollTop2 !== prevState.scrolltop)
    {
      this.setState({ scrolltop: scrollTop2 });

    }
  }
 
  handleScroll(event) {
    const scrollTop = window.scrollTo;

    this.setState({
      scrolltop: scrollTop
    });
  }
  render() {
    return (
      <div className = "top-preview">
<<<<<<< HEAD
        <header className = "cool-header" ref={divElement => (this.divElement = divElement)}>
=======
        <header className = "cool-header" ref = {divElement => (this.divElement = divElement)}>
>>>>>>> feat/front-end-Sprint5-v3
          <h1> Welcome to Magic </h1>
          <p>
            Cool Marketing Paragraph
          </p>
          <img className = "logo-cool-header" src = "images/magic-icon-logo.png" alt =""/>  
        </header>
        
            <nav
            className = {
            this.state.scrolltop > this.state.height
              ? "main-nav main-nav-scrolled"
              : "main-nav"
            }>   
                
              <div className = "header-links-home">

                <div className = 'logo-home'>
                  <img className = "logo-home-image" src = "/images/magichat.png" alt =""/>  
                </div>

                <a href = "/"> Home </a>
                <a href = "/about"> About</a>
                <a href = "/contact"> Contact </a>
                <a href = "/signup"> Sign Up </a>
                <a href = "/login"> Login </a>
                <a href = "/matches"> Matches </a>
                <a href = "/prequestionnaire"> PreQuestionnaire </a>
                <a href = "/questionnaire"> Questionnaire </a>
                <a href = "/user"> Temp User </a>
              </div>    
            </nav>

        <div className="main-temp">
          <div className = 'home-Buttons'>
                <div className = 'signup-home'> 
                    <Link to = "/signup">
                        <button className = 'signup-Butt' type = "button">
                            Let's Get Started!
                        </button>
                    </Link>
                </div>
            </div> 
        </div>
      </div>
    );
  }
}
export default CoolHeader;