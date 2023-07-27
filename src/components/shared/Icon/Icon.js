import React from 'react';
import PropTypes from 'prop-types';

// Due to weird Protocol errors with external SVGs the svg use doesn't work well with production builds
// So we Ajax the SVG in with a snippet at the bottom of public/index.html

const Icon = ({ className, iconName }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`#wmre-${iconName}`} href={`#wmre-${iconName}`} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
