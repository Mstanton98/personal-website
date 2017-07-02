import React, { Component } from 'react';
import Contact from './Contact.jsx';
import Info from './Info.jsx';

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

  render() {
    return (
      this.state.vidToggle === 'true' ?
      <div>
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
          <div>
            <Info />
            <Contact />
          </div>
        );
      }
    }
