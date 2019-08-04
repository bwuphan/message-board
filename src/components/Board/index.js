import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import CreateMessage from '../CreateMessage';

class Board extends Component {
  constructor(props) {
    console.log('here');
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    // this.props.firebase.doAddMessage('hello world', 1);
    this.props.firebase.messages().on('value', snapshot => {
      const messagesObject = snapshot.val();

      const messageList = Object.keys(messagesObject).map(key => ({
        ...[messagesObject]
      }));
      console.log(messageList)
    });
  }

  render() {
    return (
      <div>
        <h2>hello world</h2>
        <CreateMessage />
      </div>
    )
  }
}


export default withFirebase(Board);