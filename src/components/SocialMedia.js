import React, { Component } from 'react';
import fbook from '../Images/Facebook_icon.png';
import ghub from '../Images/github_icon.png';
import insta from '../Images/instagram_icon.png';
import linked from '../Images/linkedin_icon.png';

class SocialMedia extends Component {
    render () {
        return (
            <div className="social-media-icons-container">
                <a href="http://www.facebook.com/vivalajoey" target="_blank"><img className="icon facebook-icon" src={fbook} /></a>
                <a href="http://www.facebook.com/vivalajoey" target="_blank"><img className="icon github-icon" src={ghub} /></a>
                <a href="http://www.facebook.com/vivalajoey" target="_blank"><img className="icon instagram-icon" src={insta} /></a>
                <a href="http://www.facebook.com/vivalajoey" target="_blank"><img className="icon linkedin-icon" src={linked} /></a>
            </div>
        );
    }
}

export default SocialMedia;