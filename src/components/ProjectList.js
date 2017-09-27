import React, { Component } from 'react';
import Project from './Project';
import projectData from '../projectData';

class ProjectList extends Component {

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

    _rotateLeft = () => {
        const newdeg = this.state.currdeg - 60;
        console.log(newdeg);
        this.setState({currdeg: newdeg});
    }

    _rotateRight = () => {
        const newdeg = this.state.currdeg + 60;
        console.log(newdeg);
        this.setState({currdeg: newdeg});
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
            <div className="project-list-container container">
                <a name="Projects"></a>
                <h1 className="project-list-container-title">My Apps:</h1>
                <div className="c-container">
                    <div className="my-carousel">
                        {projectData.map((project) => {
                            rotateDegrees = rotateDegrees + 60;
                            let currentStyle = {transform: "rotateY("+rotateDegrees+"deg) translateZ(218px)"}
                            return <div className="item" style={currentStyle}> 
                                            <h3>{project.name}</h3>
                                    </div>
                        })}
                    </div>
                    
                </div>
                <button className="next" onClick={this._rotateLeft}>Next</button>
                <button className="prev" onClick={this._rotateRight}>Prev</button>

            </div>
        );
    }
}

export default ProjectList;