import React, { Component } from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnterGithub = this.onMouseEnterGithub.bind(this);
    this.onMouseEnterLink = this.onMouseEnterLink.bind(this);
    this.onMouseEnterLogo = this.onMouseEnterLogo.bind(this);
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

  onMouseEnterLogo() {
    this.setState({displayText: "My radical logo!(drawn by graphic designer and good friend Jonus Parrish)"})
  }

  onMouseExit() {
    this.setState({displayText: ''});
  }

  render() {
    return (
      <header className="animated bounceInUp">
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
        <p className="headerLabel">Michael Stanton</p>
        <img
          id="logo"
          onMouseEnter={this.onMouseEnterLogo}
          onMouseLeave={this.onMouseExit}
          src="../app/media/cup.png"
        >
        </img>
        <p className="headerLabel">Seattle, WA</p>
        <h5 className="animated fadeInUpBig">{this.state.displayText}</h5>
      </header>
    );
  }
}
