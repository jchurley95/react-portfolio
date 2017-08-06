import React, { Component } from 'react';

class Navbar extends Component {
    render () {
        return (
            <div className="navbar-container">
                    <a href="#About">About Me</a>
                    <a href="#Projects">My Apps</a>
                    <a href="#Contact">Contact Me</a>

            </div>
        );
    }
}

export default Navbar;