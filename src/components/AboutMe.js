import React, { Component } from 'react';
import AboutMeInfo from './AboutMeInfo';

class AboutMe extends Component {
    
    constructor() {
        super();
        this.state = {
            aboutMeData: 
                [
                    {
                        className: "about-me-background-info",
                        info:"I began working with computers in high school, where I studied HTML, CSS, and photoshop. After studying Accounting for three years at Georgia College, I re-discovered my interest in coding and began working towards an IT career instead."
                    },
                    {
                        className: "about-me-other-info",
                        info:"Outside of coding, I spend my time playing in bands, playing for various rugby clubs, and doing freelance carpentry. I began doing contracting work with my dad when I was a young teenager, and spent the majority the past year working full-time for a cabinet shop in Roswell. At the same time, I was taking 15 hour semesters working on a Computer Info Systems degree (with an App Development concentration) from Georgia State University. I currently have about 5 classes left in my CIS program, which focuses on Java and project management methodologies such as Scrum, XP, and Waterfall."
                    }
                ]
        }
    }

    _slideThroughInfo = () => {
        
    }

    render() {
        
        return (
            <div className="about-me-container container">
                <a name="About"></a>
                <p className="">I’m a Full Stack Web Developer dedicated to building useful, clean applications, and I am finishing a CIS degree at Georgia State University. I am currently enrolled in General Assembly's Web Development Immersive program, and I do a lot of freelance carpentry on the side.</p>
                <div className="about-me-list">
                    {this.state.aboutMeData.map((aboutMeData, i) => {
                        return <AboutMeInfo key={i} aboutMeData={aboutMeData}/>
                    })}
                </div>
            </div>
        );
    }
} 

// Make a for loop
    // This loops through each paragraph in the array
        // setTimeout 5 seconds
            // loads the next paragraph and related content by index
                // REACH: fadeout current
                // REACH: fade in next
        // if this paragraph's button is clicked, 
            // loads paragraph with same index as button
            // setTimeout 10 seconds, go on to the next paragraph in the array
            
            
// Make tiny transition buttons
    // Click this button
        // Current p tag fades out
            // This button's p tag fades in 
                // REACH:
                // Transition time is increased for one transition
                    // Then transition time goes back to normal
// Put transition on a timer


export default AboutMe;