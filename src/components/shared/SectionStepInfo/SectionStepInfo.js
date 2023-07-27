import React from 'react';
import PropTypes from 'prop-types';

function SectionStepInfo(props) {
  const { section, description } = props;
  return (
    <div className="wmre-progress-indicator">
      {section}
      <h4>{description}</h4>
    </div>
  );
}

SectionStepInfo.propTypes = {
  section: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SectionStepInfo.defaultProps = {
  description: null,
};

export default SectionStepInfo;
