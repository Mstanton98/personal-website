import React, { Component } from 'react';
import Contact from './Contact.jsx';
import Info from './Info.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidToggle: 'true'
    }
  }

  render() {
    return (
      this.state.vidToggle ?
      <video id="backgroundVid" src="https://youtu.be/bMQkZGfYtVE" autoplay="true" loop="true" ></video>
    :
      <div>
        <Info />
        <Contact />
      </div>
    );
  }
}
