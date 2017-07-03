import React, { Component } from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnterGithub = this.onMouseEnterGithub.bind(this);
    this.onMouseEnterLink = this.onMouseEnterLink.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
    this.state = {
      displayText: ''
    }
  }

  onMouseEnterGithub() {
    this.setState({displayText: "My Github"});
  }

  onMouseEnterLink() {
    this.setState({displayText: "My linkedin"});
  }

  onMouseExit() {
    this.setState({displayText: ''});
  }

  render() {
    return (
      <header className="animated fadeInLeftBig">
        <a
          onMouseEnter={this.onMouseEnterGithub}
          onMouseLeave={this.onMouseExit}
          href="https://github.com/Mstanton98"
        >
          <img className="headerLogo" src="../app/media/github.png"></img>
        </a>
        <a
          onMouseEnter={this.onMouseEnterLink}
          onMouseLeave={this.onMouseExit}
          href="https://www.linkedin.com/in/michael-stanton/"
        >
          <img className="headerLogo" src="../app/media/link.png"></img>
        </a>
        <h4 className="animated fadeInUpBig">My Github</h4>
      </header>
    );
  }
}
