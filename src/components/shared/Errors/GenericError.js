import React from 'react';
// import Icon from '../Icon/Icon';

const GenericError = () => {
  return (
    <div className="wmre-msg-summary wmre-msg-summary--error wmre-m-b-lg">
      <div className="wmre-msg-summary__header">
        {/* <Icon iconName="general-warning-triangle" className="wmre-msg-summary__icon" /> */}
        <h3 className="wmre-msg-summary__title">There is a problem</h3>
      </div>

      <div className="wmre-msg-summary__info">Please check your answers again.</div>
    </div>
  );
};

export default GenericError;
