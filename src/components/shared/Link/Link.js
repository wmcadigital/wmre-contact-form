import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/shared/Icon/Icon';

function Link(props) {
  const { link, text, classes, target } = props;
  const icon = 'general-chevron-right';
  return (
    <a href={link} className={`wmre-link wmre-link--with-chevron ${classes}`} target={target}>
      {text}
      <Icon className="wmre-link__chevron wmre-link__chevron--right" iconName={icon} />
    </a>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  target: PropTypes.string,
};
Link.defaultProps = {
  classes: null,
  target: '_self',
};

export default Link;
