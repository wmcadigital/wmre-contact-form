import React from 'react';
import PropTypes from 'prop-types';

function InsetText(props) {
  const { content, classes } = props;
  return <div className={`wmre-inset-text ${classes}`}>{content}</div>;
}

InsetText.propTypes = {
  content: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
InsetText.defaultProps = {
  classes: null,
};

export default InsetText;
