import React, { Component } from 'react';
import Contact from './Contact';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <div> <Contact /> </div>;
  }
}
