import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import projectData from './projectData';
import { Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
        projects: [],
        currdeg: 0
    }
  }

  componentWillMount() {
      const projects = projectData;
      this.setState({
          projects: projectData
      })
  }

  _rotateLeft = (e) => {
    e.preventDefault()
    const newState = {...this.state}
    const newdeg = this.state.currdeg - 60;
    newState.currdeg = newdeg
    console.log(newdeg);
    this.setState(newState);
  }

  _rotateRight = () => {
    const newState = {...this.state}
    const newdeg = this.state.currdeg + 60;
    newState.currdeg = newdeg
    console.log(newdeg);
    this.setState(newState);
  }


  render() {
    let carouselStyle = {
      WebkitTransform: "rotateY("+this.state.currdeg+"deg)",
      MozTransform: "rotateY("+this.state.currdeg+"deg)",
      OTransform: "rotateY("+this.state.currdeg+"deg)",
      transform: "rotateY("+this.state.currdeg+"deg)"
    }
    let rotateDegrees = -60;
    return (
      <div className="app-body">
        <Navbar />
        <Splash />
        <AboutMe />
        <div className="project-list-container container">
                <a name="Projects"></a>
                <h1 className="project-list-container-title">My Apps:</h1>
                <div className="c-container">
                    <div className="my-carousel" style={carouselStyle}>
                        {projectData.map((project) => {
                            rotateDegrees = rotateDegrees + 60;
                            let currentStyle = {transform: "rotateY("+rotateDegrees+"deg) translateZ(218px)"}
                            return <div className="item" style={currentStyle}> 
                                            <a href={project.deployedlink} className="project-link">
                                              <h3>{project.name}</h3>
                                              </a>
                                              <h5>{project.description}</h5>
                                    </div>
                        })}
                    </div>
                    
                </div>
                <button className="next" onClick={this._rotateLeft}>Next</button>
                <button className="prev" onClick={this._rotateRight}>Prev</button>
            </div>
        <Contact />
      </div>
    );
  }
}




export default App;
