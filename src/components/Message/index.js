import React from 'react';

const message = (props) => {
  var date = new Date(props.message.createdOn);
  return (
    <div className="card w-100">
      <div className="card-body">
        <h5 className="card-title">{props.user.username}</h5>
        <p className="card-text">{props.message.text}</p>
        <h6 className="card-subtitle mb-2 text-muted">Sent on {props.message.createdOn}</h6>
      </div>
    </div>
  );
};

export default message;