import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { AuthUserContext } from '../Session';

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
          <div>
            <form
              id="create-message-form"
              onSubmit={this.submitMessage}
              className="mx-auto d-flex flex-column"
            >
              <textarea
                placeholder="Write something here..."
                rows="4"
                cols="50"
                onChange={this.handleMessageChange}
              ></textarea>
              <button type="submit" className="bn btn-primary">Submit</button>
            </form>
          </div>
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