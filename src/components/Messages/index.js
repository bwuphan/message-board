import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import Message from '../Message';
import Loader from '../Loader';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messages: [],
      users: {}
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.messages().on('value', snapshot => {
      const messagesObject = snapshot.val();

      const messages = Object.keys(messagesObject).map(key => messagesObject[key]).reverse();
      this.setState({ messages, loading: false })
    });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      this.setState({
        users: usersObject,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
    this.props.firebase.messages().off();
  }

  render() {
    const { users, messages, loading } = this.state;
    const showMessages = Object.keys(users).length > 0 && messages.length > 0;
    if (showMessages && !loading) {
      return (
        <div className="pt-3">
          <ul className="list-unstyled">
            {messages.map((message, i) =>
              <li className="pb-3" key={i}>
                <Message message={message} user={users[message.uid]}/>
              </li>
            )}
          </ul>
        </div>
      );
    } else if (!showMessages) {
      return <div>No messages here...</div>
    } else {
      return <div className="text-center"><Loader color="primary" /></div>
    }
  }
}

export default withFirebase(Messages);