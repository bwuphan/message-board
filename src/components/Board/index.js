import React from 'react';

import CreateMessage from '../CreateMessage';
import Messages from '../Messages';

const Board = () => {
  const condition = authUser => !!authUser;
  return (
    <div className="container">
      <h1 className="text-center">Message Board</h1>
      <CreateMessage />
      <Messages />
    </div>
  );
}

export default Board;