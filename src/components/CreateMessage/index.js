import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { AuthUserContext, withAuthorization } from '../Session';

class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      uid: null
    }
  }

  componentDidMount() {
    if (this.props.authUser.uid) {
      this.setState({ uid: this.props.authUser.uid});
    }
  }

  handleMessageChange = (event) => this.setState({ message: event.target.value });

  submitMessage = (event) => {
    this.props.firebase.doAddMessage(this.state.message, this.state.uid)
      .then(() => {
        this.setState({ message: null });
        document.getElementById('create-message-form').reset();
      });

    event.preventDefault();
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <form
            id="create-message-form"
            className="d-flex" onSubmit={this.submitMessage}>
            <textarea rows="4" cols="50" onChange={this.handleMessageChange}></textarea>
            <button type="submit">Submit</button>
          </form>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const createMessage = props =>  (
  <AuthUserContext.Consumer>
    {authUser => (
      authUser ? <CreateMessage {...props} authUser={authUser} /> : <div></div>
    )}
  </AuthUserContext.Consumer>
)


export default withFirebase(createMessage);