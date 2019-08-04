import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import CreateMessage from '../CreateMessage';
import Messages from '../Messages';

const Board = () => (
  <div>
    <Messages />
    <CreateMessage />
  </div>
)

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Board);