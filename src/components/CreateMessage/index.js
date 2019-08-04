import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { AuthUserContext, withAuthorization } from '../Session';

class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    // this.props.firebase.doAddMessage('hello world', 1);
  }

  handleMessageChange(event) {
    console.log(event.target.value);
    // this.setState({ message: ''})
  }
  submitMessage(message, uid) {

  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <form onSubmit={this.submitMessage}>
            <textarea rows="4" cols="50" onChange={this.handleMessageChange}></textarea>
            <button type="submit" value="Submit" />
          </form>
        )}
      </AuthUserContext.Consumer>
    )
  }
}


export default withFirebase(CreateMessage);