import React, { Component } from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="header twelve columns">Michael Stanton</h1>
        </div>
      </div>
    );
  }
}
