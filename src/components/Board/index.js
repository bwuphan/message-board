import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class Board extends Component {
  constructor(props) {
    console.log('here');
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    console.log('here');
  }

  render() {
    return (
      <h2>hello world</h2>
    )
  }
}


export default withFirebase(Board);