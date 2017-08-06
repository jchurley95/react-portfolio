import React, { Component } from 'react';
import Project from './Project';
import projectData from '../projectData';

class ProjectList extends Component {

    render() {
        return (
            <div className="project-list-container container">
                <a name="Projects"></a>
                <h1 className="project-list-container-title">My Apps:</h1>
                <div className="project-list">
                    {projectData.map((projectData, i) => {
                        return <Project key={i} projectData={projectData}/>
                    })}
                </div>
            </div>
        );
    }
}

export default ProjectList;