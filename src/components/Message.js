import React from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';
import Icon from './shared/Icon/Icon';

const { sanitize } = dompurify;

const Message = ({ type, title, message }) => {
  let iconName;
  switch (type) {
    case 'error':
      iconName = 'warning-triangle';
      break;

    default:
      iconName = 'success';
      break;
  }

  return (
    <div className={`wmre-msg-summary wmre-msg-summary--${type} wmre-col-1 wmre-m-t-lg`}>
      <div className="wmre-msg-summary__header">
        <Icon iconName={`general-${iconName}`} className="wmre-msg-summary__icon" />
        <h3 className="wmre-msg-summary__title">{title}</h3>
      </div>

      <div
        className="wmre-msg-summary__info"
        dangerouslySetInnerHTML={{ __html: sanitize(message) }}
      />
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
