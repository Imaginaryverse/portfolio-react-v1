import React from 'react';
import Text from './Text';

const EmailStatus = ({ textCopy, buttonCopy, onClick }) => {
  return (
    <div className="msg-sent-wrapper">
      <Text copyKey={textCopy} className="msg-sent-prompt" />
      {buttonCopy ? (
        <button className="ok-btn clr-disabled-btn" onClick={onClick}>
          <Text copyKey={buttonCopy} />
        </button>
      ) : null}
    </div>
  );
};

export default EmailStatus;
