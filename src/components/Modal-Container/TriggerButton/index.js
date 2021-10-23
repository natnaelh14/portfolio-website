import React from 'react';
import './trigger.css';

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div className="buttonWrapper">
      <button
        className="intro-aboutLink"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </button>
    </div>

  );
};

export default TriggerButton;