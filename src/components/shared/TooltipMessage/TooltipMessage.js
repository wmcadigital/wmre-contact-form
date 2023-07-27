import React from 'react';
import PropTypes from 'prop-types';
// Import styling
import s from './TooltipMessage.module.scss';

const TooltipMessage = ({ text }) => {
  return <div className={`wmre-col-1 wmre-p-md wmre-m-b-md ${s.tooltipMessage}`}>{text}</div>;
};

TooltipMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TooltipMessage;
