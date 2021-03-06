import React, { Component } from 'react';
import Contact from './Contact.jsx';
import Info from './Info.jsx';
import Header from './Header.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      vidToggle: 'true'
    };
  }

  onClickHandler() {
    this.setState({ vidToggle: 'false' });
  }

  backToSplash() {
    this.setState({ vidToggle: 'true' });
  }

  render() {
    return (
      this.state.vidToggle === 'true' ?
      <div className="animated fadeIn">
        <div
          onClick={this.onClickHandler}
          id="labelContainer"
          >
            <h1 className="titleLabel">Michael Stanton</h1>
            <p id="indicator">Portfolio & Contact Info >>> </p>
            <h1 className="titleLabel">Web Developer</h1>
          </div>
          <div id="splashContainer">
            <video
              id="backgroundVid"
              src="../app/media/film.mp4"
              autoPlay="true"
              loop="true"
              >
              </video>
            </div>
          </div>
          :
          <div className="infoContainer">
            <Header />
            <Info
              backToSplash={this.backToSplash}
           />
          </div>
        );
      }
    }
