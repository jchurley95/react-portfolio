import React, { Component } from 'react';
import projectData from '../projectData';
import ghub from '../Images/github_icon.png';

class Project extends Component {

    render() {
        return (
                <div className="project-item">
                    <a href={this.props.projectData.deployedlink}> <img className="project-image" src={this.props.projectData.image}/> </a>
                    <a href={this.props.projectData.githublink} className="project-item-github"> <img className="icon" src={ghub} /> </a>
                    <div className="project-item-title"><h1> {this.props.projectData.name} </h1></div>
                    <div className="project-description"> {this.props.projectData.description} </div>
                </div>
        );
    }
}

export default Project;